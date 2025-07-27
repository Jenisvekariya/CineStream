

'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Check, Zap, Crown, Film } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import Link from 'next/link';

const plans = {
  monthly: [
    {
      name: 'Basic',
      price: '$9.99',
      period: '/month',
      icon: Film,
      features: [
        'Access to all movies',
        'Watch on 1 device at a time',
        'Standard Definition (SD)',
      ],
      isPopular: false,
    },
    {
      name: 'Standard',
      price: '$15.99',
      period: '/month',
      icon: Zap,
      features: [
        'Access to all movies',
        'Watch on 2 devices at a time',
        'High Definition (HD)',
        'Download on 2 devices',
      ],
      isPopular: true,
    },
    {
      name: 'Premium',
      price: '$22.99',
      period: '/month',
      icon: Crown,
      features: [
        'Access to all movies',
        'Watch on 4 devices at a time',
        'Ultra High Definition (4K)',
        'Download on 4 devices',
        'Spatial Audio',
      ],
      isPopular: false,
    },
  ],
  yearly: [
    {
      name: 'Basic',
      price: '$99.99',
      period: '/year',
      icon: Film,
      features: [
        'Access to all movies',
        'Watch on 1 device at a time',
        'Standard Definition (SD)',
      ],
      isPopular: false,
    },
    {
      name: 'Standard',
      price: '$159.99',
      period: '/year',
      icon: Zap,
      features: [
        'Access to all movies',
        'Watch on 2 devices at a time',
        'High Definition (HD)',
        'Download on 2 devices',
      ],
      isPopular: true,
    },
    {
      name: 'Premium',
      price: '$229.99',
      period: '/year',
      icon: Crown,
      features: [
        'Access to all movies',
        'Watch on 4 devices at a time',
        'Ultra High Definition (4K)',
        'Download on 4 devices',
        'Spatial Audio',
      ],
      isPopular: false,
    },
  ],
};


export default function SubscriptionPageV1() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  return (
    <div className="container py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-bold mb-4">Our Pricing Plans</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Choose the plan that's right for you. Stream unlimited movies, ad-free, anytime, anywhere. Cancel anytime.
        </p>
      </div>

      <div className="flex justify-center items-center gap-4 mb-10">
        <Label htmlFor="billing-switch" className={cn(billingCycle === 'monthly' ? 'text-foreground' : 'text-muted-foreground')}>Monthly</Label>
        <Switch
          id="billing-switch"
          checked={billingCycle === 'yearly'}
          onCheckedChange={(checked) => setBillingCycle(checked ? 'yearly' : 'monthly')}
        />
        <Label htmlFor="billing-switch" className={cn(billingCycle === 'yearly' ? 'text-foreground' : 'text-muted-foreground')}>
          Yearly <span className="text-primary font-semibold">(Save up to 16%)</span>
        </Label>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        {(billingCycle === 'monthly' ? plans.monthly : plans.yearly).map((plan) => (
          <Card key={plan.name} className={cn('flex flex-col', plan.isPopular && 'border-primary border-2 shadow-primary/20 shadow-lg relative')}>
            {plan.isPopular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </div>
            )}
            <CardHeader className="text-center">
              <plan.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
              <CardTitle className="text-2xl font-headline">{plan.name}</CardTitle>
              <CardDescription>
                <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                <span className="text-muted-foreground">{plan.period}</span>
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <ul className="space-y-4">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild className={cn('w-full', !plan.isPopular && 'bg-secondary text-secondary-foreground hover:bg-secondary/80')} size="lg">
                <Link href={`/payment?plan=${plan.name}&price=${encodeURIComponent(plan.price + plan.period)}`}>Choose Plan</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
