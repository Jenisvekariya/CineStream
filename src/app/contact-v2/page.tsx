import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";

export default function ContactV2Page() {
    return (
        <div className="bg-card text-card-foreground">
            <div className="container py-16 md:py-24">
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-headline font-bold">Get In Touch</h1>
                    <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
                        We're here to help and answer any question you might have. We look forward to hearing from you.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    <div className="space-y-8 bg-background p-8 rounded-lg">
                        <h2 className="text-3xl font-headline font-semibold">Send a Message</h2>
                        <form className="space-y-4">
                            <div className="grid sm:grid-cols-2 gap-4">
                                <div className="space-y-1.5">
                                    <Label htmlFor="name">Your Name</Label>
                                    <Input id="name" />
                                </div>
                                <div className="space-y-1.5">
                                    <Label htmlFor="email">Your Email</Label>
                                    <Input id="email" type="email" />
                                </div>
                            </div>
                            <div className="space-y-1.5">
                                <Label htmlFor="message">Your Message</Label>
                                <Textarea id="message" rows={5} />
                            </div>
                            <Button type="submit" size="lg" className="w-full">Send</Button>
                        </form>
                    </div>

                    <div className="space-y-8">
                        <div className="flex gap-6 items-start">
                            <div className="bg-primary/10 text-primary p-3 rounded-full">
                                <Mail className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-xl font-headline font-semibold">Email</h3>
                                <p className="text-muted-foreground">Our support team will get back to you within 24 hours.</p>
                                <a href="mailto:support@cinestream.com" className="text-primary font-medium hover:underline">support@cinestream.com</a>
                            </div>
                        </div>
                        <div className="flex gap-6 items-start">
                             <div className="bg-primary/10 text-primary p-3 rounded-full">
                                <Phone className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-xl font-headline font-semibold">Phone</h3>
                                <p className="text-muted-foreground">Mon-Fri from 8am to 5pm.</p>
                                <a href="tel:+1234567890" className="text-primary font-medium hover:underline">+1 (234) 567-890</a>
                            </div>
                        </div>
                        <div className="flex gap-6 items-start">
                             <div className="bg-primary/10 text-primary p-3 rounded-full">
                                <MapPin className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-xl font-headline font-semibold">Office</h3>
                                <p className="text-muted-foreground">123 Movie Lane, Hollywood, CA 90210</p>
                                <div className="mt-2 rounded-lg overflow-hidden h-40 w-full relative">
                                    <Image src="https://images.unsplash.com/photo-1571900132342-998ea5a8c2a4?q=80&w=2070&auto=format&fit=crop" alt="Map" fill className="object-cover" data-ai-hint="map location"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
