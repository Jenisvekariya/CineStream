import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlayCircle, Info, ArrowDownToLine, PlusCircle } from 'lucide-react';

export default function DashboardButtonsPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-headline font-bold">Buttons</h1>
      <p className="text-muted-foreground">
        Showcase of various button styles used across the application.
      </p>

      <Card>
        <CardHeader>
          <CardTitle>Button Variants</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-4">
          <Button>Default</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Button Sizes</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-wrap items-center gap-4">
          <Button size="lg">Large</Button>
          <Button size="default">Default</Button>
          <Button size="sm">Small</Button>
          <Button size="icon"><PlayCircle /></Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Buttons with Icons</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-4">
           <Button>
              <PlayCircle className="mr-2 h-6 w-6" />
              Watch Now
            </Button>
            <Button variant="secondary">
              <Info className="mr-2 h-6 w-6" />
              More Info
            </Button>
             <Button variant="secondary">
              <ArrowDownToLine className="mr-2 h-5 w-5" />
              Download
            </Button>
             <Button variant="outline">
                <PlusCircle className="mr-2 h-4 w-4" />
                Add New
            </Button>
        </CardContent>
      </Card>

       <Card>
        <CardHeader>
          <CardTitle>Disabled State</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-4">
          <Button disabled>Disabled</Button>
          <Button variant="secondary" disabled>Disabled</Button>
          <Button variant="outline" disabled>Disabled</Button>
        </CardContent>
      </Card>
    </div>
  );
}