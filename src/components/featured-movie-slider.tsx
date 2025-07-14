'use client';

import Image from 'next/image';
import Link from 'next/link';
import type { Movie } from '@/lib/types';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';
import { PlayCircle, Info } from 'lucide-react';
import Autoplay from "embla-carousel-autoplay"

type FeaturedMovieSliderProps = {
  movies: Movie[];
};

export function FeaturedMovieSlider({ movies }: FeaturedMovieSliderProps) {
  return (
    <div className="w-full relative">
      <Carousel 
        plugins={[Autoplay({delay: 5000})]}
        opts={{ loop: true }} 
        className="w-full"
      >
        <CarouselContent>
          {movies.map((movie) => (
            <CarouselItem key={movie.id}>
              <div className="relative w-full h-[60vh] md:h-[80vh]">
                <Image
                  src={movie.poster}
                  alt={movie.title}
                  fill
                  className="object-cover object-center"
                  priority
                  data-ai-hint={`${movie.genres.join(' ')} movie`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                <div className="absolute inset-0 flex items-end p-8 md:p-16">
                  <div className="max-w-xl text-white space-y-4">
                    <h1 className="text-4xl md:text-6xl font-headline font-bold drop-shadow-lg">
                      {movie.title}
                    </h1>
                    <p className="text-sm md:text-base text-muted-foreground line-clamp-3 drop-shadow-sm">
                      {movie.description}
                    </p>
                    <div className="flex items-center gap-4 pt-4">
                      <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                        <Link href={`/movies/${movie.id}`}>
                          <PlayCircle className="mr-2 h-6 w-6" />
                          Watch Now
                        </Link>
                      </Button>
                      <Button asChild size="lg" variant="secondary">
                        <Link href={`/movies/${movie.id}`}>
                          <Info className="mr-2 h-6 w-6" />
                          More Info
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10 hidden md:flex" />
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10 hidden md:flex" />
      </Carousel>
    </div>
  );
}
