import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { User } from 'lucide-react';
import Link from 'next/link';

export default function ProfilePage() {
    return (
        <div className="container py-12">
            <div className="max-w-2xl mx-auto">
                 <div className="text-left mb-8">
                    <Link href="/account" className="text-sm text-primary hover:underline mb-4 inline-block">&larr; Back to Account</Link>
                    <h1 className="text-3xl font-headline font-bold mb-2">Profile Settings</h1>
                    <p className="text-lg text-muted-foreground">Manage your personal information.</p>
                </div>

                <Card>
                    <CardHeader>
                        <CardTitle>Your Information</CardTitle>
                        <CardDescription>This information will be displayed on your profile.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="flex items-center gap-6">
                            <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center">
                                <User className="w-10 h-10 text-muted-foreground" />
                            </div>
                            <div className="flex items-center gap-2">
                                <Button>Change Photo</Button>
                                <Button variant="ghost">Remove</Button>
                            </div>
                        </div>

                        <Separator />

                        <form className="space-y-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="firstName">First Name</Label>
                                    <Input id="firstName" defaultValue="John" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="lastName">Last Name</Label>
                                    <Input id="lastName" defaultValue="Doe" />
                                </div>
                            </div>
                             <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" type="email" defaultValue="user@example.com" />
                                <p className="text-xs text-muted-foreground">This is the email address you use to log in.</p>
                            </div>

                             <Button type="submit" className="w-full">Save Changes</Button>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
