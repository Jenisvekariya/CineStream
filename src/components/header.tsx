'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Film, Search, Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { getGenres } from '@/lib/data';

export function Header() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [genres, setGenres] = useState<string[]>([]);
  const router = useRouter();

  useEffect(() => {
    async function fetchGenres() {
      const genresData = await getGenres();
      setGenres(genresData);
    }
    fetchGenres();
  }, []);

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
    }
  };

  const navLinks = [
    { href: '/', label: 'Home' },
    // The "Movies" link is now a dropdown
    { href: '#', label: 'TV Shows' },
    { href: '#', label: 'My Library' },
  ];
  
  const NavItems = ({ isMobile = false }: { isMobile?: boolean }) => {
    const commonLinkClass = isMobile ? "w-full justify-start" : "";
    
    return (
      <>
        <Button key="/" variant="ghost" asChild className={commonLinkClass}>
          <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
            Home
          </Link>
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className={`${commonLinkClass} flex items-center gap-1`}>
              Movies <ChevronDown className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem asChild>
              <Link href="/search">All Movies</Link>
            </DropdownMenuItem>
            {genres.map((genre) => (
              <DropdownMenuItem key={genre} asChild>
                <Link href={`/search?genre=${encodeURIComponent(genre)}`}>{genre}</Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        {navLinks.slice(1).map((link) => (
          <Button key={link.href} variant="ghost" asChild className={commonLinkClass}>
            <Link href={link.href} onClick={() => setIsMobileMenuOpen(false)}>
              {link.label}
            </Link>
          </Button>
        ))}
      </>
    );
  }


  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2">
            <Film className="h-7 w-7 text-primary" />
            <span className="font-headline text-2xl font-bold text-white">CineStream</span>
          </Link>
          <nav className="hidden md:flex items-center gap-2">
            <NavItems />
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden sm:block">
            <form onSubmit={handleSearchSubmit} className="relative">
              <Input
                type="search"
                placeholder="Search movies..."
                className="h-9 w-40 lg:w-64 pr-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button type="submit" variant="ghost" size="icon" className="absolute right-0 top-0 h-9 w-9">
                <Search className="h-4 w-4" />
              </Button>
            </form>
          </div>
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-0">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-4 border-b">
                   <Link href="/" className="flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
                    <Film className="h-7 w-7 text-primary" />
                    <span className="font-headline text-2xl font-bold text-white">CineStream</span>
                  </Link>
                  <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)}>
                    <X className="h-6 w-6" />
                    <span className="sr-only">Close menu</span>
                  </Button>
                </div>
                <nav className="flex flex-col gap-1 p-4">
                  <NavItems isMobile />
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
