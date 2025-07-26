import { ExternalLink, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/LanguageContext';

export function RecentActivity() {
  const { language } = useLanguage();

  return (
    <div className="mb-12">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
        <h2 className="text-2xl font-bold">
          {language === 'pt' ? 'Atividade Recente' : 'Recent Activity'}
        </h2>
      </div>

      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-xl p-8 border border-blue-200/50 dark:border-blue-800/50">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Placeholder for project diagram/image */}
          <div className="flex-shrink-0">
            <div className="w-48 h-32 bg-gradient-to-br from-pink-100 to-purple-100 dark:from-pink-900/20 dark:to-purple-900/20 rounded-lg border-2 border-dashed border-pink-300 dark:border-pink-700 flex items-center justify-center">
              <Instagram className="h-12 w-12 text-pink-500" />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1">
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 text-sm rounded-full">
                {language === 'pt' ? 'divulgação científica' : 'science communication'}
              </span>
              <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 text-sm rounded-full">
                {language === 'pt' ? 'educação digital' : 'digital education'}
              </span>
            </div>

            <h3 className="text-xl font-bold mb-3">
              {language === 'pt' 
                ? 'Página de Notícias Científicas (crescimento exponencial)' 
                : 'Scientific News Page (exponential growth)'}
            </h3>

            <p className="text-muted-foreground mb-4 leading-relaxed">
              {language === 'pt'
                ? 'Uma plataforma de divulgação científica no Instagram que alcançou milhares de seguidores, focada em compartilhar conhecimento sobre IA com transparência e combater a desinformação. O projeto visa educar e inspirar pessoas a contribuírem para uma sociedade melhor através da ciência.'
                : 'A scientific communication platform on Instagram that reached thousands of followers, focused on sharing AI knowledge with transparency and fighting misinformation. The project aims to educate and inspire people to contribute to a better society through science.'}
            </p>

            <Button asChild className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white">
              <a 
                href="https://instagram.com/thiagosieg_ai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                {language === 'pt' ? 'Visitar @thiagosieg_ai' : 'Visit @thiagosieg_ai'}
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

