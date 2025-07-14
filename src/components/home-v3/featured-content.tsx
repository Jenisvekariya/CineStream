import type { Movie } from '@/lib/types';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Star, PlayCircle, ArrowRight } from 'lucide-react';

type FeaturedContentProps = {
  topMovie: Movie;
  featuredMovies: Movie[];
};

export function FeaturedContent({ topMovie, featuredMovies }: FeaturedContentProps) {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Top Movie Card */}
      <div className="lg:col-span-1">
        <h2 className="text-3xl font-headline font-bold mb-6">Top Pick For You</h2>
        <Card className="overflow-hidden group">
          <Link href={`/movies/${topMovie.id}`}>
            <div className="relative aspect-[4/3]">
              <Image
                src={topMovie.poster}
                alt={topMovie.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                data-ai-hint={`${topMovie.genres.join(' ')} movie`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            </div>
          </Link>
          <CardContent className="p-4 space-y-2">
            <h3 className="font-headline font-bold text-xl truncate">{topMovie.title}</h3>
            <p className="text-sm text-muted-foreground line-clamp-2">{topMovie.description}</p>
            <div className="flex items-center justify-between pt-2">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Star className="w-5 h-5 text-primary" />
                <span className="font-semibold">{topMovie.rating}</span>
                <span className="text-sm">&bull; {topMovie.year}</span>
              </div>
              <Button size="icon" variant="ghost" asChild>
                <Link href={`/movies/${topMovie.id}`}>
                  <PlayCircle className="w-6 h-6" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Featured List */}
      <div className="lg:col-span-2">
        <h2 className="text-3xl font-headline font-bold mb-6">Featured This Month</h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {featuredMovies.map((movie) => (
            <Link key={movie.id} href={`/movies/${movie.id}`} className="group">
              <div className="relative aspect-[2/3] rounded-lg overflow-hidden">
                <Image
                  src={movie.poster}
                  alt={movie.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  data-ai-hint={`${movie.genres.join(' ')} movie`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-3">
                  <h4 className="text-white font-semibold text-sm drop-shadow-md line-clamp-2">{movie.title}</h4>
                </div>
                 <div className="absolute top-2 right-2 flex items-center justify-center h-8 w-8 rounded-full bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity">
                    <PlayCircle className="h-5 w-5 text-white" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
