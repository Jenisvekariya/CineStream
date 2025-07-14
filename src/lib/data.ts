import type { Movie, TVShow } from './types';

const movies: Movie[] = [
  {
    id: 'cosmic-odyssey',
    title: 'Cosmic Odyssey',
    poster: 'https://images.unsplash.com/photo-1680339484064-1c06c34562a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxTY2ktRmklMjBBZHZlbnR1cmUlMjBtb3ZpZXxlbnwwfHx8fDE3NTI0ODU2MzB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    year: 2024,
    genres: ['Sci-Fi', 'Adventure'],
    language: 'English',
    duration: '2h 28m',
    description:
      'A team of explorers travel through a newly discovered wormhole to find a new habitable planet for humanity, facing cosmic dangers and the unknown.',
    rating: 8.8,
    qualities: [
      { quality: '720p', price: 4.99, downloadLink: '#', streamLink: '#', fileSize: '1.5 GB' },
      { quality: '1080p', price: 7.99, downloadLink: '#', streamLink: '#', fileSize: '3.0 GB' },
      { quality: '4K', price: 14.99, downloadLink: '#', streamLink: '#', fileSize: '8.0 GB' },
    ],
    isFree: false,
    trailerUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  {
    id: 'echoes-of-the-past',
    title: 'Echoes of the Past',
    poster: 'https://images.unsplash.com/photo-1675295275003-552a83138c0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMHx8RHJhbWElMjBNeXN0ZXJ5JTIwbW92aWV8ZW58MHx8fHwxNzUyNDg1NjMwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    year: 2023,
    genres: ['Drama', 'Mystery'],
    language: 'English',
    duration: '1h 58m',
    description:
      'A historian discovers a diary that leads her to uncover a century-old secret, forcing her to confront her own family\'s history.',
    rating: 7.9,
    qualities: [
      { quality: '720p', price: 3.99, downloadLink: '#', streamLink: '#', fileSize: '1.2 GB' },
      { quality: '1080p', price: 6.99, downloadLink: '#', streamLink: '#', fileSize: '2.5 GB' },
    ],
    isFree: false,
    trailerUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  {
    id: 'cyber-runners',
    title: 'Cyber Runners',
    poster: 'https://images.unsplash.com/photo-1699060463533-94ceb428c67f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHxhY3Rpb24lMjBzY2ktZml8ZW58MHx8fHwxNzUyNDg1ODI1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    year: 2024,
    genres: ['Action', 'Sci-Fi'],
    language: 'English',
    duration: '2h 10m',
    description:
      'In a futuristic city, a group of rebels fight against a mega-corporation that controls every aspect of life.',
    rating: 8.2,
    qualities: [
      { quality: '1080p', price: 8.99, downloadLink: '#', streamLink: '#', fileSize: '3.2 GB' },
      { quality: '4K', price: 16.99, downloadLink: '#', streamLink: '#', fileSize: '9.0 GB' },
    ],
    isFree: false,
    trailerUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  {
    id: 'the-last-laugh',
    title: 'The Last Laugh',
    poster: 'https://images.unsplash.com/photo-1571456331030-a1369bc759dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMHx8Y29tZWR5fGVufDB8fHx8MTc1MjQ4NTkxNHww&ixlib=rb-4.1.0&q=80&w=1080',
    year: 2022,
    genres: ['Comedy'],
    language: 'English',
    duration: '1h 45m',
    description:
      'A down-on-his-luck comedian gets one last shot at fame, but a series of mishaps threatens to ruin everything.',
    rating: 7.1,
    qualities: [
      { quality: '720p', price: 2.99, downloadLink: '#', streamLink: '#', fileSize: '1.0 GB' },
      { quality: '1080p', price: 5.99, downloadLink: '#', streamLink: '#', fileSize: '2.2 GB' },
    ],
    isFree: true,
    trailerUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  {
    id: 'beneath-the-surface',
    title: 'Beneath the Surface',
    poster: 'https://images.unsplash.com/photo-1620489922136-60b69e9e8463?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHxUaHJpbGxlciUyMEhvcnJvciUyMG1vdmllfGVufDB8fHx8MTc1MjQ4NTYyOXww&ixlib=rb-4.1.0&q=80&w=1080',
    year: 2023,
    genres: ['Thriller', 'Horror'],
    language: 'English',
    duration: '1h 35m',
    description:
      'A group of divers exploring a sunken ship awakens a dormant creature. Now, they must fight for survival in the deep dark ocean.',
    rating: 6.8,
    qualities: [
      { quality: '1080p', price: 7.99, downloadLink: '#', streamLink: '#', fileSize: '2.8 GB' },
    ],
    isFree: false,
    trailerUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  {
    id: 'path-of-the-samurai',
    title: 'Path of the Samurai',
    poster: 'https://images.unsplash.com/photo-1623672425683-89654c9ecd9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMHx8YWN0aW9uJTIwZHJhbWF8ZW58MHx8fHwxNzUyNDg1NzE3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    year: 2021,
    genres: ['Action', 'Drama'],
    language: 'Japanese',
    duration: '2h 20m',
    description:
      'In feudal Japan, a lone ronin seeks redemption by protecting a small village from a ruthless warlord.',
    rating: 8.5,
    qualities: [
      { quality: '1080p', price: 9.99, downloadLink: '#', streamLink: '#', fileSize: '3.5 GB' },
      { quality: '4K', price: 18.99, downloadLink: '#', streamLink: '#', fileSize: '10.0 GB' },
    ],
    isFree: false,
    trailerUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  {
    id: 'love-in-paris',
    title: 'Love in Paris',
    poster: 'https://images.unsplash.com/photo-1588857721040-78ec6be0f9aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHxyb21hbmNlJTIwY29tZWR5fGVufDB8fHx8MTc1MjQ4NTcxN3ww&ixlib=rb-4.1.0&q=80&w=1080',
    year: 2024,
    genres: ['Romance', 'Comedy'],
    language: 'French',
    duration: '1h 50m',
    description:
      'An American tourist and a cynical Parisian chef find unexpected love while navigating the romantic streets of Paris.',
    rating: 7.6,
    qualities: [
      { quality: '720p', price: 4.99, downloadLink: '#', streamLink: '#', fileSize: '1.4 GB' },
      { quality: '1080p', price: 7.99, downloadLink: '#', streamLink: '#', fileSize: '2.9 GB' },
    ],
    isFree: false,
    trailerUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  {
    id: 'the-heist-of-the-century',
    title: 'The Heist of the Century',
    poster: 'https://images.unsplash.com/photo-1613485930018-9718f90b524d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHxjcmltZSUyMHRocmlsbGVyfGVufDB8fHx8MTc1MjQ4NTcxN3ww&ixlib=rb-4.1.0&q=80&w=1080',
    year: 2023,
    genres: ['Crime', 'Thriller'],
    language: 'English',
    duration: '2h 05m',
    description:
      'A mastermind assembles a crew of specialists to pull off an impossible robbery from the most secure vault in the world.',
    rating: 8.1,
    qualities: [
      { quality: '1080p', price: 8.99, downloadLink: '#', streamLink: '#', fileSize: '3.1 GB' },
      { quality: '4K', price: 15.99, downloadLink: '#', streamLink: '#', fileSize: '8.5 GB' },
    ],
    isFree: false,
    trailerUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  {
    id: 'galaxy-guardians',
    title: 'Galaxy Guardians',
    poster: 'https://images.unsplash.com/photo-1579972668140-f7da53ccc2a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxzY2ktZmklMjBhY3Rpb24lMjBjb21lZHl8ZW58MHx8fHwxNzUyNDg1NzE3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    year: 2022,
    genres: ['Sci-Fi', 'Action', 'Comedy'],
    language: 'English',
    duration: '2h 15m',
    description:
      'A ragtag team of misfits must come together to save the galaxy from a powerful villain with a universe-destroying weapon.',
    rating: 8.0,
    qualities: [
      { quality: '1080p', price: 9.99, downloadLink: '#', streamLink: '#', fileSize: '3.3 GB' },
      { quality: '4K', price: 17.99, downloadLink: '#', streamLink: '#', fileSize: '9.2 GB' },
    ],
    isFree: false,
    trailerUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  {
    id: 'whimsical-woods',
    title: 'Whimsical Woods',
    poster: 'https://images.unsplash.com/photo-1622170416334-177b749d7591?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxhbmltYXRpb24lMjBmYW1pbHklMjBmYW50YXN5fGVufDB8fHx8MTc1MjQ4NTcxN3ww&ixlib=rb-4.1.0&q=80&w=1080',
    year: 2023,
    genres: ['Animation', 'Family', 'Fantasy'],
    language: 'English',
    duration: '1h 32m',
    description:
      'Two siblings discover a magical forest behind their new home and befriend its enchanting creatures to save it from a dark force.',
    rating: 7.8,
    qualities: [
      { quality: '720p', price: 5.99, downloadLink: '#', streamLink: '#', fileSize: '1.8 GB' },
      { quality: '1080p', price: 9.99, downloadLink: '#', streamLink: '#', fileSize: '3.0 GB' },
    ],
    isFree: true,
    trailerUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  {
    id: 'zero-day',
    title: 'Zero Day',
    poster: 'https://images.unsplash.com/photo-1731575115709-d4325615e868?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHx0aHJpbGxlciUyMGFjdGlvbnxlbnwwfHx8fDE3NTI0ODU3MTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    year: 2024,
    genres: ['Thriller', 'Action'],
    language: 'English',
    duration: '2h 02m',
    description:
      'A suspended government agent is framed for a terrorist attack and must go on the run to clear her name and prevent another disaster.',
    rating: 7.7,
    qualities: [
      { quality: '1080p', price: 8.99, downloadLink: '#', streamLink: '#', fileSize: '3.0 GB' },
      { quality: '4K', price: 16.99, downloadLink: '#', streamLink: '#', fileSize: '8.8 GB' },
    ],
    isFree: false,
    trailerUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  {
    id: 'a-simple-melody',
    title: 'A Simple Melody',
    poster: 'https://images.unsplash.com/photo-1654752527399-7541131b3e5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxkcmFtYSUyMG11c2ljfGVufDB8fHx8MTc1MjQ4NTcxN3ww&ixlib=rb-4.1.0&q=80&w=1080',
    year: 2022,
    genres: ['Drama', 'Music'],
    language: 'English',
    duration: '1h 55m',
    description:
      'A gifted but struggling musician finds inspiration in an unlikely friendship, leading to a journey of self-discovery and healing through music.',
    rating: 8.3,
    qualities: [
      { quality: '720p', price: 3.99, downloadLink: '#', streamLink: '#', fileSize: '1.3 GB' },
      { quality: '1080p', price: 6.99, downloadLink: '#', streamLink: '#', fileSize: '2.6 GB' },
    ],
    isFree: false,
    trailerUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  {
    id: 'movie-1',
    title: 'Generic Movie 1',
    poster: 'https://images.unsplash.com/photo-1584238832299-f37743d0bde8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxjb21lZHklMjByb21hbmNlfGVufDB8fHx8MTc1MjQ4NTcxOHww&ixlib=rb-4.1.0&q=80&w=1080',
    year: 2021,
    genres: ['Comedy', 'Romance'],
    language: 'English',
    duration: '1h 42m',
    description: 'This is a generic description for movie 1. It\'s a fantastic film that you won\'t want to miss.',
    rating: 6.6,
    qualities: [
        { quality: '720p', price: 4.99, downloadLink: '#', streamLink: '#', fileSize: '1.5 GB' },
        { quality: '1080p', price: 7.99, downloadLink: '#', streamLink: '#', fileSize: '3.0 GB' }
    ],
    isFree: false,
    trailerUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  {
      id: 'movie-2',
      title: 'Generic Movie 2',
      poster: 'https://images.unsplash.com/photo-1735666498436-d478930872ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxzY2ktZmklMjBteXN0ZXJ5fGVufDB8fHx8MTc1MjQ4NTcxOHww&ixlib=rb-4.1.0&q=80&w=1080',
      year: 2022,
      genres: ['Sci-Fi', 'Mystery'],
      language: 'English',
      duration: '1h 44m',
      description: 'This is a generic description for movie 2. It\'s a fantastic film that you won\'t want to miss.',
      rating: 6.7,
      qualities: [
          { quality: '720p', price: 4.99, downloadLink: '#', streamLink: '#', fileSize: '1.5 GB' },
          { quality: '1080p', price: 7.99, downloadLink: '#', streamLink: '#', fileSize: '3.0 GB' }
      ],
      isFree: false,
      trailerUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  {
      id: 'movie-3',
      title: 'Generic Movie 3',
      poster: 'https://images.unsplash.com/photo-1550026593-cb89847b168d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxkcmFtYXxlbnwwfHx8fDE3NTI0ODU3MTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      year: 2023,
      genres: ['Drama'],
      language: 'English',
      duration: '1h 46m',
      description: 'This is a generic description for movie 3. It\'s a fantastic film that you won\'t want to miss.',
      rating: 6.8,
      qualities: [
          { quality: '720p', price: 4.99, downloadLink: '#', streamLink: '#', fileSize: '1.5 GB' },
          { quality: '1080p', price: 7.99, downloadLink: '#', streamLink: '#', fileSize: '3.0 GB' }
      ],
      isFree: false,
      trailerUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  {
    id: 'movie-4',
    title: 'Generic Movie 4',
    poster: 'https://placehold.co/500x765/1a1a1a/ffffff.png',
    year: 2024,
    genres: ['Adventure', 'Family'],
    language: 'English',
    duration: '1h 48m',
    description: 'This is a generic description for movie 4. It\'s a fantastic film that you won\'t want to miss.',
    rating: 6.9,
    qualities: [
        { quality: '720p', price: 4.99, downloadLink: '#', streamLink: '#', fileSize: '1.5 GB' },
        { quality: '1080p', price: 7.99, downloadLink: '#', streamLink: '#', fileSize: '3.0 GB' }
    ],
    isFree: true,
    trailerUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  {
      id: 'movie-5',
      title: 'Generic Movie 5',
      poster: 'https://images.unsplash.com/photo-1636812506372-5a88f22881bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxhY3Rpb24lMjB0aHJpbGxlcnxlbnwwfHx8fDE3NTI0ODU4MjV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      year: 2020,
      genres: ['Action', 'Thriller'],
      language: 'English',
      duration: '1h 50m',
      description: 'This is a generic description for movie 5. It\'s a fantastic film that you won\'t want to miss.',
      rating: 7,
      qualities: [
          { quality: '720p', price: 4.99, downloadLink: '#', streamLink: '#', fileSize: '1.5 GB' },
          { quality: '1080p', price: 7.99, downloadLink: '#', streamLink: '#', fileSize: '3.0 GB' }
      ],
      isFree: false,
      trailerUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  {
      id: 'movie-6',
      title: 'Generic Movie 6',
      poster: 'https://images.unsplash.com/photo-1578301977947-cb446e84e8cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxjb21lZHklMjByb21hbmNlfGVufDB8fHx8MTc1MjQ4NTcxOHww&ixlib=rb-4.1.0&q=80&w=1080',
      year: 2021,
      genres: ['Comedy', 'Romance'],
      language: 'English',
      duration: '1h 52m',
      description: 'This is a generic description for movie 6. It\'s a fantastic film that you won\'t want to miss.',
      rating: 7.1,
      qualities: [
          { quality: '720p', price: 4.99, downloadLink: '#', streamLink: '#', fileSize: '1.5 GB' },
          { quality: '1080p', price: 7.99, downloadLink: '#', streamLink: '#', fileSize: '3.0 GB' }
      ],
      isFree: false,
      trailerUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  {
      id: 'movie-7',
      title: 'Generic Movie 7',
      poster: 'https://placehold.co/500x768/1a1a1a/ffffff.png',
      year: 2022,
      genres: ['Sci-Fi', 'Mystery'],
      language: 'English',
      duration: '1h 54m',
      description: 'This is a generic description for movie 7. It\'s a fantastic film that you won\'t want to miss.',
      rating: 7.2,
      qualities: [
          { quality: '720p', price: 4.99, downloadLink: '#', streamLink: '#', fileSize: '1.5 GB' },
          { quality: '1080p', price: 7.99, downloadLink: '#', streamLink: '#', fileSize: '3.0 GB' }
      ],
      isFree: false,
      trailerUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  {
      id: 'movie-8',
      title: 'Generic Movie 8',
      poster: 'https://placehold.co/500x769/1a1a1a/ffffff.png',
      year: 2023,
      genres: ['Drama'],
      language: 'English',
      duration: '1h 56m',
      description: 'This is a generic description for movie 8. It\'s a fantastic film that you won\'t want to miss.',
      rating: 7.3,
      qualities: [
          { quality: '720p', price: 4.99, downloadLink: '#', streamLink: '#', fileSize: '1.5 GB' },
          { quality: '1080p', price: 7.99, downloadLink: '#', streamLink: '#', fileSize: '3.0 GB' }
      ],
      isFree: true,
      trailerUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  {
      id: 'movie-9',
      title: 'Generic Movie 9',
      poster: 'https://placehold.co/500x770/1a1a1a/ffffff.png',
      year: 2024,
      genres: ['Adventure', 'Family'],
      language: 'English',
      duration: '1h 58m',
      description: 'This is a generic description for movie 9. It\'s a fantastic film that you won\'t want to miss.',
      rating: 7.4,
      qualities: [
          { quality: '720p', price: 4.99, downloadLink: '#', streamLink: '#', fileSize: '1.5 GB' },
          { quality: '1080p', price: 7.99, downloadLink: '#', streamLink: '#', fileSize: '3.0 GB' }
      ],
      isFree: false,
      trailerUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  {
      id: 'movie-10',
      title: 'Generic Movie 10',
      poster: 'https://images.unsplash.com/photo-1704968538858-df20c4568845?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxhY3Rpb24lMjB0aHJpbGxlcnxlbnwwfHx8fDE3NTI0ODU4MjV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      year: 2020,
      genres: ['Action', 'Thriller'],
      language: 'English',
      duration: '2h 0m',
      description: 'This is a generic description for movie 10. It\'s a fantastic film that you won\'t want to miss.',
      rating: 7.5,
      qualities: [
          { quality: '720p', price: 4.99, downloadLink: '#', streamLink: '#', fileSize: '1.5 GB' },
          { quality: '1080p', price: 7.99, downloadLink: '#', streamLink: '#', fileSize: '3.0 GB' }
      ],
      isFree: false,
      trailerUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  }
];

export async function getMovies() {
  // In a real app, you would fetch this data from an API
  return movies;
}

export async function getMovieById(id: string) {
  // In a real app, you would fetch this data from an API
  return movies.find((movie) => movie.id === id);
}

export async function getGenres() {
  const genres = new Set<string>();
  movies.forEach(movie => {
    movie.genres.forEach(genre => genres.add(genre));
  });
  return Array.from(genres);
}


const tvShows: TVShow[] = [
  {
    id: 'throne-of-swords',
    title: 'Throne of Swords',
    poster: 'https://images.unsplash.com/photo-1596701047817-205931115e58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxmYW50YXN5JTIwdHYlMjBzaG93fGVufDB8fHx8MTc1MjQ4NTcxN3ww&ixlib=rb-4.1.0&q=80&w=1080',
    startYear: 2021,
    endYear: null,
    genres: ['Fantasy', 'Drama', 'Action'],
    description: 'In a land of myth and magic, noble houses vie for control of the Iron Throne, leading to epic battles, political intrigue, and unforeseen alliances.',
    rating: 9.2,
    seasons: 3,
    isFree: false,
  },
  {
    id: 'silicon-valley-tales',
    title: 'Silicon Valley Tales',
    poster: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxzdGFydHVwJTIwY29tZWR5JTIwdHYlMjBzaG93fGVufDB8fHx8MTc1MjQ4NTcxN3ww&ixlib=rb-4.1.0&q=80&w=1080',
    startYear: 2019,
    endYear: 2023,
    genres: ['Comedy'],
    description: 'A group of brilliant but awkward programmers tries to make it big in the competitive world of Silicon Valley with their revolutionary new app.',
    rating: 8.5,
    seasons: 5,
    isFree: true,
  },
  {
    id: 'chronos-detective',
    title: 'Chronos Detective',
    poster: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxzY2ktZmklMjBkZXRlY3RpdmUlMjB0dnxlbnwwfHx8fDE3NTI0ODU3MTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    startYear: 2022,
    endYear: null,
    genres: ['Sci-Fi', 'Crime', 'Mystery'],
    description: 'A detective in the year 2077 solves crimes by diving into the memories of victims and witnesses, uncovering conspiracies that span decades.',
    rating: 8.8,
    seasons: 2,
    isFree: false,
  },
  {
    id: 'the-last-colony',
    title: 'The Last Colony',
    poster: 'https://images.unsplash.com/photo-1517976487-151210449a63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxzcGFjZSUyMGNvbG9ueSUyMHR2JTIwc2hvd3xlbnwwfHx8fDE3NTI0ODU3MTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    startYear: 2024,
    endYear: null,
    genres: ['Sci-Fi', 'Drama'],
    description: 'Humanity\'s last survivors, living on a distant planet, must contend with a hostile alien environment and the internal conflicts that threaten to tear them apart.',
    rating: 8.1,
    seasons: 1,
    isFree: false,
  },
  {
    id: 'culinary-kings',
    title: 'Culinary Kings',
    poster: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxyZWFsaXR5JTIwY29va2luZyUyMHNob3d8ZW58MHx8fHwxNzUyNDg1NzE3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    startYear: 2018,
    endYear: null,
    genres: ['Reality'],
    description: 'Top chefs from around the world compete in a high-stakes culinary competition to be crowned the ultimate Culinary King.',
    rating: 7.9,
    seasons: 6,
    isFree: true,
  },
  {
    id: 'haunting-hill-house',
    title: 'The Haunting of Hill House',
    poster: 'https://images.unsplash.com/photo-1606828834437-a25925d48a8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxob3Jyb3IlMjB0diUyMHNob3d8ZW58MHx8fHwxNzUyNDg1NzE3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    startYear: 2018,
    endYear: 2018,
    genres: ['Horror', 'Drama', 'Mystery'],
    description: 'Flashing between past and present, a fractured family confronts haunting memories of their old home and the terrifying events that drove them from it.',
    rating: 8.6,
    seasons: 1,
    isFree: false,
  },
  {
    id: 'the-crown-and-the-scepter',
    title: 'The Crown and the Scepter',
    poster: 'https://images.unsplash.com/photo-1587135941944-9c5952865d21?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHzoaXN0b3JpY2FsJTIwZHJhbWElMjB0dnxlbnwwfHx8fDE3NTI0ODU3MTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    startYear: 2016,
    endYear: null,
    genres: ['Drama', 'History'],
    description: 'Follows the political rivalries and romance of Queen Elizabeth II\'s reign and the events that shaped the second half of the 20th century.',
    rating: 8.7,
    seasons: 5,
    isFree: false,
  },
  {
    id: 'planet-earth-revealed',
    title: 'Planet Earth Revealed',
    poster: 'https://images.unsplash.com/photo-1454789548928-9efd52dc4031?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxuYXR1cmUlMjBkb2N1bWVudGFyeSUyMHR2fGVufDB8fHx8MTc1MjQ4NTcxN3ww&ixlib=rb-4.1.0&q=80&w=1080',
    startYear: 2023,
    endYear: null,
    genres: ['Documentary'],
    description: 'A breathtaking documentary series showcasing the beauty and fragility of our planet, featuring stunning visuals and incredible wildlife footage.',
    rating: 9.5,
    seasons: 1,
    isFree: true,
  },
];

export async function getTVShows() {
  // In a real app, you would fetch this data from an API
  return tvShows;
}

export async function getTVShowById(id: string) {
  // In a real app, you would fetch this data from an API
  return tvShows.find((show) => show.id === id);
}

export async function getTVShowGenres() {
  const genres = new Set<string>();
  tvShows.forEach(show => {
    show.genres.forEach(genre => genres.add(genre));
  });
  return Array.from(genres).sort();
}
