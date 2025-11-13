'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import './ServicesList.css';

const ServicesList = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      id: 1,
      title: 'Website Development',
      icon: '🌐',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop',
      description: 'Custom, responsive websites built with modern technologies to establish your digital presence.',
      features: [
        'Responsive Design',
        'SEO Optimized',
        'Fast Loading',
        'Cross-Browser Compatible',
        'Mobile-First Approach'
      ],
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      id: 2,
      title: 'E-Commerce Development',
      icon: '🛒',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop',
      description: 'Complete online store solutions with secure payment integration and inventory management.',
      features: [
        'Payment Gateway Integration',
        'Inventory Management',
        'Order Processing',
        'Customer Accounts',
        'Analytics Dashboard'
      ],
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
      id: 3,
      title: 'Web Applications / SaaS',
      icon: '⚡',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
      description: 'Scalable web applications and Software-as-a-Service platforms for business automation.',
      features: [
        'Scalable Architecture',
        'User Authentication',
        'Real-time Features',
        'API Integration',
        'Cloud Deployment'
      ],
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    },
    {
      id: 4,
      title: 'UI/UX Design',
      icon: '🎨',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=300&fit=crop',
      description: 'User-centered design that creates intuitive, engaging, and beautiful digital experiences.',
      features: [
        'User Research',
        'Wireframing',
        'Prototyping',
        'Visual Design',
        'Usability Testing'
      ],
      gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
    },
    {
      id: 5,
      title: 'Portfolio Websites',
      icon: '📱',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=300&fit=crop',
      description: 'Stunning portfolio websites to showcase your work and attract potential clients.',
      features: [
        'Gallery Layouts',
        'Project Showcases',
        'Contact Integration',
        'Blog Integration',
        'Social Media Links'
      ],
      gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
    },
    {
      id: 6,
      title: 'Business Websites',
      icon: '🏢',
      image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=500&h=300&fit=crop',
      description: 'Professional business websites that build credibility and drive customer engagement.',
      features: [
        'Service Pages',
        'Team Profiles',
        'Testimonials',
        'Contact Forms',
        'Live Chat Integration'
      ],
      gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)'
    },
    {
      id: 7,
      title: 'API Development',
      icon: '🔧',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&h=300&fit=crop',
      description: 'Robust RESTful and GraphQL APIs to power your applications and enable integrations.',
      features: [
        'RESTful & GraphQL',
        'Authentication',
        'Rate Limiting',
        'Documentation',
        'Testing & Debugging'
      ],
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      id: 8,
      title: 'Maintenance & Optimization',
      icon: '🔄',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop',
      description: 'Ongoing support, maintenance, and optimization to keep your applications running smoothly.',
      features: [
        'Performance Optimization',
        'Security Updates',
        'Bug Fixes',
        'Feature Updates',
        '24/7 Monitoring'
      ],
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    }
  ];

  return (
    <section id="services-list" className="services-list-section">
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
            Comprehensive digital solutions tailored to your business needs
          </p>
        </motion.div>

        <div className="services-container">
          <div className="services-sidebar">
            {services.map((service, index) => (
              <motion.button
                key={service.id}
                className={`service-tab ${activeService === index ? 'active' : ''}`}
                onClick={() => setActiveService(index)}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ x: 10 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="service-tab-content">
                  <div 
                    className="service-tab-icon"
                    style={{ background: service.gradient }}
                  >
                    {service.icon}
                  </div>
                  <span>{service.title}</span>
                </div>
              </motion.button>
            ))}
          </div>

          <div className="service-details">
            <motion.div
              key={activeService}
              className="service-detail-content"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="service-image">
                <img src={services[activeService].image} alt={services[activeService].title} />
                <div 
                  className="service-overlay"
                  style={{ background: services[activeService].gradient }}
                ></div>
              </div>
              
              <div className="service-info">
                <h3 className="service-detail-title">{services[activeService].title}</h3>
                <p className="service-detail-description">
                  {services[activeService].description}
                </p>
                
                <div className="service-features">
                  <h4>Key Features:</h4>
                  <div className="features-grid">
                    {services[activeService].features.map((feature, index) => (
                      <motion.div
                        key={feature}
                        className="feature-item"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                      >
                        <div className="feature-check">✓</div>
                        <span>{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
                
                <motion.button
                  className="service-cta"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get This Service
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesList;