'use client';
import { useWatchlist } from '@/hooks/use-watchlist';
import type { Movie, TVShow } from '@/lib/types';
import Image from 'next/image';
import Link from 'next/link';
import { PlayCircle, Star, Clapperboard } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';

const LibraryItemCard = ({ item }: { item: Movie | TVShow }) => {
  const isMovie = item.type === 'movie';
  const href = isMovie ? `/movies/${item.id}` : `/tv-shows/${item.id}`;

  return (
    <Card className="overflow-hidden group transition-all hover:shadow-lg hover:shadow-primary/20">
      <Link href={href}>
        <div className="flex">
          <div className="relative w-1/3 flex-shrink-0 aspect-[2/3]">
            <Image src={item.poster} alt={item.title} fill className="object-cover" />
             <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity">
              <PlayCircle className="w-8 h-8 text-white" />
            </div>
          </div>
          <CardContent className="p-4 flex flex-col justify-between w-2/3">
            <div>
              <Badge variant={isMovie ? 'secondary' : 'default'} className="mb-2">{isMovie ? 'Movie' : 'TV Show'}</Badge>
              <h3 className="font-headline font-bold text-lg leading-tight line-clamp-2">{item.title}</h3>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                <Star className="w-4 h-4 text-primary" />
                <span>{item.rating}</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground line-clamp-3 mt-2">{item.description}</p>
          </CardContent>
        </div>
      </Link>
    </Card>
  );
};


export default function MyLibraryV2() {
  const { watchlist, loading } = useWatchlist();

  const EmptyState = () => (
    <div className="text-center py-20 bg-background/50 rounded-lg">
      <Clapperboard className="mx-auto h-16 w-16 text-muted-foreground" />
      <h3 className="text-2xl font-headline mt-4">Your Library is Empty</h3>
      <p className="text-muted-foreground mt-2 mb-6 max-w-md mx-auto">
        Looks like you haven't added anything to your list yet. Browse our collection and click the "Add to My List" button to save content here.
      </p>
      <Button asChild>
        <Link href="/">Start Browsing</Link>
      </Button>
    </div>
  );

  return (
    <div className="bg-gradient-to-b from-card to-background min-h-screen">
      <div className="container py-16">
        <div className="mb-12">
          <h1 className="text-5xl font-headline font-bold mb-2">My Library</h1>
          <p className="text-xl text-muted-foreground">Continue where you left off.</p>
        </div>
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <Card key={i}><div className="flex"><Skeleton className="w-1/3 aspect-[2/3]"/><div className="p-4 w-2/3 space-y-2"><Skeleton className="h-5 w-1/4" /><Skeleton className="h-6 w-3/4" /><Skeleton className="h-4 w-1/2" /><Skeleton className="h-12 w-full" /></div></div></Card>
            ))}
          </div>
        ) : watchlist.length === 0 ? (
          <EmptyState />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {watchlist.map(item => (
              <LibraryItemCard key={item.id} item={item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
