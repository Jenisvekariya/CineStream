'use client';
import { useWatchlist } from '@/hooks/use-watchlist';
import type { Movie, TVShow } from '@/lib/types';
import Image from 'next/image';
import Link from 'next/link';
import { Progress } from '@/components/ui/progress';
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';
import { Library } from 'lucide-react';

const WatchlistItem = ({ item }: { item: Movie | TVShow }) => {
    const isMovie = item.type === 'movie';
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

export default function MyLibraryV3() {
    const { watchlist, loading } = useWatchlist();

    // For demo purposes, we'll split the list into "Continue Watching" and "My List"
    const continueWatching = watchlist.slice(0, 4);
    const myList = watchlist.slice(4);

    const EmptyState = () => (
        <div className="text-center py-20">
          <Library className="mx-auto h-16 w-16 text-muted-foreground" />
          <h3 className="text-2xl font-headline mt-4">Your Library is Waiting</h3>
          <p className="text-muted-foreground mt-2 mb-6">
            Add movies and TV shows to your list to see them here.
          </p>
          <Button asChild>
            <Link href="/">Find Something to Watch</Link>
          </Button>
        </div>
      );

  return (
    <div className="container py-12 md:py-16">
        {loading ? (
             <div className="space-y-12">
                <section>
                    <h2 className="text-3xl font-headline font-bold mb-6"><Skeleton className="h-8 w-64" /></h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8">
                        {Array.from({length: 4}).map((_, i) => <div key={i}><Skeleton className="aspect-[16/9] rounded-xl"/><Skeleton className="h-4 w-1/4 mt-2"/><Skeleton className="h-1.5 w-full mt-1"/></div>)}
                    </div>
                </section>
             </div>
        ) : watchlist.length === 0 ? (
            <EmptyState />
        ) : (
            <div className="space-y-12">
                {continueWatching.length > 0 && (
                    <section>
                        <h2 className="text-3xl font-headline font-bold mb-6">Continue Watching</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8">
                            {continueWatching.map(item => (
                                <WatchlistItem key={item.id} item={item} />
                            ))}
                        </div>
                    </section>
                )}
                {myList.length > 0 && (
                    <section>
                        <h2 className="text-3xl font-headline font-bold mb-6">My List</h2>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
                            {myList.map(item => {
                                 const isMovie = item.type === 'movie';
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
                )}
            </div>
        )}
    </div>
  );
}
