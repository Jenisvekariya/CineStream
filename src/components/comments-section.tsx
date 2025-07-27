'use client';
import { useState } from 'react';
import type { Comment as CommentType } from '@/lib/types';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { Separator } from './ui/separator';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const CommentCard = ({ comment }: { comment: CommentType }) => {
    return (
        <div className="flex items-start gap-4">
            <Avatar>
                <AvatarImage src={comment.avatarUrl} alt={comment.author} />
                <AvatarFallback>{comment.author.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="flex-grow">
                <div className="flex items-center gap-2">
                    <p className="font-semibold">{comment.author}</p>
                    <p className="text-xs text-muted-foreground">{comment.date}</p>
                </div>
                <p className="text-sm text-muted-foreground mt-1">{comment.text}</p>
            </div>
        </div>
    )
}

export const CommentsSection = ({ initialComments }: { initialComments: CommentType[] }) => {
  const [comments, setComments] = useState<CommentType[]>(initialComments);
  const [newComment, setNewComment] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    const newCommentData: CommentType = {
        id: (comments.length + 1).toString(),
        author: 'CurrentUser',
        avatarUrl: 'https://placehold.co/40x40.png',
        date: 'Just now',
        text: newComment,
    };

    setComments([newCommentData, ...comments]);
    setNewComment('');
  };

  return (
    <Card>
        <CardHeader>
             <CardTitle>{comments.length} Comments</CardTitle>
        </CardHeader>
        <CardContent>
             <form onSubmit={handleSubmit} className="flex flex-col gap-4 mb-8">
                <Textarea 
                    placeholder="Add a public comment..."
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                />
                <Button type="submit" className="self-end" disabled={!newComment.trim()}>Comment</Button>
            </form>
            <Separator className="mb-8" />
            <div className="space-y-6">
                {comments.map((comment) => <CommentCard key={comment.id} comment={comment}/>)}
            </div>
        </CardContent>
    </Card>
  );
};
