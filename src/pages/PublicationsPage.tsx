import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { PublicationCard } from '@/components/sections/PublicationCard';
import { PageTransition } from '@/components/common/PageTransition';
import { StaggerContainer, StaggerItem } from '@/components/common/StaggerContainer';
import { publications } from '@/data/publications';

export function PublicationsPage() {
  const { t } = useLanguage();

  // Sort publications by year (newest first)
  const sortedPublications = [...publications].sort((a, b) => b.year - a.year);

  return (
    <PageTransition>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-foreground mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {t.publications.title}
          </motion.h1>
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {t.publications.subtitle}
          </motion.p>
        </div>

        {/* Publications Grid */}
        {sortedPublications.length > 0 ? (
          <StaggerContainer className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {sortedPublications.map((publication) => (
              <StaggerItem key={publication.id}>
                <PublicationCard publication={publication} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        ) : (
          <motion.div 
            className="text-center py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-muted-foreground">
              {t.publications.comingSoon}
            </p>
          </motion.div>
        )}
      </div>
    </PageTransition>
  );
}

