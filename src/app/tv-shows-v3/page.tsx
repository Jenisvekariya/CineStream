import { getTVShows } from '@/lib/data';
import type { TVShow } from '@/lib/types';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import { Star, Tv } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const ShowListItem = ({ show }: { show: TVShow }) => {
    return (
        <Card className="hover:bg-card/80 transition-colors">
            <Link href={`/tv-shows/${show.id}`} className="flex gap-4">
                <div className="relative w-24 h-36 flex-shrink-0">
                    <Image src={show.poster} alt={show.title} fill className="object-cover rounded-l-lg" />
                </div>
                <CardContent className="p-4 space-y-2 flex-grow">
                    <h3 className="font-headline font-bold text-xl">{show.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1"><Star className="w-4 h-4 text-primary" /> {show.rating}</div>
                        <div className="flex items-center gap-1"><Tv className="w-4 h-4" /> {show.seasons} Seasons</div>
                        <span>{show.startYear} - {show.endYear ?? 'Present'}</span>
                    </div>
                    <p className="text-sm text-muted-foreground line-clamp-2">{show.description}</p>
                    <div className="flex flex-wrap gap-2 pt-1">
                        {show.genres.slice(0, 3).map(g => <Badge key={g} variant="outline">{g}</Badge>)}
                    </div>
                </CardContent>
            </Link>
        </Card>
    )
}

export default async function TVShowsPageV3() {
    const shows = await getTVShows();
    const sortedShows = [...shows].sort((a,b) => b.rating - a.rating);

    return (
        <div className="container py-12">
            <div className="mb-10">
                <h1 className="text-4xl font-headline font-bold">All TV Shows</h1>
                <p className="text-lg text-muted-foreground mt-1">Browse our extensive library of TV series.</p>
            </div>

            <div className="grid grid-cols-1 gap-6">
                {sortedShows.map(show => (
                    <ShowListItem key={show.id} show={show} />
                ))}
            </div>
        </div>
    )
}
