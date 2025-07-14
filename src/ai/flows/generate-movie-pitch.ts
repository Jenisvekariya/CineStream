// src/ai/flows/generate-movie-pitch.ts
'use server';

/**
 * @fileOverview Generates a movie pitch including a title, logline, and poster concept.
 *
 * - generateMoviePitch - A function that generates a movie pitch.
 * - GenerateMoviePitchInput - The input type for the generateMoviePitch function.
 * - GenerateMoviePitchOutput - The return type for the generateMoviePitch function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateMoviePitchInputSchema = z.object({
  genre: z.string().describe('The genre of the movie.'),
  theme: z.string().describe('The main theme or keyword for the movie idea.'),
});
export type GenerateMoviePitchInput = z.infer<typeof GenerateMoviePitchInputSchema>;

const GenerateMoviePitchOutputSchema = z.object({
  title: z.string().describe('A catchy, original movie title.'),
  logline: z.string().describe('A compelling one-sentence summary of the movie plot.'),
  posterPrompt: z.string().describe('A descriptive prompt for an AI image generator to create a movie poster.'),
});
export type GenerateMoviePitchOutput = z.infer<typeof GenerateMoviePitchOutputSchema>;

export async function generateMoviePitch(input: GenerateMoviePitchInput): Promise<GenerateMoviePitchOutput> {
  return generateMoviePitchFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateMoviePitchPrompt',
  input: {schema: GenerateMoviePitchInputSchema},
  output: {schema: GenerateMoviePitchOutputSchema},
  prompt: `You are an expert Hollywood producer. Create a concept for a new blockbuster movie.
Given the following genre and theme, generate a creative and exciting movie pitch.

Genre: {{{genre}}}
Theme: {{{theme}}}

Your pitch must include:
1.  A catchy, original title.
2.  A compelling one-sentence logline that summarizes the plot.
3.  A descriptive prompt for an AI image generator to create a visually stunning movie poster. The prompt should be detailed and evoke a strong mood.
`,
});

const generateMoviePitchFlow = ai.defineFlow(
  {
    name: 'generateMoviePitchFlow',
    inputSchema: GenerateMoviePitchInputSchema,
    outputSchema: GenerateMoviePitchOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
