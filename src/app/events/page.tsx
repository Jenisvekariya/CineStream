import { Calendar } from '@/components/calendar';

export default function EventsPage() {
    return (
        <div className="container py-12">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-headline font-bold mb-4">Events Calendar</h1>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                    Keep track of upcoming movie premieres, special screenings, and community events.
                </p>
            </div>
            <Calendar />
        </div>
    );
}
