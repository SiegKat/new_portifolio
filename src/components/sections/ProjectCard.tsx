import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Project } from '@/types';
import { useLanguage } from '@/context/LanguageContext';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { language, t } = useLanguage();

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <Card className="h-full flex flex-col hover:shadow-xl transition-shadow duration-300 border-0 shadow-md">
        {project.imageUrl && (
          <motion.div 
            className="aspect-video bg-muted rounded-t-lg overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-full h-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
              <span className="text-muted-foreground text-sm">
                {project.title[language]}
              </span>
            </div>
          </motion.div>
        )}
        
        <CardHeader className="flex-none">
          <div className="flex items-start justify-between gap-2">
            <CardTitle className="text-lg leading-tight">
              {project.title[language]}
            </CardTitle>
            {project.featured && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                <Badge variant="secondary" className="shrink-0">
                  Featured
                </Badge>
              </motion.div>
            )}
          </div>
        </CardHeader>

        <CardContent className="flex-1 flex flex-col">
          <CardDescription className="flex-1 mb-4 text-sm leading-relaxed">
            {project.description[language]}
          </CardDescription>

          {/* Tags */}
          <div className="flex flex-wrap gap-1 mb-4">
            {project.tags.map((tag, index) => (
              <motion.div
                key={tag}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
              >
                <Badge variant="outline" className="text-xs">
                  {tag}
                </Badge>
              </motion.div>
            ))}
          </div>

          {/* Links */}
          <div className="flex gap-2 mt-auto">
            {project.githubUrl && (
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
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    {t.common.github}
                  </a>
                </Button>
              </motion.div>
            )}
            {project.demoUrl && (
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
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
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

