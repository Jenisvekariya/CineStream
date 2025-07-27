'use client';

import { useState } from 'react';
import { addDays, format, isSameDay, isAfter, isBefore, startOfToday } from 'date-fns';
import { Calendar as CalendarIcon, Plus } from 'lucide-react';
import { Calendar as DayPickerCalendar } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { cn } from '@/lib/utils';


type Event = {
    date: Date;
    title: string;
};

const initialEvents: Event[] = [
    { date: new Date(), title: 'Cyber Runners Premiere' },
    { date: addDays(new Date(), 4), title: 'Sci-Fi Marathon' },
    { date: addDays(new Date(), 10), title: 'Q&A with Cosmic Odyssey Director' },
];

export function Calendar() {
    const { toast } = useToast();
    const [events, setEvents] = useState<Event[]>(initialEvents);
    const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
    const [newEventTitle, setNewEventTitle] = useState('');

    const handleAddEvent = (e: React.FormEvent) => {
        e.preventDefault();
        if (!newEventTitle || !selectedDate) {
            toast({
                variant: 'destructive',
                title: 'Error',
                description: 'Please select a date and enter a title.',
            });
            return;
        }
        const newEvent: Event = {
            date: selectedDate,
            title: newEventTitle
        };
        setEvents([...events, newEvent]);
        setNewEventTitle('');
        toast({
            title: 'Event Added!',
            description: `"${newEventTitle}" on ${format(selectedDate, 'PPP')}.`,
        });
    };
    
    const today = startOfToday();
    const currentEvents = events.filter(event => isSameDay(event.date, today));
    const upcomingEvents = events.filter(event => isAfter(event.date, today));

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
                <Card>
                    <CardContent className="p-0">
                         <DayPickerCalendar
                            mode="single"
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                            modifiers={{ highlighted: events.map(e => e.date) }}
                            modifiersClassNames={{
                                highlighted: 'bg-primary/20 text-primary-foreground rounded-full',
                            }}
                            className="p-3"
                            classNames={{
                                day: 'h-12 w-12 text-base',
                                head_cell: 'text-muted-foreground w-12 font-normal text-base',
                                cell: 'w-auto h-auto',
                                caption_label: 'text-xl',
                            }}
                        />
                    </CardContent>
                </Card>
            </div>
            <div className="space-y-6">
                <Card>
                    <CardHeader>
                        <CardTitle>Add New Event</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleAddEvent} className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="event-title">Event Title</Label>
                                <Input 
                                    id="event-title" 
                                    placeholder="e.g. Movie Marathon"
                                    value={newEventTitle}
                                    onChange={(e) => setNewEventTitle(e.target.value)}
                                />
                            </div>
                             <div className="space-y-2">
                                <Label>Event Date</Label>
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <Button
                                            variant={"outline"}
                                            className={cn(
                                                "w-full justify-start text-left font-normal",
                                                !selectedDate && "text-muted-foreground"
                                            )}
                                            >
                                            <CalendarIcon className="mr-2 h-4 w-4" />
                                            {selectedDate ? format(selectedDate, "PPP") : <span>Pick a date</span>}
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0">
                                        <DayPickerCalendar
                                            mode="single"
                                            selected={selectedDate}
                                            onSelect={setSelectedDate}
                                            initialFocus
                                        />
                                    </PopoverContent>
                                </Popover>
                            </div>
                            <Button type="submit" className="w-full">
                                <Plus className="mr-2 h-4 w-4" />
                                Add Event
                            </Button>
                        </form>
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader>
                        <CardTitle>Upcoming Events</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3 max-h-60 overflow-y-auto">
                        {currentEvents.length > 0 && currentEvents.map((event, i) => (
                             <div key={i} className="p-3 rounded-md bg-primary/10">
                                <p className="font-semibold">{event.title}</p>
                                <p className="text-sm text-muted-foreground">Today</p>
                            </div>
                        ))}
                         {upcomingEvents.length > 0 && upcomingEvents.map((event, i) => (
                             <div key={i} className="p-3 rounded-md bg-muted/50">
                                <p className="font-semibold">{event.title}</p>
                                <p className="text-sm text-muted-foreground">{format(event.date, 'PPP')}</p>
                            </div>
                        ))}
                        {events.length === 0 && <p className="text-sm text-muted-foreground">No upcoming events.</p>}
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
