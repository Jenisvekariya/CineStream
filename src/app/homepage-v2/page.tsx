import { getMovies, getGenres } from '@/lib/data';
import { HeroSectionV2 } from '@/components/home-v2/hero-section-v2';
import { GenreGrid } from '@/components/home-v2/genre-grid';
import { TopRatedList } from '@/components/home-v2/top-rated-list';
import { MovieRow } from '@/components/movie-row';

export default async function HomepageV2() {
  const movies = await getMovies();
  const genres = await getGenres();

  const featuredMovies = movies.slice(0, 5);
  const topRatedMovies = [...movies].sort((a, b) => b.rating - a.rating).slice(0, 5);
  const freeMovies = movies.filter(m => m.isFree).slice(0, 10);
  const newReleases = movies.slice(1, 11).sort(() => 0.5 - Math.random());

  return (
    <div className="flex flex-col bg-gradient-to-b from-background to-card">
      <HeroSectionV2 movies={featuredMovies} />

      <div className="container py-12 md:py-16 lg:py-20 space-y-12 md:space-y-16 lg:space-y-20">
        <TopRatedList movies={topRatedMovies} />
        <GenreGrid genres={genres} />
        <MovieRow title="Free To Watch" movies={freeMovies} />
        <MovieRow title="New Releases" movies={newReleases} />
      </div>
    </div>
  );
}
