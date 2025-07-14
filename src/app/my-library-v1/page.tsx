'use client';
import { useState, useEffect } from 'react';
import type { Movie, TVShow } from '@/lib/types';
import { getMovies, getTVShows } from '@/lib/data';
import { MovieCard } from '@/components/movie-card';
import { TVShowCard } from '@/components/tv-show-card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Skeleton } from '@/components/ui/skeleton';

export default function MyLibraryV1() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [tvShows, setTvShows] = useState<TVShow[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const [moviesData, showsData] = await Promise.all([getMovies(), getTVShows()]);
      // Simulate a user's library
      setMovies(moviesData.slice(0, 8));
      setTvShows(showsData.slice(0, 6));
      setLoading(false);
    }
    fetchData();
  }, []);

  return (
    <div className="container py-12">
      <div className="text-left mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-bold mb-2">My Library</h1>
        <p className="text-lg text-muted-foreground">Your saved movies and TV shows.</p>
      </div>

      <Tabs defaultValue="movies" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="movies">Movies</TabsTrigger>
          <TabsTrigger value="tv-shows">TV Shows</TabsTrigger>
        </TabsList>
        <TabsContent value="movies" className="mt-8">
          {loading ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
              {Array.from({ length: 8 }).map((_, i) => <Skeleton key={i} className="w-full aspect-[2/3] rounded-lg" />)}
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
              {movies.map(movie => <MovieCard key={movie.id} movie={movie} />)}
            </div>
          )}
        </TabsContent>
        <TabsContent value="tv-shows" className="mt-8">
           {loading ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
              {Array.from({ length: 6 }).map((_, i) => <Skeleton key={i} className="w-full aspect-[2/3] rounded-lg" />)}
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
              {tvShows.map(show => <TVShowCard key={show.id} show={show} />)}
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}
