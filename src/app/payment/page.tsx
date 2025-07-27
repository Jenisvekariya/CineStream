
'use client';

import { Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { AuthLayout } from '@/components/layout/auth-layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { CreditCard, Lock } from 'lucide-react';

function PaymentForm() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const plan = searchParams.get('plan') || 'Premium';
    const price = searchParams.get('price') || '$22.99/month';

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // In a real app, you would process the payment here.
        // We'll just redirect to the account page to simulate success.
        router.push('/account');
    }

    return (
        <Card className="w-full max-w-lg">
            <CardHeader>
                <CardTitle className="text-3xl font-headline">Complete Your Purchase</CardTitle>
                <CardDescription>You are subscribing to the <span className="font-bold text-primary">{plan}</span> plan.</CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Payment Details</h3>
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="card-number">Card Number</Label>
                                <div className="relative">
                                    <Input id="card-number" placeholder="0000 0000 0000 0000" required />
                                    <CreditCard className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="expiry-date">Expiry Date</Label>
                                    <Input id="expiry-date" placeholder="MM/YY" required />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="cvc">CVC</Label>
                                     <div className="relative">
                                        <Input id="cvc" placeholder="123" required />
                                        <Lock className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                     <div>
                        <h3 className="text-lg font-semibold mb-4">Billing Information</h3>
                        <div className="space-y-4">
                             <div className="space-y-2">
                                <Label htmlFor="name">Full Name</Label>
                                <Input id="name" placeholder="John Doe" required />
                            </div>
                             <div className="space-y-2">
                                <Label htmlFor="address">Billing Address</Label>
                                <Input id="address" placeholder="123 Movie Lane" required />
                            </div>
                        </div>
                    </div>

                    <Button type="submit" className="w-full text-lg h-12">
                        Pay {price}
                    </Button>
                     <p className="text-xs text-muted-foreground text-center">
                        By clicking Pay, you agree to our Terms and start your subscription.
                    </p>
                </form>
            </CardContent>
        </Card>
    )
}


export default function PaymentPage() {
    return (
        <AuthLayout>
            <Suspense fallback={<div>Loading...</div>}>
                <PaymentForm />
            </Suspense>
        </AuthLayout>
    );
}
