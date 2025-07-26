import { Moon, Sun, Monitor } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useTheme } from '@/context/ThemeContext';

interface ThemeToggleProps {
  language: 'pt' | 'en';
}

export function ThemeToggle({ language }: ThemeToggleProps) {
  const { theme, setTheme, resolvedTheme } = useTheme();

  const themeLabels = {
    light: { pt: 'Claro', en: 'Light' },
    dark: { pt: 'Escuro', en: 'Dark' },
    system: { pt: 'Sistema', en: 'System' }
  };

  const currentThemeLabel = {
    pt: `Tema atual: ${themeLabels[theme][language]}`,
    en: `Current theme: ${themeLabels[theme][language]}`
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="h-9 w-9 p-0"
          title={currentThemeLabel[language]}
        >
          {resolvedTheme === 'dark' ? (
            <Moon className="h-4 w-4" />
          ) : (
            <Sun className="h-4 w-4" />
          )}
          <span className="sr-only">
            {language === 'pt' ? 'Alternar tema' : 'Toggle theme'}
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme('light')}>
          <Sun className="mr-2 h-4 w-4" />
          {themeLabels.light[language]}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('dark')}>
          <Moon className="mr-2 h-4 w-4" />
          {themeLabels.dark[language]}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('system')}>
          <Monitor className="mr-2 h-4 w-4" />
          {themeLabels.system[language]}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

