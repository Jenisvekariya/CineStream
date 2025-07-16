
'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, Crown, Film, Zap } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';


const plans = [
    {
      name: 'Basic',
      price: '$9.99/month',
      icon: Film,
      features: [
        'Access to all movies',
        'Watch on 1 device at a time',
        'Standard Definition (SD)',
      ],
      isCurrent: false,
    },
    {
      name: 'Standard',
      price: '$15.99/month',
      icon: Zap,
      features: [
        'Access to all movies',
        'Watch on 2 devices at a time',
        'High Definition (HD)',
        'Download on 2 devices',
      ],
      isCurrent: false,
    },
    {
      name: 'Premium',
      price: '$22.99/month',
      icon: Crown,
      features: [
        'Access to all movies',
        'Watch on 4 devices at a time',
        'Ultra High Definition (4K)',
        'Download on 4 devices',
        'Spatial Audio',
      ],
      isCurrent: true,
    },
  ];

export default function ManageSubscriptionPage() {
    const [currentPlan, setCurrentPlan] = useState('Premium');

    return (
        <div className="container py-12">
            <div className="max-w-4xl mx-auto">
                <div className="text-left mb-12">
                    <Link href="/account" className="text-sm text-primary hover:underline mb-4 inline-block">&larr; Back to Account</Link>
                    <h1 className="text-4xl md:text-5xl font-headline font-bold mb-2">Manage Subscription</h1>
                    <p className="text-lg text-muted-foreground">Change your plan or cancel your subscription.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mb-12">
                    {plans.map((plan) => (
                        <Card key={plan.name} className={cn('flex flex-col', plan.name === currentPlan && 'border-primary border-2 shadow-primary/20')}>
                             <CardHeader className="text-center">
                                <plan.icon className="w-10 h-10 mx-auto mb-3 text-primary" />
                                <CardTitle className="text-xl font-headline">{plan.name}</CardTitle>
                                <CardDescription className="font-bold text-2xl text-foreground">{plan.price}</CardDescription>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <ul className="space-y-3">
                                    {plan.features.map((feature, index) => (
                                    <li key={index} className="flex items-start gap-3 text-sm">
                                        <Check className="w-4 h-4 mt-0.5 text-green-500 flex-shrink-0" />
                                        <span className="text-muted-foreground">{feature}</span>
                                    </li>
                                    ))}
                                </ul>
                            </CardContent>
                            <CardFooter>
                                {plan.name === currentPlan ? (
                                    <Button className="w-full" disabled>Current Plan</Button>
                                ) : (
                                    <Button className="w-full" variant="outline" onClick={() => setCurrentPlan(plan.name)}>Switch to {plan.name}</Button>
                                )}
                            </CardFooter>
                        </Card>
                    ))}
                </div>

                <Card className="bg-card border">
                    <CardHeader>
                        <CardTitle>Cancel Subscription</CardTitle>
                        <CardDescription>If you cancel, you can still enjoy your plan until the end of your billing period.</CardDescription>
                    </CardHeader>
                    <CardFooter>
                        <AlertDialog>
                            <AlertDialogTrigger asChild>
                                <Button variant="destructive">Cancel Subscription</Button>
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                                <AlertDialogHeader>
                                <AlertDialogTitle>Are you sure you want to cancel?</AlertDialogTitle>
                                <AlertDialogDescription>
                                    This action cannot be undone. You will lose access to your premium features at the end of your current billing cycle.
                                </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                <AlertDialogCancel>Keep Subscription</AlertDialogCancel>
                                <AlertDialogAction onClick={() => console.log('Subscription cancelled')}>Confirm Cancellation</AlertDialogAction>
                                </AlertDialogFooter>
                            </AlertDialogContent>
                        </AlertDialog>
                    </CardFooter>
                </Card>
            </div>
        </div>
    );
}
