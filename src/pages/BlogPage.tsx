import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { PageTransition } from '@/components/common/PageTransition';

export function BlogPage() {
  const { t } = useLanguage();

  return (
    <PageTransition>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="text-center mb-16">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-foreground mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {t.blog.title}
          </motion.h1>
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {t.blog.subtitle}
          </motion.p>
        </div>

        {/* Blog posts will be populated here */}
        <motion.div 
          className="text-center py-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-muted-foreground">
            {t.blog.comingSoon}
          </p>
        </motion.div>
      </div>
    </PageTransition>
  );
}

