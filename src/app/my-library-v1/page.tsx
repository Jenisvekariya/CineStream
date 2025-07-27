'use client';
import { useWatchlist } from '@/hooks/use-watchlist';
import { MovieCard } from '@/components/movie-card';
import { TVShowCard } from '@/components/tv-show-card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Film } from 'lucide-react';

export default function MyLibraryV1() {
  const { watchlist, loading } = useWatchlist();

  const movies = watchlist.filter(item => item.type === 'movie');
  const tvShows = watchlist.filter(item => item.type === 'tv-show');

  const EmptyState = () => (
    <div className="text-center py-20">
      <Film className="mx-auto h-16 w-16 text-muted-foreground" />
      <h3 className="text-2xl font-headline mt-4">Your Library is Empty</h3>
      <p className="text-muted-foreground mt-2 mb-6">
        Add movies and TV shows to your list to see them here.
      </p>
      <Button asChild>
        <Link href="/">Browse Content</Link>
      </Button>
    </div>
  );

  return (
    <div className="container py-12">
      <div className="text-left mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-bold mb-2">My Library</h1>
        <p className="text-lg text-muted-foreground">Your saved movies and TV shows.</p>
      </div>

      {loading ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
            {Array.from({ length: 8 }).map((_, i) => <Skeleton key={i} className="w-full aspect-[2/3] rounded-lg" />)}
          </div>
      ) : watchlist.length === 0 ? (
        <EmptyState />
      ) : (
        <Tabs defaultValue="movies" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="movies">Movies ({movies.length})</TabsTrigger>
            <TabsTrigger value="tv-shows">TV Shows ({tvShows.length})</TabsTrigger>
          </TabsList>
          <TabsContent value="movies" className="mt-8">
            {movies.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
                {movies.map(movie => <MovieCard key={movie.id} movie={movie} />)}
              </div>
            ) : (
              <p className="text-center text-muted-foreground py-10">No movies in your list yet.</p>
            )}
          </TabsContent>
          <TabsContent value="tv-shows" className="mt-8">
            {tvShows.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
                {tvShows.map(show => <TVShowCard key={show.id} show={show} />)}
              </div>
            ) : (
              <p className="text-center text-muted-foreground py-10">No TV shows in your list yet.</p>
            )}
          </TabsContent>
        </Tabs>
      )}
    </div>
  );
}
