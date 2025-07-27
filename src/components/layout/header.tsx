
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Film, Search, Menu, X, ChevronDown, User, Tv, Clapperboard, Home, Sparkles, LogIn, KeyRound, Lock, ShieldQuestion, Library } from 'lucide-react';
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
import { getMovies } from '@/lib/data';
import type { Movie } from '@/lib/types';
import Image from 'next/image';
import { cn } from '@/lib/utils';

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
      { href: '/movies-v1', title: 'Movies V1 (Filters)' },
      { href: '/movies-v2', title: 'Movies V2 (Gallery)' },
      { href: '/movies-v3', title: 'Movies V3 (List)' },
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
  ],
  auth: {
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
};

const pageCategories = [
    { title: "Home", icon: Home, links: pageLinks.home },
    { title: "Movies", icon: Clapperboard, links: pageLinks.movies },
    { title: "TV Shows", icon: Tv, links: pageLinks.shows },
    { title: "Subscription", icon: Sparkles, links: pageLinks.subscription },
    { title: "My Library", icon: Library, links: pageLinks.library },
]

const authCategories = [
    { title: "Login", icon: LogIn, links: pageLinks.auth.login },
    { title: "Sign Up", icon: KeyRound, links: pageLinks.auth.signup },
    { title: "Forgot Password", icon: Lock, links: pageLinks.auth.forgotPassword },
    { title: "OTP", icon: ShieldQuestion, links: pageLinks.auth.otp },
]

export function Header() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [trendingMovie, setTrendingMovie] = useState<Movie | null>(null);
  const router = useRouter();

  useEffect(() => {
    async function fetchData() {
      const moviesData = await getMovies();
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
        <Link href="/movies-v1" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"><Button variant="ghost" className={commonLinkClass}>Movies</Button></Link>
        <Link href="/tv-shows-v1" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"><Button variant="ghost" className={commonLinkClass}>TV Shows</Button></Link>
        <Link href="/subscription-v1" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"><Button variant="ghost" className={commonLinkClass}>Subscription</Button></Link>
        <Link href="/my-library-v1" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"><Button variant="ghost" className={commonLinkClass}>My Library</Button></Link>
        
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className={`${commonLinkClass} flex items-center gap-1`}>
                    Pages <ChevronDown className="h-4 w-4" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-screen max-w-[calc(100vw-2rem)] sm:max-w-[calc(100vw-5rem)] lg:max-w-[1200px] p-0" align="start">
                <div className="flex">
                    <div className="w-1/3 relative rounded-l-md overflow-hidden hidden lg:block">
                        {trendingMovie && (
                            <>
                                <Image src={trendingMovie.poster} alt={trendingMovie.title} fill className="object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"/>
                                <div className="absolute bottom-0 left-0 p-6 text-white">
                                    <h3 className="font-bold text-xl font-headline">{trendingMovie.title}</h3>
                                    <p className="text-sm text-muted-foreground line-clamp-2 mt-1">{trendingMovie.description}</p>
                                    <Button variant="secondary" size="sm" className="mt-4">Watch Now</Button>
                                </div>
                            </>
                        )}
                    </div>
                    <div className="w-full lg:w-2/3 p-6 grid grid-cols-2 md:grid-cols-3 gap-6">
                        <div className="space-y-6">
                           {pageCategories.slice(0, 3).map(category => (
                                <div key={category.title}>
                                    <div className="flex items-center gap-2 mb-2">
                                        <category.icon className="w-5 h-5 text-primary"/>
                                        <h4 className="font-headline font-semibold">{category.title}</h4>
                                    </div>
                                    <ul className="text-sm space-y-1.5">
                                        {category.links.map(link => <li key={link.href}><Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors">{link.title}</Link></li>)}
                                    </ul>
                                </div>
                           ))}
                        </div>
                         <div className="space-y-6">
                            {pageCategories.slice(3).map(category => (
                                <div key={category.title}>
                                     <div className="flex items-center gap-2 mb-2">
                                        <category.icon className="w-5 h-5 text-primary"/>
                                        <h4 className="font-headline font-semibold">{category.title}</h4>
                                    </div>
                                    <ul className="text-sm space-y-1.5">
                                        {category.links.map(link => <li key={link.href}><Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors">{link.title}</Link></li>)}
                                    </ul>
                                </div>
                           ))}
                        </div>
                        <div className="space-y-6">
                             <div className="flex items-center gap-2 mb-2">
                                <Lock className="w-5 h-5 text-primary"/>
                                <h4 className="font-headline font-semibold">Authentication</h4>
                            </div>
                            {authCategories.map(category => (
                                <div key={category.title}>
                                    <h5 className="font-semibold text-sm text-foreground/80 mb-1.5">{category.title}</h5>
                                    <ul className="text-sm space-y-1.5">
                                        {category.links.map(link => <li key={link.href}><Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors">{link.title}</Link></li>)}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
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
