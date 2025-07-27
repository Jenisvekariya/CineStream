
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Film, Search, Menu, X, ChevronDown, User, Tv, Clapperboard, Home, Sparkles, LogIn } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel
} from "@/components/ui/dropdown-menu"
import { getGenres, getMovies } from '@/lib/data';
import type { Movie } from '@/lib/types';
import Image from 'next/image';

const pageLinks = {
  home: [
    { href: '/', title: 'Home V1' },
    { href: '/homepage-v2', title: 'Home V2' },
    { href: '/homepage-v3', title: 'Home V3' },
    { href: '/homepage-v4', title: 'Home V4' },
  ],
  shows: [
    { href: '/tv-shows-v1', title: 'TV Shows V1' },
    { href: '/tv-shows-v2', title: 'TV Shows V2' },
    { href: '/tv-shows-v3', title: 'TV Shows V3' },
  ],
  movies: [
      { href: '/search', title: 'All Movies' },
  ],
  subscription: [
    { href: '/subscription-v1', title: 'Subscription V1' },
    { href: '/subscription-v2', title: 'Subscription V2' },
    { href: '/subscription-v3', title: 'Subscription V3' },
  ],
  library: [
      { href: '/my-library-v1', title: 'My Library V1' },
      { href: '/my-library-v2', title: 'My Library V2' },
      { href: '/my-library-v3', title: 'My Library V3' },
  ]
};

const authLinks = {
    login: [
        { href: '/login-v1', title: 'Login V1' },
        { href: '/login-v2', title: 'Login V2' },
        { href: '/login-v3', title: 'Login V3' },
    ],
    signup: [
        { href: '/signup-v1', title: 'Sign Up V1' },
        { href: '/signup-v2', title: 'Sign Up V2' },
        { href: '/signup-v3', title: 'Sign Up V3' },
    ],
    forgotPassword: [
        { href: '/forgot-password-v1', title: 'Forgot Password V1' },
        { href: '/forgot-password-v2', title: 'Forgot Password V2' },
        { href: '/forgot-password-v3', title: 'Forgot Password V3' },
    ],
    otp: [
        { href: '/otp-v1', title: 'OTP V1' },
        { href: '/otp-v2', title: 'OTP V2' },
        { href: '/otp-v3', title: 'OTP V3' },
    ]
}


export function Header() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [genres, setGenres] = useState<string[]>([]);
  const [trendingMovie, setTrendingMovie] = useState<Movie | null>(null);
  const router = useRouter();

  useEffect(() => {
    async function fetchData() {
      const [genresData, moviesData] = await Promise.all([getGenres(), getMovies()]);
      setGenres(genresData);
      const sortedMovies = [...moviesData].sort((a,b) => b.rating - a.rating);
      setTrendingMovie(sortedMovies[0]);
    }
    fetchData();
  }, []);

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
    }
  };

  const NavItems = ({ isMobile = false }: { isMobile?: boolean }) => {
    const commonLinkClass = isMobile ? "w-full justify-start text-base" : "";
    const closeMenu = () => isMobile && setIsMobileMenuOpen(false);
    
    return (
      <>
        <Link href="/" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"><Button variant="ghost" className={commonLinkClass}>Home</Button></Link>
        <Link href="/search" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"><Button variant="ghost" className={commonLinkClass}>Movies</Button></Link>
        <Link href="/tv-shows-v1" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"><Button variant="ghost" className={commonLinkClass}>TV Shows</Button></Link>
        <Link href="/subscription-v1" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"><Button variant="ghost" className={commonLinkClass}>Subscription</Button></Link>
        <Link href="/my-library-v1" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"><Button variant="ghost" className={commonLinkClass}>My Library</Button></Link>
        
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className={`${commonLinkClass} flex items-center gap-1`}>
                    Pages <ChevronDown className="h-4 w-4" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[700px] h-[450px] p-0">
                <div className="flex h-full">
                    <div className="w-1/3 relative rounded-l-md overflow-hidden">
                        {trendingMovie && (
                            <>
                                <Image src={trendingMovie.poster} alt={trendingMovie.title} fill className="object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"/>
                                <div className="absolute bottom-0 left-0 p-4 text-white">
                                    <h3 className="font-bold text-lg font-headline">{trendingMovie.title}</h3>
                                    <p className="text-xs text-muted-foreground line-clamp-2">{trendingMovie.description}</p>
                                </div>
                            </>
                        )}
                    </div>
                    <div className="w-2/3 p-4 flex justify-around">
                         <div className="flex flex-col gap-4">
                            <h4 className="font-headline font-semibold mb-2">Home</h4>
                            <ul className="text-sm space-y-1">
                                {pageLinks.home.map(link => <li key={link.href}><Link href={link.href} className="text-muted-foreground hover:text-primary">{link.title}</Link></li>)}
                            </ul>
                            <h4 className="font-headline font-semibold mb-2 mt-4">Subscription</h4>
                            <ul className="text-sm space-y-1">
                                {pageLinks.subscription.map(link => <li key={link.href}><Link href={link.href} className="text-muted-foreground hover:text-primary">{link.title}</Link></li>)}
                            </ul>
                        </div>
                         <div className="flex flex-col gap-4">
                            <h4 className="font-headline font-semibold mb-2">TV Shows</h4>
                            <ul className="text-sm space-y-1">
                                 {pageLinks.shows.map(link => <li key={link.href}><Link href={link.href} className="text-muted-foreground hover:text-primary">{link.title}</Link></li>)}
                            </ul>
                            <h4 className="font-headline font-semibold mb-2 mt-4">My Library</h4>
                             <ul className="text-sm space-y-1">
                                 {pageLinks.library.map(link => <li key={link.href}><Link href={link.href} className="text-muted-foreground hover:text-primary">{link.title}</Link></li>)}
                            </ul>
                        </div>
                        <div className="flex flex-col gap-4">
                           <h4 className="font-headline font-semibold mb-2">Auth Pages</h4>
                            <ul className="text-sm space-y-1">
                                {authLinks.login.map(link => <li key={link.href}><Link href={link.href} className="text-muted-foreground hover:text-primary">{link.title}</Link></li>)}
                                <li className="pt-2"><DropdownMenuSeparator /></li>
                                {authLinks.signup.map(link => <li key={link.href}><Link href={link.href} className="text-muted-foreground hover:text-primary">{link.title}</Link></li>)}
                            </ul>
                        </div>
                    </div>
                </div>
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
            {authLinks.login.map(link => <DropdownMenuItem key={link.href} asChild><Link href={link.href} onClick={closeMenu}>{link.title}</Link></DropdownMenuItem>)}
            <DropdownMenuSeparator />
            <DropdownMenuLabel>Sign Up</DropdownMenuLabel>
            {authLinks.signup.map(link => <DropdownMenuItem key={link.href} asChild><Link href={link.href} onClick={closeMenu}>{link.title}</Link></DropdownMenuItem>)}
            <DropdownMenuSeparator />
            <DropdownMenuLabel>Forgot Password</DropdownMenuLabel>
            {authLinks.forgotPassword.map(link => <DropdownMenuItem key={link.href} asChild><Link href={link.href} onClick={closeMenu}>{link.title}</Link></DropdownMenuItem>)}
            <DropdownMenuSeparator />
            <DropdownMenuLabel>OTP</DropdownMenuLabel>
            {authLinks.otp.map(link => <DropdownMenuItem key={link.href} asChild><Link href={link.href} onClick={closeMenu}>{link.title}</Link></DropdownMenuItem>)}
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
          <nav className="hidden lg:flex items-center gap-1">
            <NavItems />
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden sm:block">
            <form onSubmit={handleSearchSubmit} className="relative">
              <Input
                type="search"
                placeholder="Search..."
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
                <SheetHeader className="p-4 border-b">
                  <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
                   <div className="flex items-center justify-between">
                      <Link href="/" className="flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
                        <Film className="h-7 w-7 text-primary" />
                        <span className="font-headline text-2xl font-bold text-white">CineStream</span>
                      </Link>
                      <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)}>
                        <X className="h-6 w-6" />
                        <span className="sr-only">Close menu</span>
                      </Button>
                   </div>
                </SheetHeader>
                <div className="flex flex-col h-full p-4">
                  <nav className="flex flex-col gap-1">
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

    

    