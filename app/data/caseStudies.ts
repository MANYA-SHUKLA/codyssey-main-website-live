export const caseStudies = [
  {
    id: 'healthcare-dashboard',
    title: 'Healthcare Management Dashboard',
    description: 'A comprehensive healthcare management system with patient tracking, appointment scheduling, and analytics.',
    overview: 'Developed a modern healthcare management platform that streamlined patient care, improved operational efficiency, and provided real-time analytics for healthcare providers.',
    problem: 'The client faced challenges with manual patient record management, inefficient appointment scheduling, and lack of real-time insights into clinic operations. This led to long wait times, administrative overhead, and difficulty in tracking patient outcomes.',
    approach: 'We adopted a user-centered design approach, conducting extensive research with healthcare professionals to understand their workflow. The solution was built with scalability in mind, using microservices architecture and real-time data processing.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=500&fit=crop',
    industry: 'Healthcare',
    duration: '8 weeks',
    team: ['Project Manager', 'UI/UX Designer', 'Frontend Developer', 'Backend Developer'],
    results: {
      efficiency: '+300%',
      uptime: '99.9%',
      patients: '+200 Patients/Day',
      satisfaction: '95% Patient Satisfaction'
    },
    techStack: {
      frontend: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
      backend: ['Node.js', 'Express.js', 'MongoDB'],
      tools: ['Figma', 'Docker', 'AWS', 'Jest']
    },
    challenges: [
      'Ensuring HIPAA compliance and data security',
      'Integrating with existing legacy systems',
      'Real-time data synchronization across multiple clinics'
    ],
    solutions: [
      'Implemented end-to-end encryption and secure authentication',
      'Developed custom API bridges for legacy system integration',
      'Used WebSocket for real-time updates and notifications'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=400&h=300&fit=crop'
    ],
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  },
  {
    id: 'ecommerce-platform',
    title: 'Modern E-Commerce Platform',
    description: 'A scalable e-commerce solution with real-time inventory management and secure payment integration.',
    overview: 'Built a high-performance e-commerce platform that handles thousands of daily transactions with seamless user experience and robust backend operations.',
    problem: 'The existing platform suffered from slow loading times, poor mobile experience, and limited scalability during peak shopping seasons. Cart abandonment rates were high due to complex checkout processes.',
    approach: 'We implemented a mobile-first design with progressive web app features. The architecture was optimized for performance with server-side rendering, CDN integration, and efficient database queries.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop',
    industry: 'E-commerce',
    duration: '12 weeks',
    team: ['Project Manager', 'UI/UX Designer', '2 Frontend Developers', 'Backend Developer', 'QA Engineer'],
    results: {
      sales: '+200%',
      conversion: '+45%',
      loadTime: '2s Load Time',
      mobile: '60% Mobile Traffic'
    },
    techStack: {
      frontend: ['Next.js', 'React', 'TypeScript', 'Styled Components'],
      backend: ['Node.js', 'Express.js', 'PostgreSQL', 'Redis'],
      tools: ['Figma', 'Stripe', 'AWS', 'Cypress']
    },
    challenges: [
      'Handling high traffic during flash sales',
      'Integrating multiple payment gateways',
      'Real-time inventory synchronization'
    ],
    solutions: [
      'Implemented caching strategies and load balancing',
      'Built unified payment processing layer',
      'Used event-driven architecture for inventory updates'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop'
    ],
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
  }
  // Add more case studies as needed
];