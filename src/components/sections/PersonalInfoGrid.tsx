import { Code, Zap, Coffee } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export function PersonalInfoGrid() {
  const { language } = useLanguage();

  const infoCards = [
    {
      id: 'tech',
      title: language === 'pt' ? 'Expertise Técnica' : 'Tech Expertise',
      icon: Code,
      content: language === 'pt' 
        ? 'Desenvolvimento full-stack, algoritmos de machine learning, sistemas de visão computacional, e aplicações de LLM para soluções práticas.'
        : 'Full-stack development, machine learning algorithms, computer vision systems, and LLM applications for practical solutions.'
    },
    {
      id: 'research',
      title: language === 'pt' ? 'Pesquisa' : 'Research',
      icon: Zap,
      content: language === 'pt'
        ? 'Aplicações de IA em energia limpa, células de combustível, eletrolisadores e sistemas de hidrogênio para um futuro sustentável.'
        : 'AI applications in clean energy, fuel cells, electrolyzers and hydrogen systems for a sustainable future.'
    },
    {
      id: 'freetime',
      title: language === 'pt' ? 'No meu tempo livre' : 'In my free time',
      icon: Coffee,
      content: language === 'pt'
        ? 'Criador de conteúdo científico no Instagram, educador digital, leitor ávido e entusiasta de xadrez online (principalmente blitz).'
        : 'Scientific content creator on Instagram, digital educator, avid reader and online chess enthusiast (mostly blitz).'
    }
  ];

  return (
    <div className="grid md:grid-cols-3 gap-6 mb-12">
      {infoCards.map((card) => {
        const IconComponent = card.icon;
        return (
          <div
            key={card.id}
            className="bg-muted/30 p-6 rounded-lg border border-border/50 hover:border-border transition-colors"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <IconComponent className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-semibold text-lg">{card.title}</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">{card.content}</p>
          </div>
        );
      })}
    </div>
  );
}

