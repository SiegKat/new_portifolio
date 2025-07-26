import { Languages } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useLanguage } from '@/context/LanguageContext';

export function LanguageToggle() {
  const { language, setLanguage, t } = useLanguage();

  const languages = [
    { code: 'pt' as const, name: t.language.portuguese, flag: '🇧🇷' },
    { code: 'en' as const, name: t.language.english, flag: '🇺🇸' },
  ];

  const currentLanguage = languages.find(lang => lang.code === language);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="h-9 px-2"
          title={`${t.language.current}: ${currentLanguage?.name}`}
        >
          <Languages className="h-4 w-4 mr-1" />
          <span className="text-sm font-medium">
            {currentLanguage?.flag}
          </span>
          <span className="sr-only">
            {t.language.toggle}
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => setLanguage(lang.code)}
            className={language === lang.code ? 'bg-accent' : ''}
          >
            <span className="mr-2">{lang.flag}</span>
            {lang.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

