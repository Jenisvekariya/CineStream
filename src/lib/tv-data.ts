import type { TVShow } from './types';

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
