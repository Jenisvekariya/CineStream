'use client';

import { Suspense, useEffect, useState, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import { getMovies, getGenres } from '@/lib/data';
import type { Movie } from '@/lib/types';
import { MovieCard } from '@/components/movie-card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Skeleton } from '@/components/ui/skeleton';

function SearchPageContent() {
  const searchParams = useSearchParams();
  const [movies, setMovies] = useState<Movie[]>([]);
  const [genres, setGenres] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  const [searchTerm, setSearchTerm] = useState(searchParams.get('q') || '');
  const [selectedGenre, setSelectedGenre] = useState(searchParams.get('genre') || 'all');
  const [selectedQuality, setSelectedQuality] = useState('all');
  const [selectedPrice, setSelectedPrice] = useState('all');

  useEffect(() => {
    async function fetchData() {
      const [moviesData, genresData] = await Promise.all([getMovies(), getGenres()]);
      setMovies(moviesData);
      setGenres(genresData);
      setLoading(false);
    }
    fetchData();
  }, []);

  useEffect(() => {
    setSearchTerm(searchParams.get('q') || '');
    setSelectedGenre(searchParams.get('genre') || 'all');
  }, [searchParams]);

  const filteredMovies = useMemo(() => {
    return movies.filter(movie => {
      const matchesSearch = movie.title.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesGenre = selectedGenre === 'all' || movie.genres.includes(selectedGenre);
      const matchesQuality = selectedQuality === 'all' || movie.qualities.some(q => q.quality === selectedQuality);
      const matchesPrice = selectedPrice === 'all' || (selectedPrice === 'free' && movie.isFree) || (selectedPrice === 'paid' && !movie.isFree);
      return matchesSearch && matchesGenre && matchesQuality && matchesPrice;
    });
  }, [movies, searchTerm, selectedGenre, selectedQuality, selectedPrice]);
  
  const qualities = ['720p', '1080p', '2K', '4K'];

  if (loading) {
    return (
      <div className="container py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
          {Array.from({ length: 10 }).map((_, i) => (
             <Skeleton key={i} className="w-full aspect-[2/3] rounded-lg" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="container py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-headline font-bold mb-2">Search Movies</h1>
        <p className="text-muted-foreground">Find your next favorite film.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8 sticky top-16 bg-background/95 py-4 z-40 backdrop-blur">
        <Input
          placeholder="Search by title..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="md:col-span-4"
        />
        <Select value={selectedGenre} onValueChange={setSelectedGenre}>
          <SelectTrigger><SelectValue placeholder="All Genres" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Genres</SelectItem>
            {genres.map(genre => <SelectItem key={genre} value={genre}>{genre}</SelectItem>)}
          </SelectContent>
        </Select>
        <Select value={selectedQuality} onValueChange={setSelectedQuality}>
          <SelectTrigger><SelectValue placeholder="All Qualities" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Qualities</SelectItem>
             {qualities.map(q => <SelectItem key={q} value={q}>{q}</SelectItem>)}
          </SelectContent>
        </Select>
        <Select value={selectedPrice} onValueChange={setSelectedPrice}>
          <SelectTrigger><SelectValue placeholder="All Prices" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Prices</SelectItem>
            <SelectItem value="free">Free</SelectItem>
            <SelectItem value="paid">Paid</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {filteredMovies.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
          {filteredMovies.map(movie => <MovieCard key={movie.id} movie={movie} />)}
        </div>
      ) : (
        <div className="text-center py-20">
          <h3 className="text-2xl font-headline">No movies found</h3>
          <p className="text-muted-foreground mt-2">Try adjusting your search or filters.</p>
        </div>
      )}
    </div>
  );
}


export default function SearchPage() {
  return (
    <Suspense fallback={<LoadingSkeleton />}>
      <SearchPageContent />
    </Suspense>
  )
}

function LoadingSkeleton() {
  return (
      <div className="container py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
          {Array.from({ length: 10 }).map((_, i) => (
             <Skeleton key={i} className="w-full aspect-[2/3] rounded-lg" />
          ))}
        </div>
      </div>
  )
}
