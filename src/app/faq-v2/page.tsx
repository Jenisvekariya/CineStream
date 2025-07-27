import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Activity, Tv, Wallet } from "lucide-react"

const generalFaqs = [
    { q: "What is CineStream?", a: "CineStream is a streaming service offering a vast library of movies, TV shows, and documentaries." },
    { q: "How do I sign up?", a: "You can sign up on our website by choosing a plan and creating an account with your email and password." },
    { q: "Can I watch on multiple devices?", a: "Yes, depending on your subscription plan, you can watch on multiple devices simultaneously." },
]

const billingFaqs = [
    { q: "What payment methods do you accept?", a: "We accept all major credit cards, including Visa, Mastercard, and American Express." },
    { q: "How do I cancel my subscription?", a: "You can cancel your subscription anytime from your account page. There are no cancellation fees." },
    { q: "Can I change my plan?", a: "Yes, you can upgrade or downgrade your plan at any time through your account settings." },
]

const watchingFaqs = [
    { q: "What video quality is available?", a: "We offer various video qualities, including Standard Definition (SD), High Definition (HD), and 4K Ultra HD, depending on your plan." },
    { q: "Can I download content to watch offline?", a: "Yes, our Standard and Premium plans allow you to download content on a specified number of devices." },
    { q: "How can I find a specific movie or show?", a: "Use the search bar at the top of the page to search our library by title, actor, or genre." },
]

export default function FaqV2Page() {
    return (
        <div className="bg-card py-16 md:py-24">
            <div className="container">
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-headline font-bold">How can we help?</h1>
                    <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
                        Find answers to your questions about our service, billing, and content.
                    </p>
                </div>

                <Tabs defaultValue="general" className="w-full max-w-4xl mx-auto">
                    <TabsList className="grid w-full grid-cols-3">
                        <TabsTrigger value="general"><Activity className="mr-2" /> General</TabsTrigger>
                        <TabsTrigger value="billing"><Wallet className="mr-2" /> Billing & Plans</TabsTrigger>
                        <TabsTrigger value="watching"><Tv className="mr-2" /> Watching</TabsTrigger>
                    </TabsList>
                    <TabsContent value="general" className="mt-8">
                        <Accordion type="single" collapsible>
                            {generalFaqs.map((faq, i) => (
                                <AccordionItem key={i} value={`item-${i}`}>
                                    <AccordionTrigger>{faq.q}</AccordionTrigger>
                                    <AccordionContent>{faq.a}</AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </TabsContent>
                    <TabsContent value="billing" className="mt-8">
                         <Accordion type="single" collapsible>
                            {billingFaqs.map((faq, i) => (
                                <AccordionItem key={i} value={`item-${i}`}>
                                    <AccordionTrigger>{faq.q}</AccordionTrigger>
                                    <AccordionContent>{faq.a}</AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </TabsContent>
                    <TabsContent value="watching" className="mt-8">
                         <Accordion type="single" collapsible>
                            {watchingFaqs.map((faq, i) => (
                                <AccordionItem key={i} value={`item-${i}`}>
                                    <AccordionTrigger>{faq.q}</AccordionTrigger>
                                    <AccordionContent>{faq.a}</AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    )
}
