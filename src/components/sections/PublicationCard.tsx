import { motion } from 'framer-motion';
import { ExternalLink, FileText, Users, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Publication } from '@/types';
import { useLanguage } from '@/context/LanguageContext';

interface PublicationCardProps {
  publication: Publication;
}

export function PublicationCard({ publication }: PublicationCardProps) {
  const { language } = useLanguage();

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <Card className="h-full flex flex-col hover:shadow-xl transition-shadow duration-300 border-0 shadow-md">
        <CardHeader className="flex-none">
          <div className="flex items-start justify-between gap-2">
            <CardTitle className="text-lg leading-tight">
              {publication.title[language]}
            </CardTitle>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.1 }}
            >
              <Badge variant="outline" className="shrink-0">
                {publication.year}
              </Badge>
            </motion.div>
          </div>
          
          {/* Authors */}
          <motion.div 
            className="flex items-center gap-2 text-sm text-muted-foreground"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Users className="w-4 h-4" />
            <span>{publication.authors.join(', ')}</span>
          </motion.div>

          {/* Venue */}
          <motion.div 
            className="flex items-center gap-2 text-sm text-muted-foreground"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Calendar className="w-4 h-4" />
            <span>
              {publication.journal || publication.conference}
            </span>
          </motion.div>
        </CardHeader>

        <CardContent className="flex-1 flex flex-col">
          <CardDescription className="flex-1 mb-4 text-sm leading-relaxed">
            {publication.abstract[language]}
          </CardDescription>

          {/* Links */}
          <div className="flex gap-2 mt-auto">
            {publication.doi && (
              <motion.div
                className="flex-1"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className="w-full"
                >
                  <a
                    href={`https://doi.org/${publication.doi}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    DOI
                  </a>
                </Button>
              </motion.div>
            )}
            {publication.pdfUrl && (
              <motion.div
                className="flex-1"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className="w-full"
                >
                  <a
                    href={publication.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FileText className="w-4 h-4 mr-2" />
                    PDF
                  </a>
                </Button>
              </motion.div>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

