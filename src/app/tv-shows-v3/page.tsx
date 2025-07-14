import { getTVShows } from '@/lib/data';
import { TVShowCard } from '@/components/tv-show-card';

export default async function TVShowsPageV3() {
    const shows = await getTVShows();
    const sortedShows = [...shows].sort((a,b) => b.rating - a.rating);

    return (
        <div className="container py-12">
            <div className="mb-10">
                <h1 className="text-4xl font-headline font-bold">All TV Shows</h1>
                <p className="text-lg text-muted-foreground mt-1">Browse our extensive library of TV series.</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
                {sortedShows.map(show => (
                    <TVShowCard key={show.id} show={show} />
                ))}
            </div>
        </div>
    )
}
