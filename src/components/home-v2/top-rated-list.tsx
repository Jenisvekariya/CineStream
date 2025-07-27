import type { Movie } from '@/lib/types';
import Image from 'next/image';
import Link from 'next/link';
import { Star, PlayCircle } from 'lucide-react';
import { Button } from '../ui/button';

type TopRatedListProps = {
  movies: Movie[];
};

export function TopRatedList({ movies }: TopRatedListProps) {
  return (
    <section>
      <h2 className="text-3xl font-headline font-bold mb-6">Top 5 This Week</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
        {movies.map((movie, index) => (
          <Link href={`/movies/${movie.id}`} key={movie.id} className="group">
             <div className="flex items-center gap-4 p-2 rounded-lg transition-colors group-hover:bg-white/5">
                <div className="text-4xl font-bold font-headline text-primary w-10 text-center">
                    {index + 1}
                </div>
                <div className="relative w-16 h-24 rounded-md overflow-hidden flex-shrink-0">
                    <Image 
                        src={movie.poster} 
                        alt={movie.title} 
                        fill 
                        className="object-cover"
                        data-ai-hint={`${movie.genres.join(' ')} movie`}
                    />
                </div>
                <div className="flex-grow overflow-hidden">
                    <h3 className="font-semibold text-foreground truncate">{movie.title}</h3>
                    <p className="text-sm text-muted-foreground">{movie.year} &bull; {movie.genres[0]}</p>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Star className="w-4 h-4 text-primary"/>
                        <span>{movie.rating}</span>
                    </div>
                </div>
                <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 transition-opacity">
                   <PlayCircle className="w-6 h-6 text-primary" />
                </Button>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
