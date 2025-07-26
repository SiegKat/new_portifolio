import { Github, Linkedin, Mail, Instagram, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/LanguageContext';
import { SITE_CONFIG } from '@/utils/constants';

export function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: t.common.github,
      url: SITE_CONFIG.social.github,
      icon: Github
    },
    {
      name: t.common.linkedin,
      url: SITE_CONFIG.social.linkedin,
      icon: Linkedin
    },
    {
      name: 'Instagram',
      url: SITE_CONFIG.social.instagram,
      icon: Instagram
    },
    {
      name: 'YouTube',
      url: SITE_CONFIG.social.youtube,
      icon: Youtube
    },
    {
      name: t.common.email,
      url: SITE_CONFIG.social.email,
      icon: Mail
    }
  ];

  return (
    <footer className="bg-background border-t mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Left side - Name and description */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-foreground mb-2">
              {SITE_CONFIG.name}
            </h3>
            <p className="text-sm text-muted-foreground max-w-md">
              {t.footer.description}
            </p>
          </div>

          {/* Right side - Social links */}
          <div className="flex items-center space-x-4">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Button
                  key={link.name}
                  variant="ghost"
                  size="sm"
                  asChild
                  className="h-10 w-10 p-0"
                >
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.name}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                </Button>
              );
            })}
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-8 pt-8 border-t text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} {SITE_CONFIG.name}. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}

