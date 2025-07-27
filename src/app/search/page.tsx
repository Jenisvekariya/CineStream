'use client';

import { redirect, useSearchParams } from 'next/navigation'
import { Suspense, useEffect } from 'react';

function SearchRedirect() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q');

  useEffect(() => {
    if (query) {
      redirect(`/movies-v1?q=${query}`);
    } else {
      redirect('/movies-v1');
    }
  }, [query]);

  return null;
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SearchRedirect />
    </Suspense>
  )
}
