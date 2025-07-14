import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

const plans = [
    {
        name: 'Free',
        price: '$0',
        description: 'Get started with a selection of free movies.',
        features: ['Ad-supported', 'Limited catalog', 'Standard Definition'],
        buttonText: 'Start Watching',
        variant: 'secondary'
    },
    {
        name: 'Standard',
        price: '$15.99',
        description: 'All of our content in high definition.',
        features: ['Ad-free', 'Unlimited movies & TV shows', 'High Definition (1080p)', 'Watch on 2 devices'],
        buttonText: 'Upgrade to Standard',
        variant: 'default'

    },
    {
        name: 'Premium',
        price: '$22.99',
        description: 'The ultimate streaming experience.',
        features: ['Everything in Standard', 'Ultra HD (4K) & HDR', 'Spatial Audio', 'Watch on 4 devices', 'Download on 6 devices'],
        buttonText: 'Go Premium',
        variant: 'default'
    }
];

export default function SubscriptionPageV2() {
  return (
    <div className="bg-card">
      <div className="container py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-5xl font-headline font-extrabold mb-4">Choose Your Plan</h1>
            <p className="text-xl text-muted-foreground">
                Join CineStream today. Cancel anytime. Ready to watch? Enter your email to create or restart your membership.
            </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan, index) => (
                <Card key={plan.name} className={cn('flex flex-col', index === 1 && 'border-primary shadow-2xl shadow-primary/20 scale-105')}>
                    <CardHeader>
                        <CardTitle className="text-2xl font-headline text-primary">{plan.name}</CardTitle>
                        <p className="text-4xl font-bold">{plan.price}<span className="text-base font-normal text-muted-foreground">/month</span></p>
                        <CardDescription>{plan.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                        <ul className="space-y-3">
                            {plan.features.map((feature, fIndex) => (
                                <li key={fIndex} className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                    <CardFooter>
                        <Button size="lg" className={cn('w-full', plan.variant === 'secondary' && 'bg-secondary text-secondary-foreground hover:bg-secondary/80')}>{plan.buttonText}</Button>
                    </CardFooter>
                </Card>
            ))}
        </div>
      </div>
    </div>
  );
}
