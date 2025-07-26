import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/LanguageContext';

export function TLDRSection() {
  const [isExpanded, setIsExpanded] = useState(false);
  const { t, language } = useLanguage();

  const currentActivities = {
    pt: [
      { text: 'cursando', link: '#', highlight: 'Mestrado em IA' },
      { text: 'pesquisando', link: '#', highlight: 'IA para Energia Limpa' },
      { text: 'desenvolvendo', link: '#', highlight: 'Software de Impacto Social' },
      { text: 'criando conteúdo em', link: 'https://instagram.com/thiagosieg_ai', highlight: '@thiagosieg_ai' },
      { text: 'e', link: '#', highlight: 'lendo' }
    ],
    en: [
      { text: 'studying', link: '#', highlight: 'AI Master\'s Degree' },
      { text: 'researching', link: '#', highlight: 'AI for Clean Energy' },
      { text: 'developing', link: '#', highlight: 'Social Impact Software' },
      { text: 'creating content on', link: 'https://instagram.com/thiagosieg_ai', highlight: '@thiagosieg_ai' },
      { text: 'and', link: '#', highlight: 'reading' }
    ]
  };

  const pastActivities = {
    pt: [
      { text: 'trabalhando com', link: '#', highlight: 'simulações CFD' },
      { text: 'otimizando', link: '#', highlight: 'sistemas térmicos' },
      { text: 'e jogando xadrez competitivamente (embora ainda jogue muito blitz)' }
    ],
    en: [
      { text: 'working with', link: '#', highlight: 'CFD simulations' },
      { text: 'optimizing', link: '#', highlight: 'thermal systems' },
      { text: 'and playing competitive chess (although I still play a lot of blitz)' }
    ]
  };

  const activities = currentActivities[language];
  const pastActs = pastActivities[language];

  return (
    <div className="mb-12">
      <h2 className="text-4xl font-bold mb-6">TL;DR</h2>
      
      <div className="space-y-4">
        <div>
          <p className="text-lg">
            <strong>{language === 'pt' ? 'Atualmente eu estou...' : 'Currently I am...'}</strong>
          </p>
          <p className="text-base text-muted-foreground mt-2">
            {activities.map((activity, index) => (
              <span key={index}>
                {activity.text}{' '}
                {activity.link !== '#' ? (
                  <a 
                    href={activity.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 underline font-medium"
                  >
                    {activity.highlight}
                  </a>
                ) : (
                  <span className="text-blue-600 font-medium">{activity.highlight}</span>
                )}
                {index < activities.length - 1 && ', '}
              </span>
            ))}
          </p>
        </div>

        {isExpanded && (
          <div>
            <p className="text-lg">
              <strong>{language === 'pt' ? 'Não tão atualmente, eu estava...' : 'Not so currently, I was...'}</strong>
            </p>
            <p className="text-base text-muted-foreground mt-2">
              {pastActs.map((activity, index) => (
                <span key={index}>
                  {activity.text}{' '}
                  {activity.highlight && (
                    <span className="text-blue-600 font-medium">{activity.highlight}</span>
                  )}
                  {index < pastActs.length - 1 && ', '}
                </span>
              ))}
            </p>
          </div>
        )}

        <div className="flex items-center gap-2 mt-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-blue-600 hover:text-blue-800 p-0 h-auto font-normal"
          >
            {isExpanded ? (
              <>
                {language === 'pt' ? 'Menos' : 'Less'}
                <ChevronUp className="ml-1 h-4 w-4" />
              </>
            ) : (
              <>
                {language === 'pt' ? 'Mais' : 'More'}
                <ChevronDown className="ml-1 h-4 w-4" />
              </>
            )}
          </Button>
        </div>
      </div>

      {/* GitHub-style contribution chart placeholder */}
      <div className="mt-8 p-4 bg-muted/30 rounded-lg">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
            <span className="text-white text-xs font-bold">T</span>
          </div>
          <span className="text-sm font-medium">thiagosieg</span>
        </div>
        
        {/* Simple contribution grid */}
        <div className="grid grid-cols-12 gap-1">
          {Array.from({ length: 84 }, (_, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-sm ${
                Math.random() > 0.7 
                  ? 'bg-green-500' 
                  : Math.random() > 0.5 
                  ? 'bg-green-300' 
                  : 'bg-gray-200 dark:bg-gray-700'
              }`}
            />
          ))}
        </div>
        
        <div className="flex justify-between items-center mt-2 text-xs text-muted-foreground">
          <span>{language === 'pt' ? 'Menos' : 'Less'}</span>
          <div className="flex gap-1">
            <div className="w-3 h-3 bg-gray-200 dark:bg-gray-700 rounded-sm"></div>
            <div className="w-3 h-3 bg-green-200 rounded-sm"></div>
            <div className="w-3 h-3 bg-green-300 rounded-sm"></div>
            <div className="w-3 h-3 bg-green-500 rounded-sm"></div>
          </div>
          <span>{language === 'pt' ? 'Mais' : 'More'}</span>
        </div>
      </div>
    </div>
  );
}

