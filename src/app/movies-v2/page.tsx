import { getMovies } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import { PlayCircle } from 'lucide-react';

export default async function MoviesPageV2() {
  const allMovies = await getMovies();

  return (
    <div className="container py-12">
       <div className="mb-10">
        <h1 className="text-4xl font-headline font-bold">Movie Gallery</h1>
        <p className="text-lg text-muted-foreground mt-1">A cinematic view of our films.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {allMovies.map(movie => (
          <Link href={`/movies/${movie.id}`} key={movie.id} className="group">
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg">
                <Image
                    src={movie.poster}
                    alt={movie.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    data-ai-hint={`${movie.genres.join(' ')} movie`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                 <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity">
                    <PlayCircle className="w-12 h-12 text-white" />
                </div>
                <div className="absolute bottom-0 left-0 p-4 text-white">
                    <h3 className="font-headline text-xl font-bold drop-shadow-md">{movie.title}</h3>
                </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
