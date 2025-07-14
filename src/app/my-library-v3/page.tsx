import { getMovies, getTVShows } from '@/lib/data';
import type { Movie, TVShow } from '@/lib/types';
import Image from 'next/image';
import Link from 'next/link';
import { Progress } from '@/components/ui/progress';

const WatchlistItem = ({ item }: { item: Movie | TVShow }) => {
    const isMovie = 'duration' in item;
    const href = isMovie ? `/movies/${item.id}` : `/tv-shows/${item.id}`;
    const progress = Math.floor(Math.random() * 80) + 10;

    return (
        <Link href={href} className="group">
            <div className="relative aspect-[16/9] rounded-xl overflow-hidden shadow-lg">
                <Image
                    src={item.poster}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 p-4 text-white">
                    <h3 className="font-headline text-lg font-bold drop-shadow-md">{item.title}</h3>
                </div>
            </div>
             <div className="mt-2 space-y-1">
                <p className="text-xs text-muted-foreground">{isMovie ? 'Movie' : `Season ${Math.floor(Math.random() * (item as TVShow).seasons) + 1}`}</p>
                <Progress value={progress} className="h-1.5" />
            </div>
        </Link>
    )
}

export default async function MyLibraryV3() {
  const movies = await getMovies();
  const tvShows = await getTVShows();

  const continueWatching = [movies[1], tvShows[2], movies[3], tvShows[0]];
  const myList = [...movies.slice(5, 9), ...tvShows.slice(3, 7)];

  return (
    <div className="container py-12 md:py-16">
        <div className="space-y-12">
            <section>
                <h2 className="text-3xl font-headline font-bold mb-6">Continue Watching</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8">
                    {continueWatching.map(item => (
                        <WatchlistItem key={item.id} item={item} />
                    ))}
                </div>
            </section>
            <section>
                <h2 className="text-3xl font-headline font-bold mb-6">My List</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
                    {myList.map(item => {
                         const isMovie = 'duration' in item;
                         const href = isMovie ? `/movies/${item.id}` : `/tv-shows/${item.id}`;
                         return (
                            <Link key={item.id} href={href} className="block group relative overflow-hidden rounded-lg shadow-lg aspect-[2/3] transition-transform duration-300 ease-in-out hover:scale-105">
                                <Image
                                    src={item.poster}
                                    alt={item.title}
                                    fill
                                    className="w-full h-full object-cover"
                                />
                            </Link>
                         )
                    })}
                </div>
            </section>
        </div>
    </div>
  );
}
