
'use client';

import { useState } from 'react';
import { addDays, format, isSameDay, isAfter, startOfToday } from 'date-fns';
import { Calendar as CalendarIcon, Plus, Trash2, Edit, X, Tag } from 'lucide-react';
import { Calendar as DayPickerCalendar } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { cn } from '@/lib/utils';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from './ui/alert-dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Badge } from './ui/badge';


type EventCategory = 'Premiere' | 'Marathon' | 'Special Screening' | 'Q&A';

const eventCategories: EventCategory[] = ['Premiere', 'Marathon', 'Special Screening', 'Q&A'];

const categoryColors: Record<EventCategory, string> = {
    'Premiere': 'bg-red-500/80',
    'Marathon': 'bg-blue-500/80',
    'Special Screening': 'bg-purple-500/80',
    'Q&A': 'bg-green-500/80',
};


type Event = {
    id: string;
    date: Date;
    title: string;
    category: EventCategory;
};

const createInitialEvents = (): Event[] => {
    const today = startOfToday();
    return [
        { id: 'event-1', date: today, title: 'Cyber Runners Premiere', category: 'Premiere' },
        { id: 'event-2', date: addDays(today, 4), title: 'Sci-Fi Marathon', category: 'Marathon' },
        { id: 'event-3', date: addDays(today, 10), title: 'Q&A with Cosmic Odyssey Director', category: 'Q&A' },
    ];
};


export function Calendar() {
    const { toast } = useToast();
    const [events, setEvents] = useState<Event[]>(createInitialEvents);
    const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
    const [newEventTitle, setNewEventTitle] = useState('');
    const [newEventCategory, setNewEventCategory] = useState<EventCategory>('Premiere');
    const [editingEvent, setEditingEvent] = useState<Event | null>(null);

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!newEventTitle || !selectedDate) {
            toast({
                variant: 'destructive',
                title: 'Error',
                description: 'Please select a date and enter a title.',
            });
            return;
        }

        if (editingEvent) {
            // Update existing event
            setEvents(events.map(event => 
                event.id === editingEvent.id ? { ...event, title: newEventTitle, date: selectedDate, category: newEventCategory } : event
            ));
            toast({
                title: 'Event Updated!',
                description: `"${newEventTitle}" has been updated.`,
            });
            setEditingEvent(null);
        } else {
            // Add new event
            const newEvent: Event = {
                id: crypto.randomUUID(),
                date: selectedDate,
                title: newEventTitle,
                category: newEventCategory,
            };
            setEvents([...events, newEvent]);
            toast({
                title: 'Event Added!',
                description: `"${newEventTitle}" on ${format(selectedDate, 'PPP')}.`,
            });
        }
        
        setNewEventTitle('');
        setSelectedDate(new Date());
        setNewEventCategory('Premiere');
    };
    
    const handleEditClick = (event: Event) => {
        setEditingEvent(event);
        setNewEventTitle(event.title);
        setSelectedDate(event.date);
        setNewEventCategory(event.category);
    }
    
    const handleCancelEdit = () => {
        setEditingEvent(null);
        setNewEventTitle('');
        setSelectedDate(new Date());
        setNewEventCategory('Premiere');
    }

    const handleDeleteEvent = (eventId: string) => {
        const eventToDelete = events.find(e => e.id === eventId);
        setEvents(events.filter(event => event.id !== eventId));
        toast({
            variant: 'destructive',
            title: 'Event Deleted',
            description: `"${eventToDelete?.title}" has been removed.`,
        })
    };

    const today = startOfToday();
    const currentEvents = events.filter(event => isSameDay(event.date, today)).sort((a,b) => a.date.getTime() - b.date.getTime());
    const upcomingEvents = events.filter(event => isAfter(event.date, today)).sort((a,b) => a.date.getTime() - b.date.getTime());

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
                        <CardTitle>{editingEvent ? 'Edit Event' : 'Add New Event'}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleFormSubmit} className="space-y-4">
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
                                <Label htmlFor="event-category">Category</Label>
                                <Select value={newEventCategory} onValueChange={(value: EventCategory) => setNewEventCategory(value)}>
                                    <SelectTrigger id="event-category">
                                        <SelectValue placeholder="Select a category" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {eventCategories.map(cat => <SelectItem key={cat} value={cat}>{cat}</SelectItem>)}
                                    </SelectContent>
                                </Select>
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
                            <div className="flex gap-2">
                                {editingEvent && (
                                    <Button type="button" variant="outline" onClick={handleCancelEdit} className="w-full">
                                        <X className="mr-2 h-4 w-4" />
                                        Cancel
                                    </Button>
                                )}
                                <Button type="submit" className="w-full">
                                    <Plus className="mr-2 h-4 w-4" />
                                    {editingEvent ? 'Save Changes' : 'Add Event'}
                                </Button>
                            </div>
                        </form>
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader>
                        <CardTitle>Upcoming Events</CardTitle>
                        <CardDescription>Manage your scheduled events.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3 max-h-96 overflow-y-auto pr-2">
                        {[...currentEvents, ...upcomingEvents].length > 0 ? [...currentEvents, ...upcomingEvents].map((event, i) => (
                             <div key={event.id} className={cn("p-3 rounded-md flex justify-between items-center", isSameDay(event.date, today) ? "bg-primary/10" : "bg-muted/50")}>
                                <div>
                                    <p className="font-semibold">{event.title}</p>
                                    <div className="flex items-center gap-2">
                                      <p className="text-sm text-muted-foreground">{format(event.date, 'PPP')}</p>
                                      <Badge className={cn("text-xs text-white", categoryColors[event.category])}>{event.category}</Badge>
                                    </div>
                                </div>
                                <div className="flex gap-1">
                                    <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => handleEditClick(event)}>
                                        <Edit className="h-4 w-4" />
                                    </Button>
                                    <AlertDialog>
                                        <AlertDialogTrigger asChild>
                                            <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive hover:text-destructive hover:bg-destructive/10">
                                                <Trash2 className="h-4 w-4" />
                                            </Button>
                                        </AlertDialogTrigger>
                                        <AlertDialogContent>
                                            <AlertDialogHeader>
                                                <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                                                <AlertDialogDescription>
                                                    This will permanently delete the event "{event.title}". This action cannot be undone.
                                                </AlertDialogDescription>
                                            </AlertDialogHeader>
                                            <AlertDialogFooter>
                                                <AlertDialogCancel>Cancel</AlertDialogCancel>
                                                <AlertDialogAction onClick={() => handleDeleteEvent(event.id)}>Delete</AlertDialogAction>
                                            </AlertDialogFooter>
                                        </AlertDialogContent>
                                    </AlertDialog>
                                </div>
                            </div>
                        )) : <p className="text-sm text-muted-foreground text-center py-4">No upcoming events.</p>}
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

    