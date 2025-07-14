
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Film, Search, Menu, X, ChevronDown, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel
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

  const NavItems = ({ isMobile = false }: { isMobile?: boolean }) => {
    const commonLinkClass = isMobile ? "w-full justify-start" : "";
    const closeMenu = () => isMobile && setIsMobileMenuOpen(false);
    
    return (
      <>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className={`${commonLinkClass} flex items-center gap-1`}>
              Home <ChevronDown className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem asChild><Link href="/" onClick={closeMenu}>Home V1</Link></DropdownMenuItem>
            <DropdownMenuItem asChild><Link href="/homepage-v2" onClick={closeMenu}>Home V2</Link></DropdownMenuItem>
            <DropdownMenuItem asChild><Link href="/homepage-v3" onClick={closeMenu}>Home V3</Link></DropdownMenuItem>
            <DropdownMenuItem asChild><Link href="/homepage-v4" onClick={closeMenu}>Home V4</Link></DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className={`${commonLinkClass} flex items-center gap-1`}>
              Movies <ChevronDown className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem asChild><Link href="/search" onClick={closeMenu}>All Movies</Link></DropdownMenuItem>
            {genres.map((genre) => (
              <DropdownMenuItem key={genre} asChild>
                <Link href={`/search?genre=${encodeURIComponent(genre)}`} onClick={closeMenu}>{genre}</Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

         <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className={`${commonLinkClass} flex items-center gap-1`}>
              TV Shows <ChevronDown className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem asChild><Link href="/tv-shows-v1" onClick={closeMenu}>TV Shows V1</Link></DropdownMenuItem>
            <DropdownMenuItem asChild><Link href="/tv-shows-v2" onClick={closeMenu}>TV Shows V2</Link></DropdownMenuItem>
            <DropdownMenuItem asChild><Link href="/tv-shows-v3" onClick={closeMenu}>TV Shows V3</Link></DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

         <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className={`${commonLinkClass} flex items-center gap-1`}>
              Subscription <ChevronDown className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem asChild><Link href="/subscription-v1" onClick={closeMenu}>Subscription V1</Link></DropdownMenuItem>
            <DropdownMenuItem asChild><Link href="/subscription-v2" onClick={closeMenu}>Subscription V2</Link></DropdownMenuItem>
            <DropdownMenuItem asChild><Link href="/subscription-v3" onClick={closeMenu}>Subscription V3</Link></DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className={`${commonLinkClass} flex items-center gap-1`}>
              My Library <ChevronDown className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem asChild><Link href="/my-library-v1" onClick={closeMenu}>My Library V1</Link></DropdownMenuItem>
            <DropdownMenuItem asChild><Link href="/my-library-v2" onClick={closeMenu}>My Library V2</Link></DropdownMenuItem>
            <DropdownMenuItem asChild><Link href="/my-library-v3" onClick={closeMenu}>My Library V3</Link></DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className={`${commonLinkClass} flex items-center gap-1`}>
              Auth Pages <ChevronDown className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Login</DropdownMenuLabel>
            <DropdownMenuItem asChild><Link href="/login-v1" onClick={closeMenu}>Login V1</Link></DropdownMenuItem>
            <DropdownMenuItem asChild><Link href="/login-v2" onClick={closeMenu}>Login V2</Link></DropdownMenuItem>
            <DropdownMenuItem asChild><Link href="/login-v3" onClick={closeMenu}>Login V3</Link></DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuLabel>Sign Up</DropdownMenuLabel>
            <DropdownMenuItem asChild><Link href="/signup-v1" onClick={closeMenu}>Sign Up V1</Link></DropdownMenuItem>
            <DropdownMenuItem asChild><Link href="/signup-v2" onClick={closeMenu}>Sign Up V2</Link></DropdownMenuItem>
            <DropdownMenuItem asChild><Link href="/signup-v3" onClick={closeMenu}>Sign Up V3</Link></DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuLabel>Forgot Password</DropdownMenuLabel>
            <DropdownMenuItem asChild><Link href="/forgot-password-v1" onClick={closeMenu}>Forgot Password V1</Link></DropdownMenuItem>
            <DropdownMenuItem asChild><Link href="/forgot-password-v2" onClick={closeMenu}>Forgot Password V2</Link></DropdownMenuItem>
            <DropdownMenuItem asChild><Link href="/forgot-password-v3" onClick={closeMenu}>Forgot Password V3</Link></DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuLabel>OTP</DropdownMenuLabel>
            <DropdownMenuItem asChild><Link href="/otp-v1" onClick={closeMenu}>OTP V1</Link></DropdownMenuItem>
            <DropdownMenuItem asChild><Link href="/otp-v2" onClick={closeMenu}>OTP V2</Link></DropdownMenuItem>
            <DropdownMenuItem asChild><Link href="/otp-v3" onClick={closeMenu}>OTP V3</Link></DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
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
          <nav className="hidden lg:flex items-center gap-2">
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

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem asChild><Link href="/account">Account</Link></DropdownMenuItem>
              <DropdownMenuItem asChild><Link href="/profile">Profile</Link></DropdownMenuItem>
              <DropdownMenuItem asChild><Link href="/manage-subscription">Subscription</Link></DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
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
