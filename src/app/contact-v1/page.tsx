import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function ContactV1Page() {
    return (
        <div className="container py-12 md:py-20">
            <div className="max-w-xl mx-auto">
                <Card>
                    <CardHeader className="text-center">
                        <CardTitle className="text-3xl font-headline">Contact Us</CardTitle>
                        <CardDescription>
                            Have a question or feedback? Fill out the form below and we'll get back to you as soon as possible.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form className="space-y-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="name">Name</Label>
                                    <Input id="name" placeholder="Enter your name" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="email">Email</Label>
                                    <Input id="email" type="email" placeholder="Enter your email" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="subject">Subject</Label>
                                <Input id="subject" placeholder="What is your message about?" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="message">Message</Label>
                                <Textarea id="message" placeholder="Your message here..." rows={6} />
                            </div>
                            <Button type="submit" className="w-full">Submit Message</Button>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
