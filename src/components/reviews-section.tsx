'use client';
import { useState } from 'react';
import type { Review as ReviewType } from '@/lib/types';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Star, StarHalf } from 'lucide-react';
import { Progress } from './ui/progress';
import { Input } from './ui/input';
import { cn } from '@/lib/utils';

const StarRating = ({ rating, className }: { rating: number; className?: string }) => {
    return (
      <div className={cn('flex items-center gap-0.5', className)}>
        {[...Array(5)].map((_, index) => {
          const value = index + 1;
          if (value <= rating) {
            return <Star key={index} className="h-4 w-4 text-primary fill-primary" />;
          }
          if (value - 0.5 <= rating) {
            return <StarHalf key={index} className="h-4 w-4 text-primary fill-primary" />;
          }
          return <Star key={index} className="h-4 w-4 text-muted-foreground" />;
        })}
      </div>
    );
};

const ReviewCard = ({ review }: { review: ReviewType }) => {
    return (
        <div className="border-b pb-6 mb-6">
            <div className="flex items-start gap-4">
                <Avatar>
                    <AvatarImage src={review.avatarUrl} alt={review.author} />
                    <AvatarFallback>{review.author.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="flex-grow">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="font-semibold">{review.author}</p>
                            <p className="text-xs text-muted-foreground">{review.date}</p>
                        </div>
                        <StarRating rating={review.rating} />
                    </div>
                    <h4 className="font-semibold mt-4">{review.title}</h4>
                    <p className="text-sm text-muted-foreground mt-1">{review.text}</p>
                </div>
            </div>
        </div>
    )
}

export const ReviewsSection = ({ initialReviews, averageRating }: { initialReviews: ReviewType[], averageRating: number }) => {
    const [reviews, setReviews] = useState(initialReviews);
    const [newReviewText, setNewReviewText] = useState('');
    const [newReviewTitle, setNewReviewTitle] = useState('');
    const [newReviewRating, setNewReviewRating] = useState(0);

    const ratingDistribution = [
        { star: 5, percentage: 70 },
        { star: 4, percentage: 15 },
        { star: 3, percentage: 8 },
        { star: 2, percentage: 4 },
        { star: 1, percentage: 3 },
    ]

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!newReviewText.trim() || !newReviewTitle.trim() || newReviewRating === 0) return;
        const newReview: ReviewType = {
            id: `${reviews.length + 1}`,
            author: 'You',
            avatarUrl: 'https://placehold.co/40x40.png',
            date: 'Just now',
            rating: newReviewRating,
            title: newReviewTitle,
            text: newReviewText,
        };
        setReviews([newReview, ...reviews]);
        setNewReviewText('');
        setNewReviewTitle('');
        setNewReviewRating(0);
    }

    return (
        <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
                <Card>
                    <CardHeader>
                        <CardTitle>Customer Reviews</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex items-center gap-2 mb-4">
                            <p className="text-4xl font-bold">{averageRating.toFixed(1)}</p>
                            <div className="flex flex-col">
                                <StarRating rating={averageRating} />
                                <p className="text-sm text-muted-foreground">{reviews.length} reviews</p>
                            </div>
                        </div>
                        <div className="space-y-2">
                           {ratingDistribution.map(item => (
                             <div key={item.star} className="flex items-center gap-2">
                                <p className="text-xs text-muted-foreground w-6">{item.star} <span className="text-xs">★</span></p>
                                <Progress value={item.percentage} className="w-full h-2" />
                             </div>
                           ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
            <div className="md:col-span-2">
                <Card>
                    <CardHeader>
                        <CardTitle>Leave a Review</CardTitle>
                        <CardDescription>Share your thoughts with other customers</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="font-semibold text-sm">Your Rating</label>
                                <div className="flex items-center gap-1 mt-1">
                                    {[1, 2, 3, 4, 5].map(star => (
                                        <button key={star} type="button" onClick={() => setNewReviewRating(star)}>
                                            <Star className={cn("h-6 w-6 transition-colors", newReviewRating >= star ? 'text-primary fill-primary' : 'text-muted-foreground')}/>
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <Input placeholder="Review Title" value={newReviewTitle} onChange={e => setNewReviewTitle(e.target.value)} />
                            <Textarea placeholder="Write your review here..." value={newReviewText} onChange={e => setNewReviewText(e.target.value)} />
                            <Button type="submit" disabled={!newReviewText.trim() || !newReviewTitle.trim() || newReviewRating === 0}>Submit Review</Button>
                        </form>
                        <div className="mt-8">
                            {reviews.map(review => <ReviewCard key={review.id} review={review} />)}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};
