import type { Movie } from '@/lib/types';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlayCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

type HeroSectionV2Props = {
  movies: Movie[];
};

export function HeroSectionV2({ movies }: HeroSectionV2Props) {
  if (movies.length < 5) {
    return null; // Need at least 5 movies for this layout
  }

  const [mainMovie, ...sideMovies] = movies;

  return (
    <section className="container py-8 md:py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 h-[70vh] max-h-[700px]">
        
        {/* Main Movie */}
        <div className="lg:col-span-2 relative rounded-xl overflow-hidden group">
          <Image
            src={mainMovie.poster}
            alt={mainMovie.title}
            fill
            priority
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            data-ai-hint={`${mainMovie.genres.join(' ')} movie`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          <div className="absolute bottom-0 left-0 p-6 md:p-8 text-white space-y-3">
             <Badge variant="destructive">{mainMovie.genres[0]}</Badge>
            <h1 className="text-3xl md:text-5xl font-headline font-bold drop-shadow-lg">
              {mainMovie.title}
            </h1>
            <p className="text-sm text-muted-foreground line-clamp-2 max-w-lg drop-shadow">
              {mainMovie.description}
            </p>
            <Button asChild size="lg" className="mt-2">
              <Link href={`/movies/${mainMovie.id}`}>
                <PlayCircle className="mr-2 h-6 w-6" />
                Watch Now
              </Link>
            </Button>
          </div>
        </div>

        {/* Side Movies */}
        <div className="hidden lg:grid grid-rows-4 gap-4">
          {sideMovies.map((movie, index) => (
            <Link href={`/movies/${movie.id}`} key={movie.id} className="relative rounded-xl overflow-hidden group">
              <Image
                src={movie.poster}
                alt={movie.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                data-ai-hint={`${movie.genres.join(' ')} movie`}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />
              <div className="absolute bottom-0 left-0 p-4 text-white">
                <h3 className="font-headline font-semibold drop-shadow-md truncate">{movie.title}</h3>
                <p className="text-xs text-muted-foreground">{movie.year}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
