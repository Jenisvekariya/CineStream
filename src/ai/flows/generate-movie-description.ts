'use server';

/**
 * @fileOverview A flow to generate movie descriptions in the style of a popular publication.
 *
 * - generateMovieDescription - A function that generates a movie description.
 * - GenerateMovieDescriptionInput - The input type for the generateMovieDescription function.
 * - GenerateMovieDescriptionOutput - The return type for the generateMovieDescription function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateMovieDescriptionInputSchema = z.object({
  title: z.string().describe('The title of the movie.'),
  genre: z.string().describe('The genre of the movie.'),
  description: z.string().describe('The plot description of the movie.'),
  publication: z.string().describe('The popular publication to mimic the style of.  Examples:  The New York Times, The New Yorker, Variety, etc.'),
});
export type GenerateMovieDescriptionInput = z.infer<typeof GenerateMovieDescriptionInputSchema>;

const GenerateMovieDescriptionOutputSchema = z.object({
  description: z.string().describe('The AI-generated movie description.'),
});
export type GenerateMovieDescriptionOutput = z.infer<typeof GenerateMovieDescriptionOutputSchema>;

export async function generateMovieDescription(
  input: GenerateMovieDescriptionInput
): Promise<GenerateMovieDescriptionOutput> {
  return generateMovieDescriptionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateMovieDescriptionPrompt',
  input: {schema: GenerateMovieDescriptionInputSchema},
  output: {schema: GenerateMovieDescriptionOutputSchema},
  prompt: `You are a movie critic for {{publication}}.  Write a short movie description in the style of {{publication}} for the following movie:

Title: {{title}}
Genre: {{genre}}
Description: {{description}}`,
});

const generateMovieDescriptionFlow = ai.defineFlow(
  {
    name: 'generateMovieDescriptionFlow',
    inputSchema: GenerateMovieDescriptionInputSchema,
    outputSchema: GenerateMovieDescriptionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
