import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const faqItems = [
    {
        question: "What is CineStream?",
        answer: "CineStream is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices."
    },
    {
        question: "How much does CineStream cost?",
        answer: "Watch CineStream on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from $9.99 to $22.99 a month. No extra costs, no contracts."
    },
    {
        question: "Where can I watch?",
        answer: "Watch anywhere, anytime. Sign in with your CineStream account to watch instantly on the web at cinestream.com from your personal computer or on any internet-connected device that offers the CineStream app, including smart TVs, smartphones, tablets, streaming media players and game consoles."
    },
    {
        question: "How do I cancel?",
        answer: "CineStream is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime."
    },
    {
        question: "What can I watch on CineStream?",
        answer: "CineStream has an extensive library of feature films, documentaries, TV shows, anime, and more. Watch as much as you want, anytime you want."
    },
    {
        question: "Is CineStream good for kids?",
        answer: "The CineStream Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space. Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see."
    }
]

export default function FaqV1Page() {
    return (
        <div className="container py-12 md:py-20">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-headline font-bold mb-4">Frequently Asked Questions</h1>
                    <p className="text-lg text-muted-foreground">
                        Have questions? We have answers. If you can't find what you're looking for, feel free to contact us.
                    </p>
                </div>

                <Accordion type="single" collapsible className="w-full">
                    {faqItems.map((item, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                            <AccordionTrigger className="text-lg font-semibold text-left">{item.question}</AccordionTrigger>
                            <AccordionContent className="text-base text-muted-foreground">
                                {item.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </div>
    );
}
