import Link from 'next/link';
import { Film, Facebook, Twitter, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background/95">
      <div className="container py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-start gap-4">
            <Link href="/" className="flex items-center gap-2">
              <Film className="h-7 w-7 text-primary" />
              <span className="font-headline text-2xl font-bold text-white">CineStream</span>
            </Link>
            <p className="text-muted-foreground text-sm">
              Your ultimate destination for movies. Stream, buy, and enjoy the best of cinema.
            </p>
          </div>
          <div className="md:col-start-2">
            <h4 className="font-headline font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about-v1" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/contact-v1" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
              <li><Link href="/faq-v1" className="text-muted-foreground hover:text-primary transition-colors">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-headline font-semibold mb-3">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link></li>
              <li><Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="/cookies" className="text-muted-foreground hover:text-primary transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-headline font-semibold mb-3">Follow Us</h4>
            <div className="flex items-center gap-4">
              <Link href="#" aria-label="Facebook">
                <Facebook className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
              </Link>
              <Link href="#" aria-label="Twitter">
                <Twitter className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
              </Link>
              <Link href="#" aria-label="Instagram">
                <Instagram className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-border/40 pt-4 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} CineStream. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
