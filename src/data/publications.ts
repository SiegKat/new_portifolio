import { Publication } from '@/types';

export const publications: Publication[] = [
  {
    id: 'ml-cfd-acceleration',
    title: {
      pt: 'Aceleração de Simulações CFD Usando Redes Neurais Convolucionais',
      en: 'Accelerating CFD Simulations Using Convolutional Neural Networks'
    },
    authors: ['Thiago Sieg', 'Dr. Maria Silva', 'Prof. João Santos'],
    journal: 'Journal of Computational Physics',
    year: 2024,
    doi: '10.1016/j.jcp.2024.112345',
    pdfUrl: '/publications/ml-cfd-acceleration.pdf',
    abstract: {
      pt: 'Este trabalho apresenta uma nova abordagem para acelerar simulações de dinâmica de fluidos computacional (CFD) através do uso de redes neurais convolucionais. Nosso método híbrido combina solucionadores tradicionais com predições de IA, resultando em uma redução significativa no tempo computacional mantendo alta precisão.',
      en: 'This work presents a novel approach to accelerate computational fluid dynamics (CFD) simulations through the use of convolutional neural networks. Our hybrid method combines traditional solvers with AI predictions, resulting in significant computational time reduction while maintaining high accuracy.'
    }
  },
  {
    id: 'genetic-heat-exchanger',
    title: {
      pt: 'Otimização de Trocadores de Calor Usando Algoritmos Genéticos Multi-Objetivo',
      en: 'Heat Exchanger Optimization Using Multi-Objective Genetic Algorithms'
    },
    authors: ['Thiago Sieg', 'Prof. Ana Costa', 'Dr. Pedro Lima'],
    conference: 'International Conference on Heat and Mass Transfer',
    year: 2023,
    doi: '10.1007/s00231-023-03456-7',
    pdfUrl: '/publications/genetic-heat-exchanger.pdf',
    abstract: {
      pt: 'Apresentamos uma metodologia baseada em algoritmos genéticos para otimização multi-objetivo de trocadores de calor industriais. A abordagem considera simultaneamente eficiência térmica, perda de carga e custos de fabricação, proporcionando soluções de design otimizadas.',
      en: 'We present a genetic algorithm-based methodology for multi-objective optimization of industrial heat exchangers. The approach simultaneously considers thermal efficiency, pressure drop, and manufacturing costs, providing optimized design solutions.'
    }
  },
  {
    id: 'quantum-materials-prediction',
    title: {
      pt: 'Predição de Propriedades de Materiais Usando Computação Quântica Variacional',
      en: 'Materials Property Prediction Using Variational Quantum Computing'
    },
    authors: ['Thiago Sieg', 'Dr. Carlos Quantum', 'Prof. Lisa Anderson'],
    journal: 'Nature Quantum Information',
    year: 2024,
    doi: '10.1038/s41534-024-00789-1',
    pdfUrl: '/publications/quantum-materials.pdf',
    abstract: {
      pt: 'Exploramos o uso de algoritmos quânticos variacionais para predição de propriedades eletrônicas de materiais. Nossos resultados demonstram vantagem quântica potencial para sistemas moleculares complexos, abrindo novas possibilidades para descoberta de materiais.',
      en: 'We explore the use of variational quantum algorithms for predicting electronic properties of materials. Our results demonstrate potential quantum advantage for complex molecular systems, opening new possibilities for materials discovery.'
    }
  }
];

