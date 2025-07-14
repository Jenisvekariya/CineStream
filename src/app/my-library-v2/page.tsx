import { getMovies, getTVShows } from '@/lib/data';
import type { Movie, TVShow } from '@/lib/types';
import Image from 'next/image';
import Link from 'next/link';
import { Clock, Star, PlayCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

const LibraryItemCard = ({ item }: { item: Movie | TVShow }) => {
  const isMovie = 'duration' in item;
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


export default async function MyLibraryV2() {
  const movies = await getMovies();
  const tvShows = await getTVShows();
  
  const libraryItems = [
    movies[0],
    tvShows[0],
    movies[2],
    tvShows[1],
    movies[4],
    tvShows[3],
    movies[5],
    tvShows[4]
  ];

  return (
    <div className="bg-gradient-to-b from-card to-background min-h-screen">
      <div className="container py-16">
        <div className="mb-12">
          <h1 className="text-5xl font-headline font-bold mb-2">My Library</h1>
          <p className="text-xl text-muted-foreground">Continue where you left off.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {libraryItems.map(item => (
            <LibraryItemCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
