'use client';

import { useState } from 'react';
import type { Movie, MovieQuality } from '@/lib/types';
import { generateAlternativeTitles } from '@/ai/flows/generate-alternative-titles';
import { generateMovieDescription, type GenerateMovieDescriptionInput } from '@/ai/flows/generate-movie-description';
import { useFormState, useFormStatus } from 'react-dom';
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { PlayCircle, ArrowDownToLine, Loader2, Wand2, RefreshCw } from 'lucide-react';
import { useToast } from "@/hooks/use-toast"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"


type MovieDetailClientProps = {
  movie: Movie;
};

const FormSchema = z.object({
  publication: z.string({
    required_error: "Please select a publication to display.",
  }),
})

export function MovieDetailClient({ movie }: MovieDetailClientProps) {
  const { toast } = useToast()
  const [selectedQuality, setSelectedQuality] = useState<MovieQuality>(movie.qualities[0]);
  
  const [alternativeTitles, setAlternativeTitles] = useState<string[]>([]);
  const [isGeneratingTitles, setIsGeneratingTitles] = useState(false);
  const [generatedDescription, setGeneratedDescription] = useState<string>('');
  
  const handleGenerateTitles = async () => {
    setIsGeneratingTitles(true);
    try {
      const result = await generateAlternativeTitles({ movieTitle: movie.title, genre: movie.genres[0] });
      setAlternativeTitles(result.alternativeTitles);
    } catch (error) {
      console.error(error);
      toast({
        title: "Error Generating Titles",
        description: "Could not generate alternative titles. Please try again later.",
        variant: "destructive",
      })
    } finally {
      setIsGeneratingTitles(false);
    }
  };

  async function onGenerateDescription(data: z.infer<typeof FormSchema>) {
    try {
      const input: GenerateMovieDescriptionInput = {
        title: movie.title,
        genre: movie.genres.join(', '),
        description: movie.description,
        publication: data.publication
      }
      const result = await generateMovieDescription(input);
      setGeneratedDescription(result.description);
    } catch (error) {
       console.error(error);
       toast({
        title: "Error Generating Description",
        description: "Could not generate AI description. Please try again later.",
        variant: "destructive",
      })
    }
  }

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  })

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-headline font-semibold mb-2">Synopsis</h2>
        <p className="text-muted-foreground whitespace-pre-wrap">{movie.description}</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Watch or Download</CardTitle>
          <CardDescription>Select your preferred quality.</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue={selectedQuality.quality} className="w-full" onValueChange={(value) => {
            const newQuality = movie.qualities.find(q => q.quality === value);
            if(newQuality) setSelectedQuality(newQuality)
          }}>
            <TabsList className="grid w-full grid-cols-4">
              {movie.qualities.map(q => (
                <TabsTrigger key={q.quality} value={q.quality}>{q.quality}</TabsTrigger>
              ))}
            </TabsList>
            <div className="pt-6">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-lg">
                    Price: <span className="font-bold text-primary">${selectedQuality.price.toFixed(2)}</span>
                  </div>
                  <div className="flex gap-2">
                     <Button size="lg" className="bg-primary hover:bg-primary/90">
                        <PlayCircle className="mr-2 h-5 w-5" />
                        Stream Now
                      </Button>
                      <Button size="lg" variant="secondary">
                        <ArrowDownToLine className="mr-2 h-5 w-5" />
                        Download ({selectedQuality.fileSize})
                      </Button>
                  </div>
              </div>
            </div>
          </Tabs>
        </CardContent>
      </Card>
      
      <div className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Wand2 className="text-primary" />
              AI Content Tools
            </CardTitle>
            <CardDescription>
              Use AI to generate alternative titles or a new movie description.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h4 className="font-semibold mb-2">Generate Alternative Titles</h4>
              <Button onClick={handleGenerateTitles} disabled={isGeneratingTitles}>
                {isGeneratingTitles ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <RefreshCw className="mr-2 h-4 w-4" />
                )}
                Generate Titles
              </Button>
              {alternativeTitles.length > 0 && (
                <div className="mt-4 p-4 bg-secondary rounded-lg">
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                    {alternativeTitles.map((title, index) => <li key={index}>{title}</li>)}
                  </ul>
                </div>
              )}
            </div>

            <div className="space-y-2">
              <h4 className="font-semibold mb-2">Generate New Description</h4>
               <Form {...form}>
                <form onSubmit={form.handleSubmit(onGenerateDescription)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="publication"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>In the style of...</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a publication" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="The New York Times">The New York Times</SelectItem>
                            <SelectItem value="The New Yorker">The New Yorker</SelectItem>
                            <SelectItem value="Variety">Variety</SelectItem>
                            <SelectItem value="Rolling Stone">Rolling Stone</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" disabled={form.formState.isSubmitting}>
                    {form.formState.isSubmitting ? (
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    ) : (
                      <RefreshCw className="mr-2 h-4 w-4" />
                    )}
                    Generate Description
                  </Button>
                </form>
              </Form>
              {generatedDescription && (
                <div className="mt-4 p-4 bg-secondary rounded-lg">
                  <p className="text-sm text-muted-foreground whitespace-pre-wrap">{generatedDescription}</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

    </div>
  );
}
