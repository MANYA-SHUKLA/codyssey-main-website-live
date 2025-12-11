'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';
import './CaseStudiesGrid.css';

const CaseStudiesGrid = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const caseStudies = [
    {
      id: 'foodiess-cafe-website',
      title: 'Foodiess Cafe Website',
      description: 'A comprehensive website for Foodiess Cafe with online booking, menu management, and customer reviews.',
      image: 'https://www.foodiescafe.shop/cozy-interior.jpg',
      industry: 'Cafes',
      duration: '2 weeks',
      results: ['+300% Efficiency', '99.9% Uptime', '+200 Orders/Day'],
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      link: 'https://www.foodiescafe.shop/'
    },
    {
      id: 'campaign-wala-project',
      title: 'Campaign Wala Project',
      description: 'Developed a comprehensive campaign management system with real-time analytics and reporting.',
      image: 'casestudies/CW.jpeg',
      industry: 'SaaS Application',
      duration: '7 weeks',
      results: ['+300% Efficiency', '99.9% Uptime'],
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      link: 'https://www.campaignwala.in/'
    },
    {
      id: 'telewave-services-project',
      title: 'Telewave Services – Business Website',
      description: 'A modern business website for a communication and telecalling talent company.',
      image: 'https://www.flatworldsolutions.com/featured-images/success-story-telecalling-lead-generation-services.jpg',
      industry: 'Business Services',
      duration: '1 week',
      results: ['+200% Engagement', 'Optimised Inquiry Flow'],
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      link: 'https://www.telewaveservices.com'
    },
    {
      id: 'freelancer-wala-project',
      title: 'Freelancer Wala – Work-From-Home Telecalling Platform',
      description: 'A high-conversion telecalling recruitment and training platform empowering India with flexible work-from-home opportunities.',
      image: 'https://i.pinimg.com/564x/d5/e8/aa/d5e8aa2eeb313af69c4bd95ea293be29.jpg',
      industry: 'Work-From-Home & Telecalling',
      duration: '1 week',
      results: ['+70% Registration Growth', '+55% User Engagement', 'Strong Trust Uplift', 'Faster Onboarding'],
      gradient: 'linear-gradient(135deg, #ff6a88 0%, #ff9a44 100%)',
      link: 'https://freelancerwala.com/'
    }
  ];

  const industries = ['all', 'Cafes', 'SaaS Application', 'Business Services'];

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
    <div className="case-study-image">
      <img src={study.image} alt={study.title} />
      <div className="case-study-overlay" style={{ background: study.gradient }}></div>
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
          <span key={idx} className="result-tag">{result}</span>
        ))}
      </div>

      
      <div className="case-study-buttons">
        <Link href={`/case-studies/${study.id}`} className="case-study-cta">
          <span className="cta-text">View Case Study</span>
          <span className="cta-arrow">→</span>
        </Link>

        {study.link && (
          <a
            href={study.link}
            target="_blank"
            rel="noopener noreferrer"
            className="case-study-external-link"
          >
            Visit Website →
          </a>
        )}
      </div>
    </div>
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
          <Link href="/contact">
            <motion.button
              className="cta-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us for More Examples
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudiesGrid;