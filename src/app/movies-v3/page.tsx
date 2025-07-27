import { getMovies } from '@/lib/data';
import { MovieListItem } from '@/components/movie-list-item';

export default async function MoviesPageV3() {
    const movies = await getMovies();
    const sortedMovies = [...movies].sort((a,b) => b.rating - a.rating);

    return (
        <div className="container py-12">
            <div className="mb-10">
                <h1 className="text-4xl font-headline font-bold">All Movies (List View)</h1>
                <p className="text-lg text-muted-foreground mt-1">Browse our extensive library of films with detailed information.</p>
            </div>

            <div className="space-y-6">
                {sortedMovies.map(movie => (
                    <MovieListItem key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    )
}
