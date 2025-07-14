import type { Movie } from '@/lib/types';
import { MovieCard } from '@/components/movie-card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

type MovieRowProps = {
  title: string;
  movies: Movie[];
};

export function MovieRow({ title, movies }: MovieRowProps) {
  return (
    <section className="container">
      <h2 className="text-2xl font-headline font-bold mb-4">{title}</h2>
      <Carousel
        opts={{
          align: 'start',
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-4">
          {movies.map((movie) => (
            <CarouselItem key={movie.id} className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6 pl-4">
              <MovieCard movie={movie} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-[-10px] top-1/2 -translate-y-1/2 z-10 hidden md:flex" />
        <CarouselNext className="absolute right-[-10px] top-1/2 -translate-y-1/2 z-10 hidden md:flex" />
      </Carousel>
    </section>
  );
}
