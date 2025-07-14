import Link from 'next/link';
import Image from 'next/image';
import type { Movie } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { PlayCircle, ArrowDownToLine } from 'lucide-react';

type MovieCardProps = {
  movie: Movie;
  rank?: number;
};

export function MovieCard({ movie, rank }: MovieCardProps) {
  const posterHint = movie.genres.join(' ').toLowerCase();
  const lowestPrice = movie.isFree ? 0 : Math.min(...movie.qualities.map(q => q.price));

  return (
    <div className="flex flex-col gap-2">
      <Link href={`/movies/${movie.id}`} className="block group relative overflow-hidden rounded-lg shadow-lg aspect-[2/3] transition-transform duration-300 ease-in-out hover:scale-105">
          <Image
            src={movie.poster}
            alt={movie.title}
            width={500}
            height={750}
            className="w-full h-full object-cover"
            data-ai-hint={posterHint}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          
          {rank && (
            <div className="absolute top-2 left-2 w-8 h-8 md:w-10 md:h-10 bg-primary/90 text-primary-foreground flex items-center justify-center font-bold text-lg md:text-xl rounded-full shadow-lg z-10">
              {rank}
            </div>
          )}

          <div className="absolute top-2 right-2 flex flex-col gap-1 z-10">
            {movie.qualities.slice(0, 2).map((q) => (
              <Badge key={q.quality} variant="secondary" className="text-xs">{q.quality}</Badge>
            ))}
            {movie.isFree && <Badge className="text-xs bg-primary">Free</Badge>}
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out bg-gradient-to-t from-black/90 to-transparent">
            <h3 className="font-headline text-lg font-bold text-white truncate">{movie.title}</h3>
            <p className="text-sm text-muted-foreground">{movie.year} &bull; {movie.genres[0]}</p>
            <div className="flex gap-2 mt-2">
              <Button size="sm" className="flex-1 bg-primary/90 hover:bg-primary">
                <PlayCircle className="mr-2 h-4 w-4" />
                Watch
              </Button>
              <Button size="sm" variant="secondary" className="flex-1">
                <ArrowDownToLine className="mr-2 h-4 w-4" />
                Download
              </Button>
            </div>
          </div>
          
          <div className="absolute bottom-0 left-0 right-0 p-4 group-hover:opacity-0 transition-opacity duration-300">
               <h3 className="font-headline text-lg font-bold text-white truncate">{movie.title}</h3>
          </div>
      </Link>
      <div className="text-center">
        {movie.isFree ? (
          <p className="font-bold text-primary">Free</p>
        ) : (
          <p className="text-muted-foreground">From <span className="font-bold text-foreground">${lowestPrice.toFixed(2)}</span></p>
        )}
      </div>
    </div>
  );
}
