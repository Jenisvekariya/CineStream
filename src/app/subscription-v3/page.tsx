
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const features = [
    { feature: 'Monthly price', basic: '$9.99', standard: '$15.99', premium: '$22.99' },
    { feature: 'Video quality', basic: 'Good', standard: 'Better', premium: 'Best' },
    { feature: 'Resolution', basic: '720p', standard: '1080p', premium: '4K+HDR' },
    { feature: 'Spatial audio (immersive sound)', basic: false, standard: false, premium: true },
    { feature: 'Supported devices', basic: 'TV, computer, phone, tablet', standard: 'TV, computer, phone, tablet', premium: 'TV, computer, phone, tablet' },
    { feature: 'Devices your household can watch on at the same time', basic: 1, standard: 2, premium: 4 },
    { feature: 'Download devices', basic: 1, standard: 2, premium: 6 },
    { feature: 'Ad-free', basic: false, standard: true, premium: true },
];

const plans = [
    { name: 'Basic', price: '$9.99/month' },
    { name: 'Standard', price: '$15.99/month' },
    { name: 'Premium', price: '$22.99/month' },
]

export default function SubscriptionPageV3() {
    return (
        <div className="container py-12 md:py-20">
            <div className="text-left mb-12 max-w-2xl">
                <h1 className="text-4xl font-headline font-bold mb-4">Compare Plans</h1>
                <p className="text-lg text-muted-foreground">
                    Choose the right plan for you and enjoy endless entertainment.
                </p>
            </div>

            <div className="overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow className="hover:bg-transparent">
                            <TableHead className="w-1/3"></TableHead>
                            {plans.map(plan => (
                                <TableHead key={plan.name} className="text-center">
                                    <div className="p-4 bg-primary/10 rounded-lg">
                                        <h3 className="font-bold text-primary text-xl">{plan.name}</h3>
                                    </div>
                                </TableHead>
                            ))}
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {features.map((item, index) => (
                            <TableRow key={index} className="border-b border-border">
                                <TableCell className="font-medium text-foreground">{item.feature}</TableCell>
                                <TableCell className="text-center text-muted-foreground">
                                    {typeof item.basic === 'boolean' ? 
                                        (item.basic ? <Check className="mx-auto text-primary" /> : '–') : 
                                        item.basic}
                                </TableCell>
                                <TableCell className="text-center text-muted-foreground">
                                     {typeof item.standard === 'boolean' ? 
                                        (item.standard ? <Check className="mx-auto text-primary" /> : '–') : 
                                        item.standard}
                                </TableCell>
                                <TableCell className="text-center text-muted-foreground">
                                     {typeof item.premium === 'boolean' ? 
                                        (item.premium ? <Check className="mx-auto text-primary" /> : '–') : 
                                        item.premium}
                                </TableCell>
                            </TableRow>
                        ))}
                         <TableRow className="hover:bg-transparent">
                            <TableCell></TableCell>
                            {plans.map(plan => (
                                <TableCell key={plan.name} className="text-center">
                                    <Button asChild className="w-full">
                                        <Link href={`/payment?plan=${plan.name}&price=${encodeURIComponent(plan.price)}`}>Choose Plan</Link>
                                    </Button>
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}
