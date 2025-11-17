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
    overview: 'To build the most reliable fintech referral platform where anyone can earn by sharing verified financial product offers with transparent lead tracking, instant status updates, and guaranteed payouts. A platform that simplifies affiliate earnings for common users while giving financial partners high-quality, trackable conversions.',
    problem: 'Existing referral and lead-generation platforms make the earning process confusing and unreliable. Users rarely know whether their leads are being tracked correctly, when payouts will arrive, or why a lead was rejected. Admin teams also struggle with poor tools, causing delays, manual errors, and lack of transparency. Overall, the experience lacks trust, clarity, and control.',
    approach: 'CampaignWala delivers a transparent, end-to-end referral and lead-management ecosystem designed to regain user trust, simplify admin operations, and increase actual conversions. The platform ensures every referral is trackable, every lead is accountable, and every payout is smooth, fast, and fully verified. With a structured workflow and strong backend automation, users and admins both experience complete clarity.',
    image: 'https://cdn.prod.website-files.com/62722382edf1ccb5a513cf38/656eb1504bc9f3abbb5b1e2a_what-defines-a-successful-sales-campaign-key-elements-to-consider.png',
    industry: 'Marketing Technology',
    duration: '8 weeks',
    team: ['Project Manager', 'UI/UX Designer', '2 Frontend Developers', 'Backend Developer'],
    results: {
  "Conversion Speed": "40–60% Faster",
  "User Earnings": "2x–3x Higher",
  "Admin Workload": "50–70% Lower",
  "Lead Accuracy": "90%+ Error Reduction",
  "Payout Processing": "3 times Faster",
  "User Retention": "45–60% Boost"
},
 techStack: {
  frontend: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Recharts'],
  backend: ['Node.js', 'Express.js', 'MongoDB', 'Mongoose'],
  tools: ['Figma', 'JWT Auth', 'Bcrypt', 'AWS S3', 'ExcelJS', 'Render', 'Vercel', 'Hostinger']
},
    challenges: [
      'No clear tracking system for leads or reasons for rejection',
      'Delayed or unreliable payout processes',
      'Weak admin tools for managing offers, users, and withdrawals',
      'Lack of verified, trackable referral links leading to lost conversions'
    ],
    solutions: [
      'Unique trackable referral links with real-time lead status updates',
      'Instant wallet updates and smooth, compliant withdrawal flow',
      'Robust admin panel for managing users, offers, leads, and payouts',
      'Complete KYC and verification system to ensure secure, trust-based operations'
    ],
    gallery: [
      'https://cdn.prod.website-files.com/62722382edf1ccb5a513cf38/656eb1504bc9f3abbb5b1e2a_what-defines-a-successful-sales-campaign-key-elements-to-consider.png',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop'
    ],
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
  }
];