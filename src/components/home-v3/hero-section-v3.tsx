import type { Movie } from '@/lib/types';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { PlayCircle, Info } from 'lucide-react';

type HeroSectionV3Props = {
  movie: Movie;
};

export function HeroSectionV3({ movie }: HeroSectionV3Props) {
  return (
    <section className="relative w-full h-[75vh] min-h-[500px] max-h-[800px] text-white">
      <Image
        src={movie.poster}
        alt={movie.title}
        fill
        priority
        className="object-cover object-center"
        data-ai-hint={`${movie.genres.join(' ')} movie`}
      />
      <div className="absolute inset-0 bg-black/60 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
      <div className="container relative z-10 flex flex-col justify-center h-full">
        <div className="max-w-2xl space-y-5">
          <Badge variant="secondary" className="text-base py-1 px-3">Now Streaming</Badge>
          <h1 className="text-5xl md:text-7xl font-headline font-extrabold drop-shadow-2xl">
            {movie.title}
          </h1>
          <div className="flex items-center gap-4 text-muted-foreground font-semibold">
            <span>{movie.year}</span>
            <span>&bull;</span>
            <span>{movie.genres.join(', ')}</span>
            <span>&bull;</span>
            <span>{movie.duration}</span>
          </div>
          <p className="text-lg text-muted-foreground line-clamp-3 leading-relaxed drop-shadow-lg">
            {movie.description}
          </p>
          <div className="flex items-center gap-4 pt-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 rounded-full text-lg px-8 py-6">
              <Link href={`/movies/${movie.id}`}>
                <PlayCircle className="mr-2 h-6 w-6" />
                Watch Now
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-2 border-white/80 hover:bg-white/10 text-white rounded-full text-lg px-8 py-6">
              <Link href={`/movies/${movie.id}`}>
                <Info className="mr-2 h-6 w-6" />
                More Info
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
