import { getTVShows, getTVShowGenres } from '@/lib/data';
import { TVShowRow } from '@/components/tv-show-row';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlayCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export default async function TVShowsPageV2() {
  const allShows = await getTVShows();
  const genres = await getTVShowGenres();

  const heroShow = allShows.find(s => s.id === 'throne-of-swords');

  return (
    <div className="flex flex-col">
      {heroShow && (
        <div className="relative w-full h-[60vh]">
          <Image
            src={heroShow.poster}
            alt={heroShow.title}
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 p-8 md:p-16">
            <div className="max-w-2xl text-white">
              <Badge variant="destructive" className="mb-4 text-lg">Featured Show</Badge>
              <h1 className="text-5xl md:text-7xl font-headline font-bold drop-shadow-xl">{heroShow.title}</h1>
              <p className="mt-4 text-lg text-white/90 line-clamp-3 drop-shadow-lg">{heroShow.description}</p>
              <Button asChild size="lg" className="mt-6">
                <Link href={`/tv-shows/${heroShow.id}`}>
                  <PlayCircle className="mr-2" /> Watch Now
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}

      <div className="py-12 space-y-12">
        <TVShowRow title="Trending Now" shows={allShows.slice(1, 11)} />
        {genres.map(genre => (
          <TVShowRow 
            key={genre}
            title={`${genre} Series`} 
            shows={allShows.filter(s => s.genres.includes(genre)).slice(0, 12)} />
        ))}
      </div>
    </div>
  );
}
