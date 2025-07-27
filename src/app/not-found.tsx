import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { SearchX } from 'lucide-react';
import { AuthLayout } from '@/components/layout/auth-layout';

export default function NotFound() {
  return (
    <AuthLayout>
        <div className="text-center text-white z-10">
            <SearchX className="mx-auto h-24 w-24 text-primary mb-6" />
            <h1 className="text-6xl font-headline font-bold text-white drop-shadow-lg">404</h1>
            <p className="text-2xl mt-4 mb-8 text-muted-foreground drop-shadow-md">
                Oops! The page you're looking for could not be found.
            </p>
            <Button asChild size="lg">
                <Link href="/">Return to Homepage</Link>
            </Button>
        </div>
    </AuthLayout>
  );
}
