import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Crown, User, Lock, Film } from 'lucide-react';
import { CodeBlock } from '@/components/code-block';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

export default function DashboardCardsPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-headline font-bold">Cards</h1>
      <p className="text-muted-foreground">
        Cards are versatile containers used to group related information and actions.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-3">
          <Card>
              <CardHeader>
                  <CardTitle>Basic Card Structure</CardTitle>
                  <CardDescription>Anatomy of a standard card component.</CardDescription>
              </CardHeader>
              <CardContent>
                  <CodeBlock>
  {`<Card>
      <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
          <p>Card Content</p>
      </CardContent>
      <CardFooter>
          <Button>Action</Button>
      </CardFooter>
  </Card>`}
                  </CodeBlock>
              </CardContent>
          </Card>
        </div>

        <Card>
            <CardHeader>
                <CardTitle>General Purpose Card</CardTitle>
                <CardDescription>A simple card with header, content, and footer.</CardDescription>
            </CardHeader>
            <CardContent>
                <p>The content of the card goes here. It can be text, images, or any other components.</p>
            </CardContent>
            <CardFooter>
                <Button>Call to Action</Button>
            </CardFooter>
        </Card>

        <Card className="border-primary border-2 shadow-primary/20 flex flex-col">
            <CardHeader className="text-center">
              <Crown className="w-12 h-12 mx-auto mb-4 text-primary" />
              <CardTitle className="text-2xl font-headline">Premium Plan</CardTitle>
              <CardDescription>
                <span className="text-4xl font-bold text-foreground">$22.99</span>
                <span className="text-muted-foreground">/month</span>
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <ul className="space-y-4 text-sm text-muted-foreground">
                  <li className="flex items-center gap-3"><User className="w-4 h-4 text-primary" /> Feature-rich access</li>
                  <li className="flex items-center gap-3"><Film className="w-4 h-4 text-primary" /> Unlimited streaming</li>
                  <li className="flex items-center gap-3"><Lock className="w-4 h-4 text-primary" /> Cancel anytime</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Choose Plan</Button>
            </CardFooter>
        </Card>
        
         <Card>
            <CardHeader>
                <CardTitle>Login</CardTitle>
                <CardDescription>Example of a card used for an auth form.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="m@example.com" />
                </div>
                 <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" type="password" placeholder="********" />
                </div>
            </CardContent>
            <CardFooter className="flex-col gap-4 items-stretch">
                <Button className="w-full">Sign In</Button>
                <Button variant="outline" className="w-full">Sign In with Google</Button>
            </CardFooter>
        </Card>
      </div>
    </div>
  );
}
