import { FileText, Download, ExternalLink, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/LanguageContext';

export function ImportantDocuments() {
  const { language } = useLanguage();

  const documents = [
    {
      id: 'transcript',
      title: language === 'pt' ? 'Histórico Acadêmico' : 'Academic Transcript',
      color: 'bg-red-500 hover:bg-red-600',
      icon: GraduationCap,
      url: '#'
    },
    {
      id: 'resume',
      title: language === 'pt' ? 'Currículo' : 'Resume',
      color: 'bg-blue-500 hover:bg-blue-600',
      icon: FileText,
      url: '#'
    },
    {
      id: 'portfolio',
      title: language === 'pt' ? 'Portfólio' : 'Portfolio',
      color: 'bg-green-500 hover:bg-green-600',
      icon: ExternalLink,
      url: '#'
    },
    {
      id: 'research',
      title: language === 'pt' ? 'Pesquisas' : 'Research',
      color: 'bg-purple-500 hover:bg-purple-600',
      icon: Download,
      url: '#'
    }
  ];

  return (
    <div className="mb-12">
      <h3 className="text-xl font-semibold mb-4">
        {language === 'pt' ? 'Documentos Importantes' : 'Important Documents'}
      </h3>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {documents.map((doc) => {
          const IconComponent = doc.icon;
          return (
            <Button
              key={doc.id}
              variant="outline"
              className={`${doc.color} text-white border-0 h-auto p-4 flex flex-col items-center gap-2 transition-colors`}
              asChild
            >
              <a href={doc.url} target="_blank" rel="noopener noreferrer">
                <IconComponent className="h-6 w-6" />
                <span className="text-sm font-medium text-center">{doc.title}</span>
              </a>
            </Button>
          );
        })}
      </div>
    </div>
  );
}

