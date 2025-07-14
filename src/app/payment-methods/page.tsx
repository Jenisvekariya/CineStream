import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { CreditCard, PlusCircle } from 'lucide-react';
import Link from 'next/link';


export default function PaymentMethodsPage() {
    
    const savedCards = [
        { id: 1, type: 'Visa', last4: '1234', expiry: '12/2026', isDefault: true },
        { id: 2, type: 'Mastercard', last4: '5678', expiry: '08/2025', isDefault: false },
    ];

    return (
        <div className="container py-12">
            <div className="max-w-2xl mx-auto">
                <div className="text-left mb-8">
                    <Link href="/account" className="text-sm text-primary hover:underline mb-4 inline-block">&larr; Back to Account</Link>
                    <h1 className="text-3xl font-headline font-bold mb-2">Payment Methods</h1>
                    <p className="text-lg text-muted-foreground">Manage your saved payment options.</p>
                </div>

                <Card>
                    <CardHeader>
                        <CardTitle>Your Payment Methods</CardTitle>
                        <CardDescription>The default method will be used for your subscription.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {savedCards.map((card, index) => (
                                <div key={card.id}>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-4">
                                            <CreditCard className="w-8 h-8 text-muted-foreground" />
                                            <div>
                                                <p className="font-semibold">{card.type} ending in {card.last4} {card.isDefault && <span className="text-xs text-primary font-medium ml-2">(Default)</span>}</p>
                                                <p className="text-sm text-muted-foreground">Expires {card.expiry}</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-2">
                                            {!card.isDefault && <Button variant="ghost" size="sm">Set as Default</Button>}
                                            <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive hover:bg-destructive/10">Remove</Button>
                                        </div>
                                    </div>
                                    {index < savedCards.length - 1 && <Separator className="my-4"/>}
                                </div>
                            ))}
                        </div>
                        <Separator className="my-6"/>
                         <Button variant="outline" className="w-full">
                            <PlusCircle className="mr-2 h-4 w-4" />
                            Add New Payment Method
                        </Button>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
