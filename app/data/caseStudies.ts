interface CaseStudy {
  id: string;
  title: string;
  description: string;
  overview: string;
  problem: string;
  approach: string;
  image: string;
  industry: string;
  duration: string;
  team: string[];
  results: Record<string, string>;
  techStack: {
    frontend: string[];
    backend: string[];
    tools: string[];
  };
  challenges: string[];
  solutions: string[];
  gallery: string[];
  gradient: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'foodiess-cafe-website',
    title: 'Foodiess Cafe Website',
    description: 'A comprehensive website for Foodiess Cafe with online booking, menu management, and customer reviews.',
    overview: 'Developed a modern, responsive website for Foodiess Cafe that transformed their digital presence and streamlined their operations. The platform integrates online booking, menu management, and customer review systems.',
    problem: 'Foodiess Cafe faced challenges with manual booking systems, outdated menu updates, and lack of customer engagement. Their previous website was not mobile-friendly and had poor user experience, leading to lost reservations and customer dissatisfaction.',
    approach: 'We implemented a user-centered design approach with a mobile-first strategy. The solution included a custom CMS for easy menu management, real-time booking system, and integrated review platform to enhance customer engagement.',
    image: 'https://imgmediagumlet.lbb.in/media/2024/11/672b4ee404855664de195884_1730891492481.jpg',
    industry: 'Food & Beverage',
    duration: '2 weeks',
    team: ['Project Manager', 'UI/UX Designer', 'Frontend Developer', 'Backend Developer'],
    results: {
      'Efficiency Improvement': '+300%',
      'System Uptime': '99.9%',
      'Daily Orders': '+100 Orders/Day',
      'Customer Satisfaction': '95%'
    },
    techStack: {
      frontend: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
      backend: ['Node.js', 'Express.js', 'MongoDB'],
      tools: ['Figma', 'Vercel']
    },
    challenges: [
      'Integrating real-time booking system with existing POS',
      'Creating mobile-responsive design for food ordering',
      'Implementing secure payment gateway integration',
      'Optimizing website performance for mobile users'
    ],
    solutions: [
      'Developed custom API integration with their POS system',
      'Implemented progressive web app features for mobile users',
      'Integrated Stripe for secure payment processing',
      'Used image optimization and lazy loading for performance'
    ],
    gallery: [
      'https://imgmediagumlet.lbb.in/media/2024/11/672b4ee404855664de195884_1730891492481.jpg',
      'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop'
    ],
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  },
  {
    id: 'campaign-wala-project',
    title: 'Campaign Wala Project',
    description: 'Developed a comprehensive campaign management system with real-time analytics and reporting.',
    overview: 'Built a sophisticated campaign management platform that enables businesses to create, manage, and track marketing campaigns with real-time analytics and comprehensive reporting features.',
    problem: 'Businesses struggled with fragmented campaign management across multiple platforms, lack of real-time analytics, and inefficient reporting systems. This led to poor campaign optimization and wasted marketing budgets.',
    approach: 'We created a unified campaign management platform with drag-and-drop campaign builder, real-time analytics dashboard, and automated reporting system. The platform integrates with multiple marketing channels and provides actionable insights.',
    image: 'https://cdn.prod.website-files.com/62722382edf1ccb5a513cf38/656eb1504bc9f3abbb5b1e2a_what-defines-a-successful-sales-campaign-key-elements-to-consider.png',
    industry: 'Marketing Technology',
    duration: '8 weeks',
    team: ['Project Manager', 'UI/UX Designer', '2 Frontend Developers', 'Backend Developer'],
    results: {
      'Efficiency Improvement': '+300%',
      'System Uptime': '99.9%',
      'Campaigns Managed': '+300 Campaigns/Month',
      'ROI Improvement': '+45%'
    },
    techStack: {
      frontend: ['Next.js', 'React', 'TypeScript', 'Chart.js'],
      backend: ['Node.js', 'Express.js', 'PostgreSQL'],
      tools: ['Figma', 'Docker', 'AWS']
    },
    challenges: [
      'Handling real-time data from multiple marketing platforms',
      'Creating intuitive drag-and-drop campaign builder',
      'Ensuring data security and user privacy',
      'Scalable architecture for growing user base'
    ],
    solutions: [
      'Implemented WebSocket for real-time data updates',
      'Built custom drag-and-drop interface with React DnD',
      'Used encryption and secure API protocols',
      'Designed microservices architecture for scalability'
    ],
    gallery: [
      'https://cdn.prod.website-files.com/62722382edf1ccb5a513cf38/656eb1504bc9f3abbb5b1e2a_what-defines-a-successful-sales-campaign-key-elements-to-consider.png',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop'
    ],
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
  }
];