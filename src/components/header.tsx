'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Film, Search, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

export function Header() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
    }
  };

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/search', label: 'Movies' },
    { href: '#', label: 'TV Shows' },
    { href: '#', label: 'My Library' },
  ];

  const NavItems = () => (
    <>
      {navLinks.map((link) => (
        <Button key={link.href} variant="ghost" asChild>
          <Link href={link.href} onClick={() => setIsMobileMenuOpen(false)}>
            {link.label}
          </Link>
        </Button>
      ))}
    </>
  );

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
            <SheetContent side="left">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-4 border-b">
                   <Link href="/" className="flex items-center gap-2">
                    <Film className="h-7 w-7 text-primary" />
                    <span className="font-headline text-2xl font-bold text-white">CineStream</span>
                  </Link>
                  <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)}>
                    <X className="h-6 w-6" />
                    <span className="sr-only">Close menu</span>
                  </Button>
                </div>
                <nav className="flex flex-col gap-4 p-4">
                  <NavItems />
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
