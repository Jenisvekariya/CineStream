import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Textarea } from '@/components/ui/textarea';
import { CodeBlock } from '@/components/code-block';

export default function DashboardFormsPage() {
    return (
        <div className="space-y-8">
            <h1 className="text-4xl font-headline font-bold">Forms</h1>
            <p className="text-muted-foreground">
                A showcase of various form elements used for user input.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                <Card>
                    <CardHeader>
                        <CardTitle>Text Inputs</CardTitle>
                        <CardDescription>For single-line and multi-line text.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="grid w-full max-w-sm items-center gap-1.5">
                            <Label htmlFor="email">Email</Label>
                            <Input type="email" id="email" placeholder="m@example.com" />
                            <CodeBlock>{`<Label htmlFor="email">Email</Label>\n<Input type="email" id="email" />`}</CodeBlock>
                        </div>

                        <div className="grid w-full gap-1.5">
                            <Label htmlFor="message">Your message</Label>
                            <Textarea placeholder="Type your message here." id="message" />
                            <CodeBlock>{`<Label htmlFor="message">Your message</Label>\n<Textarea id="message" />`}</CodeBlock>
                        </div>

                        <div className="grid w-full max-w-sm items-center gap-1.5">
                            <Label htmlFor="picture">Picture</Label>
                            <Input id="picture" type="file" />
                            <CodeBlock>{`<Label htmlFor="picture">Picture</Label>\n<Input id="picture" type="file" />`}</CodeBlock>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Selection Controls</CardTitle>
                        <CardDescription>For choosing one or more options.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="space-y-2">
                             <Label>Checkbox</Label>
                            <div className="flex items-center space-x-2 p-2 rounded-md border">
                                <Checkbox id="terms" />
                                <Label htmlFor="terms" className="text-sm font-normal">Accept terms and conditions</Label>
                            </div>
                            <CodeBlock>{`<div className="flex items-center space-x-2">
    <Checkbox id="terms" />
    <Label htmlFor="terms">Accept terms</Label>
</div>`}</CodeBlock>
                        </div>

                        <div className="space-y-2">
                             <Label>Radio Group</Label>
                            <RadioGroup defaultValue="standard" className="p-2 rounded-md border space-y-1">
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="basic" id="r1" />
                                    <Label htmlFor="r1" className="font-normal">Basic</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="standard" id="r2" />
                                    <Label htmlFor="r2" className="font-normal">Standard</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="premium" id="r3" />
                                    <Label htmlFor="r3" className="font-normal">Premium</Label>
                                </div>
                            </RadioGroup>
                             <CodeBlock>{`<RadioGroup defaultValue="standard">
    <div className="flex items-center space-x-2">
        <RadioGroupItem value="basic" id="r1" />
        <Label htmlFor="r1">Basic</Label>
    </div>
    ...
</RadioGroup>`}</CodeBlock>
                        </div>

                        <div className="space-y-2">
                            <Label>Switch</Label>
                            <div className="flex items-center space-x-2 p-2 rounded-md border">
                                <Switch id="autoplay" />
                                <Label htmlFor="autoplay" className="font-normal">Autoplay next episode</Label>
                            </div>
                            <CodeBlock>{`<div className="flex items-center space-x-2">
    <Switch id="autoplay" />
    <Label htmlFor="autoplay">Autoplay</Label>
</div>`}</CodeBlock>
                        </div>
                    </CardContent>
                </Card>

                <div className="lg:col-span-2">
                    <Card>
                        <CardHeader><CardTitle>Select / Dropdown</CardTitle></CardHeader>
                        <CardContent className="space-y-4">
                            <Select>
                                <SelectTrigger className="w-[280px]">
                                    <SelectValue placeholder="Select a genre" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="action">Action</SelectItem>
                                    <SelectItem value="comedy">Comedy</SelectItem>
                                    <SelectItem value="sci-fi">Sci-Fi</SelectItem>
                                    <SelectItem value="drama">Drama</SelectItem>
                                </SelectContent>
                            </Select>
                            <CodeBlock>
        {`<Select>
            <SelectTrigger>
                <SelectValue placeholder="Select an option" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="option1">Option 1</SelectItem>
                <SelectItem value="option2">Option 2</SelectItem>
            </SelectContent>
        </Select>`}
                            </CodeBlock>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
