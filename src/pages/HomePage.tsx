import { PageTransition } from '@/components/common/PageTransition';
import { StaggerContainer } from '@/components/common/StaggerContainer';
import { TLDRSection } from '@/components/sections/TLDRSection';
import { ImportantDocuments } from '@/components/sections/ImportantDocuments';
import { PersonalInfoGrid } from '@/components/sections/PersonalInfoGrid';
import { RecentActivity } from '@/components/sections/RecentActivity';
import { ProjectCard } from '@/components/sections/ProjectCard';
import { PublicationCard } from '@/components/sections/PublicationCard';
import { Button } from '@/components/ui/button';
import { ArrowRight, MapPin, Calendar } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { projects } from '@/data/projects';
import { publications } from '@/data/publications';

export function HomePage() {
  const { t, language } = useLanguage();

  const featuredProjects = projects.filter(project => project.featured).slice(0, 2);
  const recentPublications = publications.slice(0, 2);

  return (
    <PageTransition>
      <div className="min-h-screen">
        {/* Container centralizado com padding lateral */}
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          {/* Header/Hero Section */}
          <div className="relative mb-16">
            <div className="flex flex-col lg:flex-row items-start gap-8 mb-12">
              {/* Profile Image */}
              <div className="flex-shrink-0">
                <div className="w-32 h-32 lg:w-48 lg:h-48 bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl border-4 border-white dark:border-gray-800 shadow-xl flex items-center justify-center">
                  <div className="text-4xl lg:text-6xl font-bold text-blue-600 dark:text-blue-400">TS</div>
                </div>
              </div>

              {/* Name and Info */}
              <div className="flex-1">
                <h1 className="text-4xl lg:text-5xl font-bold mb-2">{t.home.title}</h1>
                <p className="text-xl text-muted-foreground mb-4">{t.home.subtitle}</p>
                
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>IA & Física</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Engenharia</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    <span>{language === 'pt' ? 'Brasil' : 'Brazil'}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{language === 'pt' ? 'Mestrando' : 'Master\'s Student'}</span>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed max-w-2xl">
                  {t.home.description}
                </p>
              </div>
            </div>
          </div>

          {/* TL;DR Section */}
          <StaggerContainer>
            <TLDRSection />
          </StaggerContainer>

          {/* Important Documents */}
          <StaggerContainer>
            <ImportantDocuments />
          </StaggerContainer>
        </div>

        {/* Main Hero Image Section - Full width */}
        <StaggerContainer>
          <div className="relative mb-16">
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 h-64 lg:h-96 flex items-center justify-center relative">
              {/* Placeholder for workspace image */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20"></div>
              <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-6 lg:px-8">
                <h2 className="text-3xl lg:text-5xl font-bold mb-4">
                  {language === 'pt' ? 'Pesquisador. Desenvolvedor. Educador.' : 'Researcher. Developer. Educator.'}
                </h2>
                <p className="text-lg lg:text-xl opacity-90 max-w-2xl mx-auto">
                  {t.home.aboutText}
                </p>
              </div>
            </div>
          </div>
        </StaggerContainer>

        {/* Container centralizado para o resto do conteúdo */}
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          {/* Personal Info Grid */}
          <StaggerContainer>
            <PersonalInfoGrid />
          </StaggerContainer>

          {/* Recent Activity */}
          <StaggerContainer>
            <RecentActivity />
          </StaggerContainer>

          {/* Work Experience Section */}
          <StaggerContainer>
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8">
                {language === 'pt' ? 'Experiência Acadêmica' : 'Academic Experience'}
              </h2>
              
              <div className="space-y-8">
                <div className="border-l-4 border-blue-500 pl-6">
                  <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-2">
                    <h3 className="text-xl font-semibold">
                      {language === 'pt' ? 'Universidade Federal' : 'Federal University'}
                    </h3>
                    <span className="text-sm text-muted-foreground">
                      {language === 'pt' ? '2023 - Presente' : '2023 - Present'}
                    </span>
                  </div>
                  <p className="text-blue-600 font-medium mb-3">
                    {language === 'pt' ? 'Mestrando em Inteligência Artificial' : 'AI Master\'s Student'}
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    {language === 'pt'
                      ? 'Pesquisa focada em aplicações de machine learning em células de combustível e eletrolisadores, desenvolvendo sistemas energéticos mais eficientes e sustentáveis.'
                      : 'Research focused on machine learning applications in fuel cells and electrolyzers, developing more efficient and sustainable energy systems.'}
                  </p>
                </div>

                <div className="border-l-4 border-green-500 pl-6">
                  <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-2">
                    <h3 className="text-xl font-semibold">
                      {language === 'pt' ? 'Universidade Federal' : 'Federal University'}
                    </h3>
                    <span className="text-sm text-muted-foreground">
                      {language === 'pt' ? '2018 - 2022' : '2018 - 2022'}
                    </span>
                  </div>
                  <p className="text-green-600 font-medium mb-3">
                    {language === 'pt' ? 'Bacharel em Engenharia Mecânica' : 'Bachelor in Mechanical Engineering'}
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    {language === 'pt'
                      ? 'Formação sólida em física computacional, simulações numéricas e análise de sistemas térmicos. Base fundamental para a transição para IA aplicada.'
                      : 'Solid background in computational physics, numerical simulations and thermal systems analysis. Fundamental foundation for the transition to applied AI.'}
                  </p>
                </div>
              </div>
            </div>
          </StaggerContainer>

          {/* Featured Projects */}
          <StaggerContainer>
            <div className="mb-16">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold">{t.projects.title}</h2>
                <Button variant="ghost" asChild>
                  <a href="/projects" className="flex items-center gap-2">
                    {language === 'pt' ? 'Ver todos' : 'View all'}
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {featuredProjects.map((project, index) => (
                  <ProjectCard key={project.id} project={project} index={index} />
                ))}
              </div>
            </div>
          </StaggerContainer>

          {/* Recent Publications */}
          <StaggerContainer>
            <div className="mb-16">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold">{t.publications.title}</h2>
                <Button variant="ghost" asChild>
                  <a href="/publications" className="flex items-center gap-2">
                    {language === 'pt' ? 'Ver todas' : 'View all'}
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
              </div>
              
              <div className="space-y-6">
                {recentPublications.map((publication, index) => (
                  <PublicationCard key={publication.id} publication={publication} index={index} />
                ))}
              </div>
            </div>
          </StaggerContainer>

          {/* What Drives Me Section */}
          <StaggerContainer>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-2xl p-8 border border-blue-200/50 dark:border-blue-800/50 mb-16">
              <h2 className="text-2xl font-bold mb-6">
                {language === 'pt' ? 'O que me Move' : 'What Drives Me'}
              </h2>
              
              <blockquote className="text-lg italic text-muted-foreground mb-6 border-l-4 border-blue-500 pl-6">
                {language === 'pt'
                  ? '"Abordo cada desafio com dedicação ao impacto positivo, transparência, e um profundo respeito pela nuance da pesquisa científica."'
                  : '"I approach every challenge with a dedication to positive impact, transparency, and a deep respect for the nuance of scientific research."'}
              </blockquote>
              
              <p className="text-muted-foreground leading-relaxed">
                {language === 'pt'
                  ? 'Esta mentalidade me guiou no desenvolvimento de software que impacta positivamente a vida das pessoas, na criação de conteúdo educacional que combate a desinformação, e na pesquisa de tecnologias sustentáveis. Estou constantemente trabalhando em direção aos meus objetivos de longo prazo de avançar minha educação, expandir minhas capacidades de pesquisa, e criar tecnologia que faça uma diferença significativa.'
                  : 'This mindset has guided me through developing software that positively impacts people\'s lives, creating educational content that fights misinformation, and researching sustainable technologies. I\'m constantly working toward my long-term goals of advancing my education, expanding my research capabilities, and creating technology that makes a meaningful difference.'}
              </p>
            </div>
          </StaggerContainer>
        </div>
      </div>
    </PageTransition>
  );
}

