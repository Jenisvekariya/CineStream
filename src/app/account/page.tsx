import { User, Shield, CreditCard, Bell, HelpCircle } from 'lucide-react';
import Link from 'next/link';

const menuItems = [
    {
        title: "Account",
        items: [
            { href: "/profile", label: "Membership & Billing", icon: User },
            { href: "#", label: "Security & Privacy", icon: Shield },
            { href: "/payment-methods", label: "Payment Methods", icon: CreditCard },
            { href: "#", label: "Notification Settings", icon: Bell },
            { href: "#", label: "Help & Support", icon: HelpCircle },
        ]
    }
];

export default function AccountPage() {
    return (
        <div className="bg-background text-foreground min-h-screen">
            <div className="container mx-auto px-4 py-8 md:py-16">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-3xl md:text-4xl font-headline font-bold mb-8">Account</h1>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <aside className="md:col-span-1">
                            <nav className="space-y-4">
                                {menuItems.map((group) => (
                                    <div key={group.title}>
                                        <h2 className="font-semibold text-lg mb-2 text-muted-foreground">{group.title}</h2>
                                        <ul className="space-y-1">
                                            {group.items.map((item) => (
                                                <li key={item.label}>
                                                    <Link href={item.href} className="flex items-center gap-3 px-3 py-2 rounded-md text-foreground hover:bg-muted transition-colors">
                                                        <item.icon className="w-5 h-5 text-muted-foreground" />
                                                        <span>{item.label}</span>
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </nav>
                        </aside>

                        <main className="md:col-span-3">
                            <div className="space-y-8">
                                <section className="p-6 bg-card rounded-lg border">
                                    <h3 className="font-headline text-xl font-bold mb-4">Membership Details</h3>
                                    <div className="space-y-2">
                                        <p><span className="font-semibold">Email:</span> user@example.com</p>
                                        <p><span className="font-semibold">Password:</span> ********</p>
                                    </div>
                                    <div className="mt-4 flex gap-4">
                                        <Link href="/profile" className="text-sm text-primary hover:underline">Change email</Link>
                                        <Link href="/forgot-password-v1" className="text-sm text-primary hover:underline">Change password</Link>
                                    </div>
                                </section>
                                
                                <section className="p-6 bg-card rounded-lg border">
                                    <h3 className="font-headline text-xl font-bold mb-4">Current Plan</h3>
                                     <div className="flex items-center justify-between">
                                        <div>
                                            <p className="font-semibold text-lg">Premium Plan</p>
                                            <p className="text-muted-foreground">$22.99/month</p>
                                        </div>
                                        <Link href="/manage-subscription" className="text-sm text-primary hover:underline">Manage Subscription</Link>
                                    </div>
                                </section>

                                <section className="p-6 bg-card rounded-lg border">
                                    <h3 className="font-headline text-xl font-bold mb-4">Billing Information</h3>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-4">
                                             <CreditCard className="w-8 h-8 text-muted-foreground" />
                                            <div>
                                                <p className="font-semibold">Visa ending in 1234</p>
                                                <p className="text-muted-foreground text-sm">Expires 12/2026</p>
                                            </div>
                                        </div>
                                        <Link href="/payment-methods" className="text-sm text-primary hover:underline">Manage Payment</Link>
                                    </div>
                                </section>
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        </div>
    );
}
