import { Building, Target, Users } from 'lucide-react';
import Image from 'next/image';

export default function AboutV1Page() {
    return (
        <div className="container py-12 md:py-20">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-headline font-bold mb-4">About CineStream</h1>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                    Your ultimate destination for movies. We are passionate about bringing the magic of cinema right to your screen.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-16">
                <div>
                    <Image
                        src="https://images.unsplash.com/photo-1574267432553-4b4628081c31?q=80&w=1931&auto=format&fit=crop"
                        alt="Cinema"
                        width={600}
                        height={400}
                        className="rounded-lg shadow-lg"
                        data-ai-hint="cinema audience"
                    />
                </div>
                <div className="space-y-4">
                    <h2 className="text-3xl font-headline font-bold">Our Story</h2>
                    <p className="text-muted-foreground">
                        CineStream was born from a simple yet powerful idea: to make cinema accessible to everyone, everywhere. We started as a small team of film enthusiasts and tech lovers who believed in the power of storytelling. Today, we have grown into a global platform offering a vast library of films, from timeless classics to the latest blockbusters.
                    </p>
                    <p className="text-muted-foreground">
                        We are committed to providing a seamless and immersive viewing experience, with high-quality streaming and a user-friendly interface. Our mission is to connect people with stories that inspire, entertain, and move them.
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div className="p-6 border rounded-lg">
                    <Building className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-headline font-bold mb-2">Our Company</h3>
                    <p className="text-muted-foreground">
                        Founded in 2020, we aim to revolutionize the digital streaming space with innovation and a user-first approach.
                    </p>
                </div>
                <div className="p-6 border rounded-lg">
                    <Target className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-headline font-bold mb-2">Our Mission</h3>
                    <p className="text-muted-foreground">
                        To deliver an unparalleled selection of films and create a community for movie lovers to share their passion.
                    </p>
                </div>
                <div className="p-6 border rounded-lg">
                    <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-headline font-bold mb-2">Our Team</h3>
                    <p className="text-muted-foreground">
                        A diverse group of designers, engineers, and film curators dedicated to building the best streaming experience.
                    </p>
                </div>
            </div>
        </div>
    );
}
