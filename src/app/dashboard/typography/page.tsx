import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

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
            h1. The quick brown fox jumps over the lazy dog.
          </h1>
          <h2 className="text-4xl font-headline font-semibold tracking-tight">
            h2. The quick brown fox jumps over the lazy dog.
          </h2>
          <h3 className="text-3xl font-headline font-semibold tracking-tight">
            h3. The quick brown fox jumps over the lazy dog.
          </h3>
          <h4 className="text-2xl font-headline font-semibold tracking-tight">
            h4. The quick brown fox jumps over the lazy dog.
          </h4>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Body Text</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
            <p>
                This is a standard paragraph. The quick brown fox jumps over the lazy dog. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.
            </p>
             <p className="text-muted-foreground">
                This is a paragraph with muted foreground color, often used for descriptions or less important text.
            </p>
             <p className="text-sm font-medium">
                This is small, medium-weight text, often used for labels or metadata.
            </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Inline Elements</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
            <p>You can use <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">inline code</code> snippets.</p>
            <p>This is a <a href="#" className="font-medium text-primary underline underline-offset-4">link</a>.</p>
        </CardContent>
      </Card>
    </div>
  );
}
