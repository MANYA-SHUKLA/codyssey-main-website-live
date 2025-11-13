'use client';
import { motion } from 'framer-motion';
import './ServiceUseCases.css';

const ServiceUseCases = () => {
  const useCases = [
    {
      service: 'Website Development',
      cases: [
        {
          title: 'Startup Launch',
          description: 'Rapid website development for startups to establish online presence and attract investors.',
          icon: '🚀',
          gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
        },
        {
          title: 'Corporate Website',
          description: 'Professional corporate websites with company information, services, and contact details.',
          icon: '🏢',
          gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
        }
      ]
    },
    {
      service: 'E-Commerce Development',
      cases: [
        {
          title: 'Online Retail Store',
          description: 'Complete e-commerce solutions for retail businesses with inventory and order management.',
          icon: '🛍️',
          gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
        },
        {
          title: 'Digital Products',
          description: 'Platforms for selling digital products like courses, ebooks, and software.',
          icon: '📦',
          gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
        }
      ]
    },
    {
      service: 'Web Applications / SaaS',
      cases: [
        {
          title: 'Business Automation',
          description: 'Custom SaaS applications to automate business processes and improve efficiency.',
          icon: '⚙️',
          gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
        },
        {
          title: 'CRM Systems',
          description: 'Customer relationship management systems to manage client interactions and data.',
          icon: '👥',
          gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)'
        }
      ]
    },
    {
      service: 'UI/UX Design',
      cases: [
        {
          title: 'App Redesign',
          description: 'Modernizing existing applications with improved user experience and interface design.',
          icon: '🎨',
          gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
        },
        {
          title: 'Design System',
          description: 'Creating comprehensive design systems for consistent brand experience across platforms.',
          icon: '📐',
          gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
        }
      ]
    }
  ];

  return (
    <section id="use-cases" className="use-cases-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Service Use Cases</h2>
          <p className="section-subtitle">
            Real-world applications of our services across various industries
          </p>
        </motion.div>

        <div className="use-cases-grid">
          {useCases.map((serviceGroup, groupIndex) => (
            <motion.div
              key={serviceGroup.service}
              className="service-group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: groupIndex * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="service-group-title">{serviceGroup.service}</h3>
              <div className="cases-grid">
                {serviceGroup.cases.map((useCase, caseIndex) => (
                  <motion.div
                    key={useCase.title}
                    className="use-case-card"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: caseIndex * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5, transition: { duration: 0.3 } }}
                  >
                    <div 
                      className="use-case-icon"
                      style={{ background: useCase.gradient }}
                    >
                      {useCase.icon}
                    </div>
                    <h4>{useCase.title}</h4>
                    <p>{useCase.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="use-cases-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <h3>Have a Specific Use Case in Mind?</h3>
          <p>We specialize in custom solutions for unique business requirements.</p>
          <motion.button
            className="cta-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Discuss Your Project
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceUseCases;