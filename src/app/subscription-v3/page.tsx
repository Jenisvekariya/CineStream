import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { cn } from '@/lib/utils';

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
                            <TableHead className="text-center">
                                <div className="p-4 bg-primary/10 rounded-lg">
                                    <h3 className="font-bold text-primary text-xl">Basic</h3>
                                </div>
                            </TableHead>
                             <TableHead className="text-center">
                                <div className="p-4 bg-primary/20 rounded-lg">
                                    <h3 className="font-bold text-primary text-xl">Standard</h3>
                                </div>
                            </TableHead>
                             <TableHead className="text-center">
                                <div className="p-4 bg-primary/30 rounded-lg">
                                    <h3 className="font-bold text-primary text-xl">Premium</h3>
                                </div>
                            </TableHead>
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
                    </TableBody>
                </Table>
            </div>

            <div className="flex justify-center mt-12">
                 <Button size="lg" className="text-lg px-10 py-6 rounded-full">Get Started</Button>
            </div>
        </div>
    );
}
