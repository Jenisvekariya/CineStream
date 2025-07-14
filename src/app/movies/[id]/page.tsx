import { getMovieById } from '@/lib/data';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { MovieDetailClient } from '@/components/movie-detail-client';
import { Star, Calendar, Clock } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { MovieRow } from '@/components/movie-row';
import { getMovies } from '@/lib/data';

type MovieDetailPageProps = {
  params: {
    id: string;
  };
};

export async function generateMetadata({ params }: MovieDetailPageProps) {
  const movie = await getMovieById(params.id);
  if (!movie) {
    return { title: 'Movie Not Found' };
  }
  return {
    title: `${movie.title} | CineStream`,
    description: movie.description,
  };
}

export default async function MovieDetailPage({ params }: MovieDetailPageProps) {
  const movie = await getMovieById(params.id);
  const allMovies = await getMovies();

  if (!movie) {
    notFound();
  }

  const relatedMovies = allMovies.filter(m => m.genres.includes(movie.genres[0]) && m.id !== movie.id).slice(0, 10);
  const posterHint = movie.genres.join(' ').toLowerCase();

  return (
    <div>
      <div className="relative w-full h-[50vh] md:h-[70vh]">
        <Image
          src={movie.poster}
          alt={movie.title}
          fill
          className="object-cover object-top"
          priority
          data-ai-hint={posterHint}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
      </div>

      <div className="container -mt-32 relative z-10 pb-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <Image
              src={movie.poster}
              alt={movie.title}
              width={500}
              height={750}
              className="rounded-lg shadow-xl w-full"
              data-ai-hint={posterHint}
            />
          </div>
          <div className="md:col-span-2 space-y-6">
            <h1 className="text-4xl md:text-5xl font-headline font-bold text-white">{movie.title}</h1>
            <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-primary" />
                <span>{movie.rating}/10</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>{movie.year}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>{movie.duration}</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {movie.genres.map((genre) => (
                <Badge key={genre} variant="secondary">{genre}</Badge>
              ))}
            </div>
            
            <MovieDetailClient movie={movie} />

          </div>
        </div>
      </div>
      
      <div className="py-10">
        <MovieRow title="Related Movies" movies={relatedMovies} />
      </div>
    </div>
  );
}
