import { getMovies, getGenres } from '@/lib/data';
import { HeroSectionV3 } from '@/components/home-v3/hero-section-v3';
import { FeaturedContent } from '@/components/home-v3/featured-content';
import { MoviePitchGenerator } from '@/components/home-v3/movie-pitch-generator';

export default async function HomepageV3() {
  const movies = await getMovies();
  const genres = await getGenres();

  const heroMovie = movies[2]; // Cyber Runners
  const featuredMovies = movies.slice(8, 14);
  const topMovie = movies.sort((a, b) => b.rating - a.rating)[0];

  return (
    <div className="flex flex-col bg-background">
      <HeroSectionV3 movie={heroMovie} />
      <div className="container py-12 md:py-16 lg:py-20 space-y-16">
        <FeaturedContent topMovie={topMovie} featuredMovies={featuredMovies} />
        <MoviePitchGenerator genres={genres} />
      </div>
    </div>
  );
}
