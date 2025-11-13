'use client';
import { motion } from 'framer-motion';
import './ServiceTools.css';

const ServiceTools = () => {
  const toolCategories = [
    {
      category: 'Design & Prototyping',
      icon: '🎨',
      tools: [
        { name: 'Figma', description: 'Collaborative interface design tool', usage: 'UI/UX Design, Prototyping' },
        { name: 'Adobe XD', description: 'Vector-based design tool for web and mobile', usage: 'Wireframing, Prototyping' },
        { name: 'Sketch', description: 'Digital design toolkit', usage: 'Interface Design' },
        { name: 'InVision', description: 'Digital product design platform', usage: 'Prototyping, Collaboration' }
      ],
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      category: 'Frontend Development',
      icon: '💻',
      tools: [
        { name: 'Next.js', description: 'React framework for production', usage: 'SSR, Static Sites' },
        { name: 'React', description: 'JavaScript library for UI', usage: 'Component-based Development' },
        { name: 'TypeScript', description: 'Typed JavaScript superset', usage: 'Type Safety, Scalability' },
        { name: 'Tailwind CSS', description: 'Utility-first CSS framework', usage: 'Rapid UI Development' }
      ],
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
      category: 'Backend Development',
      icon: '⚙️',
      tools: [
        { name: 'Node.js', description: 'JavaScript runtime environment', usage: 'Server-side Development' },
        { name: 'Express.js', description: 'Web application framework', usage: 'API Development, Routing' },
        { name: 'MongoDB', description: 'NoSQL database', usage: 'Data Storage, Scalability' },
        { name: 'PostgreSQL', description: 'Relational database', usage: 'Complex Queries, ACID Compliance' }
      ],
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    },
    {
      category: 'DevOps & Deployment',
      icon: '🚀',
      tools: [
        { name: 'AWS', description: 'Cloud computing platform', usage: 'Hosting, Storage, CDN' },
        { name: 'Docker', description: 'Containerization platform', usage: 'Environment Consistency' },
        { name: 'Vercel', description: 'Cloud platform for frontends', usage: 'Static Site Deployment' },
        { name: 'GitHub Actions', description: 'CI/CD automation', usage: 'Automated Testing & Deployment' }
      ],
      gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
    },
    {
      category: 'Testing & Quality',
      icon: '🧪',
      tools: [
        { name: 'Jest', description: 'JavaScript testing framework', usage: 'Unit Testing, Snapshot Testing' },
        { name: 'Cypress', description: 'End-to-end testing framework', usage: 'Browser Testing' },
        { name: 'Storybook', description: 'UI component development', usage: 'Component Testing, Documentation' },
        { name: 'Postman', description: 'API development environment', usage: 'API Testing, Documentation' }
      ],
      gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
    },
    {
      category: 'Additional Technologies',
      icon: '🔧',
      tools: [
        { name: 'Redis', description: 'In-memory data structure store', usage: 'Caching, Session Storage' },
        { name: 'Prisma', description: 'Next-generation ORM', usage: 'Database Management' },
        { name: 'GraphQL', description: 'Query language for APIs', usage: 'Efficient Data Fetching' },
        { name: 'Socket.io', description: 'Real-time communication', usage: 'WebSockets, Live Features' }
      ],
      gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)'
    }
  ];

  return (
    <section id="service-tools" className="service-tools-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Technologies We Use</h2>
          <p className="section-subtitle">
            Cutting-edge tools and technologies to build modern, scalable solutions
          </p>
        </motion.div>

        <div className="tools-grid">
          {toolCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              className="tool-category"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <div className="category-header">
                <div 
                  className="category-icon"
                  style={{ background: category.gradient }}
                >
                  {category.icon}
                </div>
                <h3 className="category-title">{category.category}</h3>
              </div>
              
              <div className="tools-list">
                {category.tools.map((tool, toolIndex) => (
                  <motion.div
                    key={tool.name}
                    className="tool-item"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: toolIndex * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                  >
                    <div className="tool-info">
                      <h4 className="tool-name">{tool.name}</h4>
                      <p className="tool-description">{tool.description}</p>
                      <div className="tool-usage">
                        <span className="usage-label">Usage:</span>
                        <span className="usage-value">{tool.usage}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="tools-summary"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="summary-content">
            <h3>Why These Technologies?</h3>
            <p>
              We carefully select our technology stack based on performance, scalability, 
              and maintainability. Each tool is chosen to ensure we deliver fast, secure, 
              and future-proof solutions for our clients.
            </p>
            <div className="tech-stats">
              <div className="tech-stat">
                <div className="stat-number">15+</div>
                <div className="stat-label">Technologies</div>
              </div>
              <div className="tech-stat">
                <div className="stat-number">100%</div>
                <div className="stat-label">Modern Stack</div>
              </div>
              <div className="tech-stat">
                <div className="stat-number">24/7</div>
                <div className="stat-label">Support Ready</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceTools;