import { getTVShows } from '@/lib/data';
import { TVShowListItem } from '@/components/tv-show-list-item';

export default async function TVShowsPageV3() {
    const shows = await getTVShows();
    const sortedShows = [...shows].sort((a,b) => b.rating - a.rating);

    return (
        <div className="container py-12">
            <div className="mb-10">
                <h1 className="text-4xl font-headline font-bold">All TV Shows (List View)</h1>
                <p className="text-lg text-muted-foreground mt-1">Browse our extensive library of TV series with detailed information.</p>
            </div>

            <div className="space-y-6">
                {sortedShows.map(show => (
                    <TVShowListItem key={show.id} show={show} />
                ))}
            </div>
        </div>
    )
}
