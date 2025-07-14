import type { Movie, TVShow } from '@/lib/types';
import Image from 'next/image';
import Link from 'next/link';

type GridItemProps = {
    item: Movie | TVShow;
    isLarge: boolean;
};

const GridItem = ({ item, isLarge }: GridItemProps) => {
    const isMovie = 'duration' in item;
    const href = isMovie ? `/movies/${item.id}` : `/tv-shows/${item.id}`;
    const aspect = isLarge ? 'aspect-[16/9]' : 'aspect-square';
    const titleSize = isLarge ? 'text-2xl md:text-4xl' : 'text-xl';
    
    return (
        <Link href={href} className={`group relative rounded-2xl overflow-hidden shadow-xl ${isLarge ? 'col-span-2 row-span-2' : ''}`}>
            <Image 
                src={item.poster} 
                alt={item.title} 
                fill
                className={`object-cover transition-transform duration-500 group-hover:scale-105`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-4 md:p-6 text-white">
                <h3 className={`font-headline font-bold drop-shadow-lg ${titleSize}`}>{item.title}</h3>
                <p className="text-sm text-muted-foreground drop-shadow">{isMovie ? 'Movie' : 'TV Show'}</p>
            </div>
        </Link>
    )
}

export function ContentGridV4({ items }: { items: (Movie | TVShow)[] }) {
    if (items.length < 8) return null;

    return (
        <section>
            <div className="grid grid-cols-2 lg:grid-cols-4 grid-rows-2 gap-4 h-[70vh] max-h-[800px]">
                <GridItem item={items[0]} isLarge={true} />
                <GridItem item={items[1]} isLarge={false} />
                <GridItem item={items[2]} isLarge={false} />
                <GridItem item={items[3]} isLarge={false} />
                <GridItem item={items[4]} isLarge={false} />
                <GridItem item={items[5]} isLarge={true} />
                <GridItem item={items[6]} isLarge={false} />
                <GridItem item={items[7]} isLarge={false} />
            </div>
        </section>
    )
}
