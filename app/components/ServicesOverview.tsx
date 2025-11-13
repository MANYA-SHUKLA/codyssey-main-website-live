'use client';
import { motion } from 'framer-motion';
import './ServicesOverview.css';

const ServicesOverview = () => {
  const services = [
    {
      icon: '💻',
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies like Next.js, React, and TypeScript.',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      icon: '📱',
      title: 'Mobile Apps',
      description: 'Cross-platform mobile applications that deliver seamless user experiences across all devices.',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
      icon: '🛠️',
      title: 'API Development',
      description: 'Robust RESTful and GraphQL APIs with proper documentation and security measures.',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    },
    {
      icon: '☁️',
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and deployment solutions using AWS, Docker, and more.',
      gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
    },
    {
      icon: '🎨',
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive designs that enhance user engagement and drive conversions.',
      gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
    },
    {
      icon: '🔍',
      title: 'SEO Optimization',
      description: 'Search engine optimization to improve your visibility and drive organic traffic.',
      gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)'
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services-overview" className="services-overview-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            Comprehensive web solutions tailored to your business needs
          </p>
        </motion.div>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="service-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div 
                className="service-icon"
                style={{ background: service.gradient }}
              >
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <div className="service-hover-effect"></div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="services-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="explore-button"
            onClick={() => scrollToSection('services')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Full Services →
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesOverview;