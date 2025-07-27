import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card } from '@/components/ui/card';
import Image from 'next/image';

const teamMembers = [
    { name: 'Alice Johnson', role: 'Founder & CEO', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop' },
    { name: 'Bob Williams', role: 'Head of Engineering', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop' },
    { name: 'Charlie Brown', role: 'Lead Film Curator', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop' },
    { name: 'Diana Prince', role: 'Head of Design', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop' },
];

export default function AboutV2Page() {
    return (
        <div className="bg-background">
            <section className="relative h-[50vh] flex items-center justify-center text-center text-white">
                <Image
                    src="https://images.unsplash.com/photo-1543536448-d209d2d13a1c?q=80&w=2070&auto=format&fit=crop"
                    alt="Team working"
                    fill
                    className="object-cover"
                    data-ai-hint="team work"
                />
                <div className="absolute inset-0 bg-black/60" />
                <div className="relative z-10 p-4">
                    <h1 className="text-5xl md:text-7xl font-headline font-extrabold drop-shadow-lg">We Are CineStream</h1>
                    <p className="mt-4 text-lg md:text-xl text-muted-foreground drop-shadow-md">Connecting the world through the art of film.</p>
                </div>
            </section>

            <section className="container py-16">
                <div className="max-w-4xl mx-auto text-lg text-center leading-relaxed text-muted-foreground">
                    <p>
                        We believe that movies are more than just entertainment; they are a powerful medium for empathy, understanding, and connection. CineStream was created to be a bridge between incredible stories and audiences who crave them. Our platform is meticulously crafted by a team that lives and breathes cinema, dedicated to bringing you a library that is both vast and thoughtfully curated.
                    </p>
                </div>
            </section>

            <section className="bg-card py-20">
                <div className="container">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-headline font-bold">Meet the Team</h2>
                        <p className="text-muted-foreground mt-2">The passionate individuals behind your favorite streaming service.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                        {teamMembers.map(member => (
                            <Card key={member.name} className="text-center p-6 border-0 shadow-lg">
                                <Avatar className="w-24 h-24 mx-auto mb-4 border-4 border-primary/50">
                                    <AvatarImage src={member.image} alt={member.name} />
                                    <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                                </Avatar>
                                <h3 className="text-lg font-headline font-semibold">{member.name}</h3>
                                <p className="text-sm text-primary">{member.role}</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
