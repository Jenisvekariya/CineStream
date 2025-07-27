import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Terminal, Waves, HelpCircle } from 'lucide-react';
import { CodeBlock } from '@/components/code-block';


export default function DashboardComponentsPage() {
    return (
        <div className="space-y-8">
            <h1 className="text-4xl font-headline font-bold">Components</h1>
            <p className="text-muted-foreground">
                A collection of other UI components used in the application.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                <Card>
                    <CardHeader>
                        <CardTitle>Alerts</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <Alert>
                            <Terminal className="h-4 w-4" />
                            <AlertTitle>Heads up!</AlertTitle>
                            <AlertDescription>
                                You can add components to your app using the cli.
                            </AlertDescription>
                        </Alert>
                         <Alert variant="destructive">
                            <HelpCircle className="h-4 w-4" />
                            <AlertTitle>Error</AlertTitle>
                            <AlertDescription>
                                Your session has expired. Please log in again.
                            </AlertDescription>
                        </Alert>
                        <CodeBlock>
{`<Alert>
    <Terminal className="h-4 w-4" />
    <AlertTitle>Heads up!</AlertTitle>
    <AlertDescription>
        You can add components to your app.
    </AlertDescription>
</Alert>

<Alert variant="destructive">
    <HelpCircle className="h-4 w-4" />
    <AlertTitle>Error</AlertTitle>
    <AlertDescription>
        Your session has expired.
    </AlertDescription>
</Alert>`}
                        </CodeBlock>
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader>
                        <CardTitle>Badges</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                       <div className="flex flex-wrap gap-4">
                        <Badge>Default</Badge>
                        <Badge variant="secondary">Secondary</Badge>
                        <Badge variant="destructive">Destructive</Badge>
                        <Badge variant="outline">Outline</Badge>
                       </div>
                       <CodeBlock>
{`<Badge>Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="destructive">Destructive</Badge>
<Badge variant="outline">Outline</Badge>`}
                       </CodeBlock>
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader>
                        <CardTitle>Progress Bar</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <Progress value={66} className="h-2" />
                        <CodeBlock>
                            {`<Progress value={66} />`}
                        </CodeBlock>
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader>
                        <CardTitle>Accordion</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-1">
                                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                                <AccordionContent>
                                Yes. It adheres to the WAI-ARIA design pattern.
                                </AccordionContent>
                            </AccordionItem>
                             <AccordionItem value="item-2">
                                <AccordionTrigger>Is it styled?</AccordionTrigger>
                                <AccordionContent>
                                Yes. It comes with default styles that match the rest of the components.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                        <CodeBlock>
{`<Accordion type="single" collapsible>
    <AccordionItem value="item-1">
        <AccordionTrigger>Question 1</AccordionTrigger>
        <AccordionContent>Answer 1</AccordionContent>
    </AccordionItem>
</Accordion>`}
                        </CodeBlock>
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader>
                        <CardTitle>Tabs</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                       <Tabs defaultValue="account" className="w-full">
                            <TabsList className="grid w-full grid-cols-2">
                                <TabsTrigger value="account">Account</TabsTrigger>
                                <TabsTrigger value="password">Password</TabsTrigger>
                            </TabsList>
                            <TabsContent value="account" className="p-4 border rounded-b-md border-t-0">
                                Make changes to your account here.
                            </TabsContent>
                            <TabsContent value="password" className="p-4 border rounded-b-md border-t-0">
                                Change your password here.
                            </TabsContent>
                        </Tabs>
                        <CodeBlock>
{`<Tabs defaultValue="account">
    <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
    </TabsList>
    <TabsContent value="account">...</TabsContent>
    <TabsContent value="password">...</TabsContent>
</Tabs>`}
                        </CodeBlock>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Separator</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center space-y-4">
                        <div className="text-sm">
                            <p className="text-muted-foreground">The New York Times</p>
                            <Separator className="my-4"/>
                            <p className="font-medium text-foreground">Style Section</p>
                        </div>
                        <CodeBlock>
                            {`<Separator />`}
                        </CodeBlock>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
