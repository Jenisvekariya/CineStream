import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CodeBlock } from '@/components/code-block';
import * as allIcons from 'lucide-react';

const iconList: (keyof typeof allIcons)[] = [
    'Home', 'User', 'Film', 'Tv', 'Clapperboard', 'LibrarySquare',
    'Search', 'Menu', 'X', 'ChevronDown', 'ChevronRight', 'ChevronLeft',
    'PlayCircle', 'Info', 'Star', 'PlusCircle', 'ArrowDownToLine', 'CreditCard',
    'Settings', 'Bell', 'Shield', 'HelpCircle', 'LogOut', 'LogIn', 'KeyRound',
    'Lock', 'Mail', 'Phone', 'MapPin', 'Calendar', 'Clock', 'Copy', 'Check', 'ExternalLink',
    'Trash2', 'Edit', 'MoreHorizontal', 'Eye', 'EyeOff',
    'Sun', 'Moon', 'Monitor', 'Paintbrush', 'Type', 'ToyBrick', 'Feather'
];

export default function DashboardIconsPage() {
    return (
        <div className="space-y-8">
            <h1 className="text-4xl font-headline font-bold">Icons</h1>
            <p className="text-muted-foreground">
                A selection of icons from the <a href="https://lucide.dev/icons/" target="_blank" rel="noopener noreferrer" className="text-primary underline">Lucide</a> icon library. You can change the thickness using the <code className="bg-muted px-1 py-0.5 rounded">strokeWidth</code> prop.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {iconList.map(name => {
                    const IconComponent = allIcons[name] as React.ElementType;
                    if (!IconComponent) return null;
                    
                    return (
                        <Card key={name}>
                            <CardHeader>
                                <CardTitle className="flex items-center justify-between">
                                    <span>{name}</span>
                                    <div className="flex items-center gap-3 text-primary">
                                       <IconComponent strokeWidth={1} />
                                       <IconComponent strokeWidth={2} />
                                       <IconComponent strokeWidth={3} />
                                    </div>
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CodeBlock>
{`import { ${name} } from 'lucide-react';

<${name} strokeWidth={1} /> // Thin
<${name} /> // Regular (2)
<${name} strokeWidth={3} /> // Bold`}
                                </CodeBlock>
                            </CardContent>
                        </Card>
                    )
                })}
            </div>
        </div>
    );
}
