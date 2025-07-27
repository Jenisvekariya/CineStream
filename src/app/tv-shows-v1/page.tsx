'use client';

import { Suspense, useEffect, useState, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import { getTVShows, getTVShowGenres } from '@/lib/data';
import type { TVShow } from '@/lib/types';
import { TVShowCard } from '@/components/tv-show-card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Skeleton } from '@/components/ui/skeleton';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious, PaginationEllipsis } from '@/components/ui/pagination';


const ITEMS_PER_PAGE = 12;

function TVShowsPageContent() {
  const searchParams = useSearchParams();
  const [tvShows, setTvShows] = useState<TVShow[]>([]);
  const [genres, setGenres] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  const [searchTerm, setSearchTerm] = useState(searchParams.get('q') || '');
  const [selectedGenre, setSelectedGenre] = useState(searchParams.get('genre') || 'all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [currentPage, setCurrentPage] = useState(Number(searchParams.get('page')) || 1);

  useEffect(() => {
    async function fetchData() {
      const [showsData, genresData] = await Promise.all([getTVShows(), getTVShowGenres()]);
      setTvShows(showsData);
      setGenres(genresData);
      setLoading(false);
    }
    fetchData();
  }, []);

  useEffect(() => {
    setSearchTerm(searchParams.get('q') || '');
    setSelectedGenre(searchParams.get('genre') || 'all');
    setCurrentPage(Number(searchParams.get('page')) || 1);
  }, [searchParams]);

  const filteredShows = useMemo(() => {
    return tvShows.filter(show => {
      const matchesSearch = show.title.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesGenre = selectedGenre === 'all' || show.genres.includes(selectedGenre);
      const matchesStatus = selectedStatus === 'all' 
        || (selectedStatus === 'ongoing' && show.endYear === null) 
        || (selectedStatus === 'ended' && show.endYear !== null);
      return matchesSearch && matchesGenre && matchesStatus;
    });
  }, [tvShows, searchTerm, selectedGenre, selectedStatus]);

  const totalPages = Math.ceil(filteredShows.length / ITEMS_PER_PAGE);
  const paginatedShows = filteredShows.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  const renderPagination = () => {
    if (totalPages <= 1) return null;
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }
    return (
         <Pagination>
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious href={currentPage > 1 ? `?page=${currentPage - 1}` : '#'} />
                </PaginationItem>
                {pageNumbers.map(number => (
                     <PaginationItem key={number}>
                        <PaginationLink href={`?page=${number}`} isActive={currentPage === number}>{number}</PaginationLink>
                    </PaginationItem>
                ))}
                 {totalPages > 5 && <PaginationEllipsis />}
                <PaginationItem>
                    <PaginationNext href={currentPage < totalPages ? `?page=${currentPage + 1}` : '#'} />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    )
  }

  if (loading) {
    return (
      <div className="container py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
          {Array.from({ length: 8 }).map((_, i) => (
             <Skeleton key={i} className="w-full aspect-[2/3] rounded-lg" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="container py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-headline font-bold mb-2">Search TV Shows</h1>
        <p className="text-muted-foreground">Find your next series to binge watch.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 sticky top-16 bg-background/95 py-4 z-40 backdrop-blur">
        <Input
          placeholder="Search by title..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="md:col-span-3"
        />
        <Select value={selectedGenre} onValueChange={setSelectedGenre}>
          <SelectTrigger><SelectValue placeholder="All Genres" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Genres</SelectItem>
            {genres.map(genre => <SelectItem key={genre} value={genre}>{genre}</SelectItem>)}
          </SelectContent>
        </Select>
        <Select value={selectedStatus} onValueChange={setSelectedStatus}>
          <SelectTrigger><SelectValue placeholder="All Statuses" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Statuses</SelectItem>
            <SelectItem value="ongoing">Ongoing</SelectItem>
            <SelectItem value="ended">Ended</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {paginatedShows.length > 0 ? (
        <>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
            {paginatedShows.map(show => <TVShowCard key={show.id} show={show} />)}
          </div>
           <div className="mt-12">
            {renderPagination()}
          </div>
        </>
      ) : (
        <div className="text-center py-20">
          <h3 className="text-2xl font-headline">No TV shows found</h3>
          <p className="text-muted-foreground mt-2">Try adjusting your search or filters.</p>
        </div>
      )}
    </div>
  );
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

export default function TVShowsPageV1() {
  return (
    <Suspense fallback={<LoadingSkeleton />}>
      <TVShowsPageContent />
    </Suspense>
  )
}
