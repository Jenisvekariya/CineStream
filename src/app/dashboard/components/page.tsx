import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Terminal, Waves } from 'lucide-react';
import { CodeBlock } from '@/components/code-block';


export default function DashboardComponentsPage() {
    return (
        <div className="space-y-8">
            <h1 className="text-4xl font-headline font-bold">Components</h1>
            <p className="text-muted-foreground">
                A collection of other UI components used in the application.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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
                            <Waves className="h-4 w-4" />
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
        You can add components to your app using the cli.
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
                        <Accordion type="single" collapsible>
                            <AccordionItem value="item-1">
                                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                                <AccordionContent>
                                Yes. It adheres to the WAI-ARIA design pattern.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                        <CodeBlock>
{`<Accordion type="single" collapsible>
    <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
        Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
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
                       <Tabs defaultValue="account">
                            <TabsList>
                                <TabsTrigger value="account">Account</TabsTrigger>
                                <TabsTrigger value="password">Password</TabsTrigger>
                            </TabsList>
                            <TabsContent value="account" className="p-4 border-t mt-2">
                                Make changes to your account here.
                            </TabsContent>
                            <TabsContent value="password" className="p-4 border-t mt-2">
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
                        <div>
                            <p>Content above</p>
                            <Separator className="my-4"/>
                            <p>Content below</p>
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
