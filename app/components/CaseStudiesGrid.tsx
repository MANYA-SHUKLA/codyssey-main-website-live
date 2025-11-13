'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';
import './CaseStudiesGrid.css';

const CaseStudiesGrid = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const caseStudies = [
    {
      id: 'healthcare-dashboard',
      title: 'Healthcare Management Dashboard',
      description: 'A comprehensive healthcare management system with patient tracking, appointment scheduling, and analytics.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=500&h=400&fit=crop',
      industry: 'Healthcare',
      duration: '8 weeks',
      results: ['+300% Efficiency', '99.9% Uptime', '+200 Patients/Day'],
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      id: 'ecommerce-platform',
      title: 'Modern E-Commerce Platform',
      description: 'A scalable e-commerce solution with real-time inventory management and secure payment integration.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=400&fit=crop',
      industry: 'E-commerce',
      duration: '12 weeks',
      results: ['+200% Sales', '+45% Conversion', '2s Load Time'],
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
      id: 'fitness-mobile-app',
      title: 'Fitness Tracking Mobile App',
      description: 'A cross-platform fitness app with workout plans, progress tracking, and social features.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=400&fit=crop',
      industry: 'Fitness',
      duration: '10 weeks',
      results: ['+500K Users', '4.8★ Rating', '+40% Engagement'],
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    },
    {
      id: 'education-platform',
      title: 'Online Learning Platform',
      description: 'An interactive education platform with video courses, quizzes, and progress tracking.',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=500&h=400&fit=crop',
      industry: 'Education',
      duration: '14 weeks',
      results: ['+50 Courses', '10K+ Students', '95% Completion'],
      gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
    },
    {
      id: 'fintech-dashboard',
      title: 'FinTech Analytics Dashboard',
      description: 'A real-time financial analytics dashboard with investment tracking and market insights.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=400&fit=crop',
      industry: 'FinTech',
      duration: '16 weeks',
      results: ['+150% Revenue', 'Real-time Data', '99.95% Uptime'],
      gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
    },
    {
      id: 'real-estate-portal',
      title: 'Real Estate Portal',
      description: 'A property listing platform with advanced search, virtual tours, and agent management.',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=500&h=400&fit=crop',
      industry: 'Real Estate',
      duration: '9 weeks',
      results: ['+300 Listings', '2M+ Views', '+75% Leads'],
      gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)'
    }
  ];

  const industries = ['all', 'Healthcare', 'E-commerce', 'Fitness', 'Education', 'FinTech', 'Real Estate'];

  const filteredStudies = activeFilter === 'all' 
    ? caseStudies 
    : caseStudies.filter(study => study.industry === activeFilter);

  return (
    <section id="case-studies-grid" className="case-studies-grid-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Featured Case Studies</h2>
          <p className="section-subtitle">
            Explore our successful projects across various industries
          </p>
        </motion.div>

        <motion.div
          className="filter-tabs"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {industries.map((industry, index) => (
            <motion.button
              key={industry}
              className={`filter-tab ${activeFilter === industry ? 'active' : ''}`}
              onClick={() => setActiveFilter(industry)}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {industry === 'all' ? 'All Projects' : industry}
            </motion.button>
          ))}
        </motion.div>

        <div className="case-studies-grid">
          {filteredStudies.map((study, index) => (
            <motion.div
              key={study.id}
              className="case-study-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <Link href={`/case-studies/${study.id}`} className="case-study-link">
                <div className="case-study-image">
                  <img src={study.image} alt={study.title} />
                  <div 
                    className="case-study-overlay"
                    style={{ background: study.gradient }}
                  ></div>
                  <div className="case-study-industry">{study.industry}</div>
                </div>
                
                <div className="case-study-content">
                  <h3 className="case-study-title">{study.title}</h3>
                  <p className="case-study-description">{study.description}</p>
                  
                  <div className="case-study-meta">
                    <div className="meta-item">
                      <span className="meta-label">Duration:</span>
                      <span className="meta-value">{study.duration}</span>
                    </div>
                  </div>
                  
                  <div className="case-study-results">
                    {study.results.map((result, idx) => (
                      <span key={idx} className="result-tag">
                        {result}
                      </span>
                    ))}
                  </div>
                  
                  <div className="case-study-cta">
                    <span className="cta-text">View Case Study</span>
                    <span className="cta-arrow">→</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="grid-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p>Interested in seeing more of our work?</p>
          <motion.button
            className="cta-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Us for More Examples
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudiesGrid;