import { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 'science-communication-platform',
    title: {
      pt: 'Plataforma de Divulgação Científica',
      en: 'Science Communication Platform'
    },
    description: {
      pt: 'Desenvolvimento de uma plataforma digital para compartilhamento de conhecimento científico em IA com foco na transparência e combate à desinformação. Inclui página de notícias no Instagram que alcançou milhares de seguidores, promovendo educação científica de qualidade e inspirando pessoas a contribuírem para uma sociedade melhor.',
      en: 'Development of a digital platform for sharing scientific knowledge in AI with focus on transparency and fighting misinformation. Includes an Instagram news page that reached thousands of followers, promoting quality scientific education and inspiring people to contribute to a better society.'
    },
    tags: ['Social Media', 'Science Communication', 'Content Creation', 'Digital Education', 'Instagram'],
    githubUrl: 'https://github.com/thiagosieg/science-platform',
    demoUrl: 'https://instagram.com/thiagosieg_ai',
    featured: true,
    imageUrl: '/projects/science-communication.jpg'
  },
  {
    id: 'social-impact-software',
    title: {
      pt: 'Software de Impacto Social',
      en: 'Social Impact Software'
    },
    description: {
      pt: 'Desenvolvimento de uma aplicação que utiliza IA para resolver problemas sociais reais, focando em acessibilidade e impacto positivo na vida das pessoas. O projeto visa democratizar o acesso à tecnologia e promover inclusão digital, mantendo os valores de integridade e transparência.',
      en: 'Development of an application that uses AI to solve real social problems, focusing on accessibility and positive impact on people\'s lives. The project aims to democratize access to technology and promote digital inclusion, maintaining values of integrity and transparency.'
    },
    tags: ['Social Impact', 'AI Applications', 'Accessibility', 'React', 'Python', 'Machine Learning'],
    githubUrl: 'https://github.com/thiagosieg/social-impact-ai',
    featured: true,
    imageUrl: '/projects/social-impact.jpg'
  },
  {
    id: 'ai-clean-energy',
    title: {
      pt: 'IA para Sistemas de Energia Limpa',
      en: 'AI for Clean Energy Systems'
    },
    description: {
      pt: 'Aplicação de machine learning em células de combustível e eletrolisadores para desenvolvimento de sistemas energéticos mais eficientes e sustentáveis. O projeto foca no aproveitamento de recursos subutilizados como o hidrogênio, contribuindo para um futuro mais sustentável.',
      en: 'Application of machine learning in fuel cells and electrolyzers for developing more efficient and sustainable energy systems. The project focuses on leveraging underutilized resources like hydrogen, contributing to a more sustainable future.'
    },
    tags: ['Machine Learning', 'Clean Energy', 'Hydrogen', 'Sustainability', 'Research'],
    githubUrl: 'https://github.com/thiagosieg/ai-clean-energy',
    featured: true,
    imageUrl: '/projects/clean-energy.jpg'
  },
  {
    id: 'data-analysis-toolkit',
    title: {
      pt: 'Toolkit de Análise de Dados Experimentais',
      en: 'Experimental Data Analysis Toolkit'
    },
    description: {
      pt: 'Conjunto de ferramentas Python para análise automatizada de dados experimentais em física. Inclui detecção de outliers, ajuste de curvas não-lineares e visualização interativa de resultados.',
      en: 'Python toolkit for automated analysis of experimental physics data. Includes outlier detection, non-linear curve fitting, and interactive results visualization.'
    },
    tags: ['Data Analysis', 'Python', 'Pandas', 'Matplotlib', 'SciPy'],
    githubUrl: 'https://github.com/thiagosieg/data-toolkit',
    demoUrl: 'https://thiagosieg-data-toolkit.streamlit.app',
    featured: false,
    imageUrl: '/projects/data-toolkit.jpg'
  }
];

