import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Crown } from 'lucide-react';

export default function DashboardCardsPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-headline font-bold">Cards</h1>
      <p className="text-muted-foreground">
        Cards are used to group related information in a container.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
            <CardHeader>
                <CardTitle>Basic Card</CardTitle>
                <CardDescription>This is a simple card component.</CardDescription>
            </CardHeader>
            <CardContent>
                <p>The content of the card goes here. It can be anything you want it to be.</p>
            </CardContent>
            <CardFooter>
                <Button>Action</Button>
            </CardFooter>
        </Card>

        <Card className="border-primary border-2 shadow-primary/20">
            <CardHeader className="text-center">
              <Crown className="w-12 h-12 mx-auto mb-4 text-primary" />
              <CardTitle className="text-2xl font-headline">Featured Card</CardTitle>
              <CardDescription>
                <span className="text-4xl font-bold text-foreground">$22.99</span>
                <span className="text-muted-foreground">/month</span>
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <ul className="space-y-4">
                  <li className="flex items-center gap-3">A feature</li>
                  <li className="flex items-center gap-3">Another feature</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Choose Plan</Button>
            </CardFooter>
        </Card>
        
         <Card>
            <CardHeader>
                <CardTitle>Login Form</CardTitle>
                <CardDescription>Example of a card used for a form.</CardDescription>
            </CardHeader>
            <CardContent>
                <p>Form elements would go here.</p>
            </CardContent>
        </Card>
      </div>

    </div>
  );
}