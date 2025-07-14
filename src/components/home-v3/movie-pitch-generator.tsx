'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { generateMoviePitch } from '@/ai/flows/generate-movie-pitch';
import { Skeleton } from '@/components/ui/skeleton';
import { Wand2, Sparkles } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

type MoviePitchGeneratorProps = {
  genres: string[];
};

export function MoviePitchGenerator({ genres }: MoviePitchGeneratorProps) {
  const [genre, setGenre] = useState('');
  const [theme, setTheme] = useState('');
  const [pitch, setPitch] = useState<{ title: string; logline: string; posterPrompt: string } | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleGenerate = async () => {
    if (!genre || !theme) {
      toast({
        title: 'Missing Fields',
        description: 'Please select a genre and enter a theme.',
        variant: 'destructive',
      });
      return;
    }
    setIsLoading(true);
    setPitch(null);
    try {
      const result = await generateMoviePitch({ genre, theme });
      setPitch(result);
    } catch (error) {
      console.error('Error generating movie pitch:', error);
      toast({
        title: 'Generation Failed',
        description: 'Could not generate a movie pitch. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section>
      <div className="text-center mb-10">
        <Wand2 className="w-12 h-12 mx-auto mb-4 text-primary" />
        <h2 className="text-3xl font-headline font-bold">AI Movie Pitch Generator</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mt-2">
          Have a great idea? Let our AI producer flesh it out for you.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Input Form */}
        <Card className="md:col-span-1">
          <CardHeader>
            <CardTitle>Create Your Concept</CardTitle>
            <CardDescription>Provide a genre and theme for your movie idea.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="genre-select">Genre</Label>
              <Select value={genre} onValueChange={setGenre}>
                <SelectTrigger id="genre-select">
                  <SelectValue placeholder="Select a genre" />
                </SelectTrigger>
                <SelectContent>
                  {genres.map((g) => (
                    <SelectItem key={g} value={g}>{g}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="theme-input">Theme / Keyword</Label>
              <Input
                id="theme-input"
                placeholder="e.g., 'haunted spaceship', 'talking animals'"
                value={theme}
                onChange={(e) => setTheme(e.target.value)}
              />
            </div>
            <Button onClick={handleGenerate} disabled={isLoading} className="w-full">
              {isLoading ? 'Generating...' : 'Generate Pitch'}
              {!isLoading && <Sparkles className="ml-2 h-4 w-4" />}
            </Button>
          </CardContent>
        </Card>

        {/* Output Display */}
        <div className="md:col-span-2">
          {isLoading && <PitchSkeleton />}
          {pitch && (
            <Card className="bg-secondary/50 border-dashed">
              <CardHeader>
                <CardTitle className="text-primary text-2xl font-headline">{pitch.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-1">Logline</h4>
                  <p className="text-muted-foreground italic">"{pitch.logline}"</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Poster Concept</h4>
                  <p className="text-muted-foreground text-sm">{pitch.posterPrompt}</p>
                </div>
              </CardContent>
            </Card>
          )}
          {!isLoading && !pitch && (
            <div className="flex items-center justify-center h-full border-2 border-dashed rounded-lg bg-card text-muted-foreground p-8">
              <p>Your AI-generated movie pitch will appear here.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

const PitchSkeleton = () => (
  <Card className="bg-secondary/50">
    <CardHeader>
      <Skeleton className="h-8 w-3/5" />
    </CardHeader>
    <CardContent className="space-y-6">
      <div className="space-y-2">
        <Skeleton className="h-4 w-24" />
        <Skeleton className="h-10 w-full" />
      </div>
      <div className="space-y-2">
        <Skeleton className="h-4 w-32" />
        <Skeleton className="h-16 w-full" />
      </div>
    </CardContent>
  </Card>
);
