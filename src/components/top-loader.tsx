'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export function TopLoader() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(0);
    const timer = setTimeout(() => setProgress(90), 0); // Start loading immediately
    return () => clearTimeout(timer);
  }, [pathname, searchParams]);

  useEffect(() => {
    // This effect runs when the component mounts and completes the loading bar
    // It simulates the final 10% of loading after content is ready
    const timer = setTimeout(() => {
      if (progress > 0) {
        setProgress(100);
      }
    }, 500); // Give it a moment to render the content
    
    // Hide the bar after it's full
    const hideTimer = setTimeout(() => {
        if (progress === 100) {
            setProgress(0);
        }
    }, 800)

    return () => {
        clearTimeout(timer);
        clearTimeout(hideTimer);
    };
  }, [progress]);

  if (progress === 0) return null;

  return (
    <div
      className="fixed top-0 left-0 right-0 z-[9999] h-1 bg-primary/50"
      style={{
        width: `${progress}%`,
        transition: 'width 0.3s ease-out',
        opacity: progress > 0 && progress < 100 ? 1 : 0,
      }}
    />
  );
}
