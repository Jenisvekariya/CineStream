import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
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
                A showcase of various form elements.
            </p>

            <Card>
                <CardHeader><CardTitle>Form Elements</CardTitle></CardHeader>
                <CardContent className="space-y-6">
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                        <Label htmlFor="email">Email</Label>
                        <Input type="email" id="email" placeholder="Email" />
                        <CodeBlock>{`<Label htmlFor="email">Email</Label>\n<Input type="email" id="email" />`}</CodeBlock>
                    </div>

                    <div className="grid w-full max-w-sm items-center gap-1.5">
                        <Label htmlFor="picture">Picture</Label>
                        <Input id="picture" type="file" />
                        <CodeBlock>{`<Label htmlFor="picture">Picture</Label>\n<Input id="picture" type="file" />`}</CodeBlock>
                    </div>

                     <div className="grid w-full gap-1.5">
                        <Label htmlFor="message">Your message</Label>
                        <Textarea placeholder="Type your message here." id="message" />
                        <CodeBlock>{`<Label htmlFor="message">Your message</Label>\n<Textarea id="message" />`}</CodeBlock>
                    </div>

                    <div className="flex items-center space-x-2">
                        <Checkbox id="terms" />
                        <Label htmlFor="terms">Accept terms and conditions</Label>
                    </div>
                     <CodeBlock>{`<div className="flex items-center space-x-2">
    <Checkbox id="terms" />
    <Label htmlFor="terms">Accept terms</Label>
</div>`}</CodeBlock>

                    <div>
                        <RadioGroup defaultValue="comfortable">
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="default" id="r1" />
                                <Label htmlFor="r1">Default</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="comfortable" id="r2" />
                                <Label htmlFor="r2">Comfortable</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="compact" id="r3" />
                                <Label htmlFor="r3">Compact</Label>
                            </div>
                        </RadioGroup>
                    </div>
                     <CodeBlock>{`<RadioGroup defaultValue="comfortable">
    <div className="flex items-center space-x-2">
        <RadioGroupItem value="default" id="r1" />
        <Label htmlFor="r1">Default</Label>
    </div>
    ...
</RadioGroup>`}</CodeBlock>

                     <div className="flex items-center space-x-2">
                        <Switch id="airplane-mode" />
                        <Label htmlFor="airplane-mode">Airplane Mode</Label>
                    </div>
                     <CodeBlock>{`<div className="flex items-center space-x-2">
    <Switch id="airplane-mode" />
    <Label htmlFor="airplane-mode">Airplane Mode</Label>
</div>`}</CodeBlock>
                </CardContent>
            </Card>

            <Card>
                 <CardHeader><CardTitle>Select</CardTitle></CardHeader>
                 <CardContent className="space-y-4">
                    <Select>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Theme" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="light">Light</SelectItem>
                            <SelectItem value="dark">Dark</SelectItem>
                            <SelectItem value="system">System</SelectItem>
                        </SelectContent>
                    </Select>
                    <CodeBlock>
{`<Select>
    <SelectTrigger>
        <SelectValue placeholder="Theme" />
    </SelectTrigger>
    <SelectContent>
        <SelectItem value="light">Light</SelectItem>
        <SelectItem value="dark">Dark</SelectItem>
        <SelectItem value="system">System</SelectItem>
    </SelectContent>
</Select>`}
                    </CodeBlock>
                 </CardContent>
            </Card>
        </div>
    );
}
