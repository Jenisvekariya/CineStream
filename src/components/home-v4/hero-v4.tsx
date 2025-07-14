import type { Movie, TVShow } from '@/lib/types';
import Link from 'next/link';
import { Button } from '../ui/button';
import { Play } from 'lucide-react';

type HeroV4Props = {
    item: Movie | TVShow;
}

export function HeroV4({ item }: HeroV4Props) {
    const isMovie = 'duration' in item;
    const href = isMovie ? `/movies/${item.id}` : `/tv-shows/${item.id}`;

    return (
        <section className="container py-12 md:py-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <p className="text-primary font-semibold tracking-widest uppercase">{isMovie ? (item as Movie).genres[0] : (item as TVShow).genres[0]}</p>
                    <h1 className="text-5xl lg:text-7xl font-headline font-extrabold tracking-tighter">{item.title}</h1>
                    <p className="text-lg text-muted-foreground max-w-lg">{item.description}</p>
                    <div className="flex gap-4">
                        <Button asChild size="lg" className="rounded-full px-8 text-lg">
                            <Link href={href}><Play className="mr-2 fill-current" /> Play</Link>
                        </Button>
                        <Button asChild size="lg" variant="outline" className="rounded-full px-8 text-lg">
                            <Link href={href}>More Info</Link>
                        </Button>
                    </div>
                </div>
                 <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl -rotate-3 hover:rotate-0 transition-transform duration-500">
                    <video
                        src="https://videos.pexels.com/video-files/3209828/3209828-hd_1080_1920_25fps.mp4"
                        poster={item.poster}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                    />
                     <div className="absolute inset-0 bg-black/20" />
                </div>
            </div>
        </section>
    )
}
