'use client';

import { Button } from '@/components/ui/button';
import { Eye, ThumbsUp, ThumbsDown } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

type StatsBarProps = {
  views: number;
  initialLikes: number;
  initialDislikes: number;
};

export function StatsBar({ views, initialLikes, initialDislikes }: StatsBarProps) {
  const [likes, setLikes] = useState(initialLikes);
  const [dislikes, setDislikes] = useState(initialDislikes);
  const [userVote, setUserVote] = useState<'like' | 'dislike' | null>(null);

  const handleLike = () => {
    if (userVote === 'like') {
      setLikes(likes - 1);
      setUserVote(null);
    } else {
      setLikes(likes + 1);
      if (userVote === 'dislike') {
        setDislikes(dislikes - 1);
      }
      setUserVote('like');
    }
  };

  const handleDislike = () => {
    if (userVote === 'dislike') {
      setDislikes(dislikes - 1);
      setUserVote(null);
    } else {
      setDislikes(dislikes + 1);
      if (userVote === 'like') {
        setLikes(likes - 1);
      }
      setUserVote('dislike');
    }
  };
  
  const formatStat = (num: number) => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
    if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
    return num.toString();
  }

  return (
    <div className="flex items-center justify-between rounded-lg bg-muted/50 p-3">
        <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Eye className="h-5 w-5" />
                <span>{formatStat(views)} views</span>
            </div>
        </div>
        <div className="flex items-center gap-2">
            <Button 
                variant="ghost" 
                size="sm" 
                className={cn('flex items-center gap-2', userVote === 'like' && 'text-primary bg-primary/10')}
                onClick={handleLike}
            >
                <ThumbsUp className="h-5 w-5" />
                <span>{formatStat(likes)}</span>
            </Button>
            <Button 
                variant="ghost" 
                size="sm" 
                className={cn('flex items-center gap-2', userVote === 'dislike' && 'text-destructive bg-destructive/10')}
                onClick={handleDislike}
            >
                <ThumbsDown className="h-5 w-5" />
                <span>{formatStat(dislikes)}</span>
            </Button>
        </div>
    </div>
  );
}
