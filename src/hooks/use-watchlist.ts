'use client';

import { useState, useEffect, useCallback } from 'react';
import type { ContentItem } from '@/lib/types';
import { getMovies, getTVShows } from '@/lib/data';

const WATCHLIST_KEY = 'cine-stream-watchlist';

export function useWatchlist() {
  const [watchlist, setWatchlist] = useState<ContentItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const storedItems = window.localStorage.getItem(WATCHLIST_KEY);
      if (storedItems) {
        setWatchlist(JSON.parse(storedItems));
      }
    } catch (error) {
      console.error('Failed to parse watchlist from localStorage', error);
      setWatchlist([]);
    } finally {
        setLoading(false);
    }
  }, []);

  const saveToLocalStorage = (items: ContentItem[]) => {
    try {
      window.localStorage.setItem(WATCHLIST_KEY, JSON.stringify(items));
    } catch (error) {
      console.error('Failed to save watchlist to localStorage', error);
    }
  };

  const addToWatchlist = useCallback((item: ContentItem) => {
    setWatchlist((prev) => {
      const newWatchlist = [item, ...prev];
      saveToLocalStorage(newWatchlist);
      return newWatchlist;
    });
  }, []);

  const removeFromWatchlist = useCallback((itemId: string) => {
    setWatchlist((prev) => {
      const newWatchlist = prev.filter((item) => item.id !== itemId);
      saveToLocalStorage(newWatchlist);
      return newWatchlist;
    });
  }, []);

  return { watchlist, addToWatchlist, removeFromWatchlist, loading };
}
