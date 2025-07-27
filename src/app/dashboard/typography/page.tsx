import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CodeBlock } from '@/components/code-block';

export default function DashboardTypographyPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-headline font-bold">Typography</h1>
      <p className="text-muted-foreground">
        A showcase of the different typographic styles used in the application.
      </p>

      <Card>
        <CardHeader>
          <CardTitle>Headings</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <h1 className="text-5xl font-headline font-extrabold tracking-tight">
            H1: The Cinematic Universe
          </h1>
          <h2 className="text-4xl font-headline font-semibold tracking-tight">
            H2: Exploring New Worlds
          </h2>
          <h3 className="text-3xl font-headline font-semibold tracking-tight">
            H3: The Art of Storytelling
          </h3>
          <h4 className="text-2xl font-headline font-semibold tracking-tight">
            H4: Behind the Scenes
          </h4>
          <CodeBlock>
{`<h1>H1 Heading</h1>
<h2>H2 Heading</h2>
<h3>H3 Heading</h3>
<h4>H4 Heading</h4>`}
          </CodeBlock>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Paragraph & Body</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
              <p>
                  This is a standard paragraph, perfect for longer-form content and descriptions. The quick brown fox jumps over the lazy dog. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.
              </p>
              <p className="text-muted-foreground">
                  This is a paragraph with muted foreground color, often used for supplementary details, captions, or less important text.
              </p>
              <blockquote className="mt-6 border-l-2 pl-6 italic">
                "This is a blockquote. It's great for highlighting a quote from a review or a character's line."
              </blockquote>
              <CodeBlock>
{`<p>Standard paragraph text.</p>
<p className="text-muted-foreground">Muted text.</p>
<blockquote className="border-l-2 pl-6 italic">Blockquote</blockquote>`}
              </CodeBlock>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Inline & Lists</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
             <p>
                You can use <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">inline code</code> for technical terms or snippets.
                This is a <a href="#" className="font-medium text-primary underline underline-offset-4">link</a> to another page.
            </p>
            <p className="text-sm font-medium">
                This is small, medium-weight text, suitable for labels or metadata.
            </p>
            <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
              <li>Unordered List Item 1</li>
              <li>Unordered List Item 2</li>
            </ul>
             <CodeBlock>
{`<code>inline code</code>
<a href="#">link</a>
<ul className="list-disc">...</ul>`}
            </CodeBlock>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
