
'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

export default function NotificationSettingsPage() {
    const [notifications, setNotifications] = useState({
        newReleases: true,
        recommendations: true,
        accountActivity: true,
        push: true,
        sms: false,
    });

    const handleToggle = (key: keyof typeof notifications) => {
        setNotifications(prev => ({ ...prev, [key]: !prev[key] }));
    }

    return (
        <div className="container py-12">
            <div className="max-w-2xl mx-auto">
                <div className="text-left mb-8">
                    <Link href="/account" className="text-sm text-primary hover:underline mb-4 inline-block">&larr; Back to Account</Link>
                    <h1 className="text-3xl font-headline font-bold mb-2">Notification Settings</h1>
                    <p className="text-lg text-muted-foreground">Control how we communicate with you.</p>
                </div>

                <Card>
                    <CardHeader>
                        <CardTitle>Email Notifications</CardTitle>
                        <CardDescription>Choose what kind of emails you'd like to receive.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <Label htmlFor="newReleases" className="font-semibold">New Releases</Label>
                                <p className="text-sm text-muted-foreground">Get notified about new movies and TV shows.</p>
                            </div>
                            <Switch id="newReleases" checked={notifications.newReleases} onCheckedChange={() => handleToggle('newReleases')} />
                        </div>
                        <Separator />
                         <div className="flex items-center justify-between">
                            <div>
                                <Label htmlFor="recommendations" className="font-semibold">Personalized Recommendations</Label>
                                <p className="text-sm text-muted-foreground">Receive suggestions based on your watch history.</p>
                            </div>
                            <Switch id="recommendations" checked={notifications.recommendations} onCheckedChange={() => handleToggle('recommendations')} />
                        </div>
                         <Separator />
                         <div className="flex items-center justify-between">
                            <div>
                                <Label htmlFor="accountActivity" className="font-semibold">Account Activity</Label>
                                <p className="text-sm text-muted-foreground">Receive alerts about sign-ins and other security events.</p>
                            </div>
                            <Switch id="accountActivity" checked={notifications.accountActivity} onCheckedChange={() => handleToggle('accountActivity')} />
                        </div>
                    </CardContent>
                </Card>

                <Card className="mt-8">
                    <CardHeader>
                        <CardTitle>Other Channels</CardTitle>
                        <CardDescription>Manage notifications on other platforms.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <Label htmlFor="push" className="font-semibold">Push Notifications</Label>
                                <p className="text-sm text-muted-foreground">Get alerts directly on your mobile device.</p>
                            </div>
                            <Switch id="push" checked={notifications.push} onCheckedChange={() => handleToggle('push')} />
                        </div>
                        <Separator />
                         <div className="flex items-center justify-between">
                            <div>
                                <Label htmlFor="sms" className="font-semibold">SMS Alerts</Label>
                                <p className="text-sm text-muted-foreground">Receive important notifications via text message.</p>
                            </div>
                            <Switch id="sms" checked={notifications.sms} onCheckedChange={() => handleToggle('sms')} />
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
