import { getMovies, getGenres, getTVShows } from '@/lib/data';
import { HeroSectionV3 } from '@/components/home-v3/hero-section-v3';
import { FeaturedContent } from '@/components/home-v3/featured-content';
import { TVShowRow } from '@/components/tv-show-row';
import { MovieRow } from '@/components/movie-row';

export default async function HomepageV3() {
  const movies = await getMovies();
  const tvShows = await getTVShows();

  const heroMovie = movies[2]; // Cyber Runners
  const featuredMovies = movies.slice(8, 16);
  const topMovie = movies.sort((a, b) => b.rating - a.rating)[0];
  const trendingShows = tvShows.slice(0, 12).sort(() => 0.5 - Math.random());
  const freeMovies = movies.filter(m => m.isFree).slice(0, 10);

  return (
    <div className="flex flex-col bg-background">
      <HeroSectionV3 movie={heroMovie} />
      <div className="container py-12 md:py-16 lg:py-20 space-y-16">
        <FeaturedContent topMovie={topMovie} featuredMovies={featuredMovies} />
        <MovieRow title="Free To Watch" movies={freeMovies} />
        <TVShowRow title="Trending TV Shows" shows={trendingShows} />
      </div>
    </div>
  );
}
