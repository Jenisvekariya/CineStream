'use client';

import { Paintbrush, Palette, Type, Monitor, Sun, Moon } from 'lucide-react';
import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Label } from './ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import { themes, fonts } from '@/lib/themes';
import { useThemeConfig } from './theme-provider';

export function ThemeCustomizer() {
  const { setTheme: setMode, resolvedTheme: mode } = useTheme();
  const { theme, setTheme, font, setFont } = useThemeConfig();

  const currentTheme = themes.find((t) => t.name === theme);
  const currentFont = fonts.find((f) => f.name === font);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="fixed bottom-4 right-4 z-50 h-12 w-12 rounded-full shadow-lg"
        >
          <Paintbrush className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent className="w-[340px]">
        <SheetHeader className="border-b pb-4">
          <SheetTitle>Customize Theme</SheetTitle>
        </SheetHeader>
        <div className="space-y-6 py-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Palette className="h-5 w-5 text-muted-foreground" />
              <Label>Color Theme</Label>
            </div>
            <Select value={theme} onValueChange={setTheme}>
              <SelectTrigger>
                <SelectValue placeholder="Select a color theme" />
              </SelectTrigger>
              <SelectContent>
                {themes.map((themeOption) => (
                  <SelectItem key={themeOption.name} value={themeOption.name}>
                    <div className="flex items-center gap-2">
                      <div
                        className="h-4 w-4 rounded-full border"
                        style={{ backgroundColor: `hsl(${themeOption.primary})` }}
                      />
                      <span>{themeOption.label}</span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Type className="h-5 w-5 text-muted-foreground" />
              <Label>Font Theme</Label>
            </div>
            <Select value={font} onValueChange={setFont}>
              <SelectTrigger>
                <SelectValue placeholder="Select a font theme" />
              </SelectTrigger>
              <SelectContent>
                {fonts.map((fontOption) => (
                  <SelectItem key={fontOption.name} value={fontOption.name}>
                    {fontOption.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Monitor className="h-5 w-5 text-muted-foreground" />
              <Label>Mode</Label>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <Button
                variant={mode === 'light' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setMode('light')}
              >
                <Sun className="mr-2 h-4 w-4" />
                Light
              </Button>
              <Button
                variant={mode === 'dark' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setMode('dark')}
              >
                <Moon className="mr-2 h-4 w-4" />
                Dark
              </Button>
              <Button
                variant={'system' === mode ? 'default' : 'outline'}
                size="sm"
                onClick={() => setMode('system')}
              >
                <Monitor className="mr-2 h-4 w-4" />
                System
              </Button>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
