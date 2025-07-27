import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CodeBlock } from '@/components/code-block';
import { icons } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const iconList: {name: keyof typeof icons, component: LucideIcon}[] = [
    { name: 'PlayCircle', component: icons.PlayCircle },
    { name: 'PauseCircle', component: icons.PauseCircle },
    { name: 'ArrowDownToLine', component: icons.ArrowDownToLine },
    { name: 'Info', component: icons.Info },
    { name: 'Star', component: icons.Star },
    { name: 'Heart', component: icons.Heart },
    { name: 'Bookmark', component: icons.Bookmark },
    { name: 'PlusCircle', component: icons.PlusCircle },
    { name: 'User', component: icons.User },
    { name: 'Settings', component: icons.Settings },
    { name: 'Search', component: icons.Search },
    { name: 'Menu', component: icons.Menu },
    { name: 'X', component: icons.X },
    { name: 'ChevronLeft', component: icons.ChevronLeft },
    { name: 'ChevronRight', component: icons.ChevronRight },
    { name: 'ChevronDown', component: icons.ChevronDown },
    { name: 'ChevronUp', component: icons.ChevronUp },
    { name: 'MoreHorizontal', component: icons.MoreHorizontal },
    { name: 'Film', component: icons.Film },
    { name: 'Tv', component: icons.Tv },
    { name: 'Clapperboard', component: icons.Clapperboard },
    { name: 'Library', component: icons.Library },
    { name: 'Home', component: icons.Home },
    { name: 'LogIn', component: icons.LogIn },
    { name: 'LogOut', component: icons.LogOut },
    { name: 'CreditCard', component: icons.CreditCard },
    { name: 'Bell', component: icons.Bell },
    { name: 'Shield', component: icons.Shield },
    { name: 'Mail', component: icons.Mail },
    { name: 'Phone', component: icons.Phone },
    { name: 'MapPin', component: icons.MapPin },
    { name: 'Calendar', component: icons.Calendar },
    { name: 'Clock', component: icons.Clock },
    { name: 'Trash2', component: icons.Trash2 },
    { name: 'Edit', component: icons.Edit },
    { name: 'Share2', component: icons.Share2 },
];


export default function DashboardIconsPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-headline font-bold">Icons</h1>
      <p className="text-muted-foreground">
        A selection of icons from the{' '}
        <a href="https://lucide.dev/icons/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
            Lucide
        </a>{' '}
        icon library.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {iconList.map(({name, component: Icon}) => (
            <Card key={name}>
                <CardHeader>
                    <CardTitle className="flex items-center gap-4">
                        <Icon className="w-8 h-8 text-primary" />
                        <span>{name}</span>
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <CodeBlock>
{`import { ${name} } from 'lucide-react';

<${name} />`}
                    </CodeBlock>
                </CardContent>
            </Card>
        ))}
      </div>
    </div>
  );
}
