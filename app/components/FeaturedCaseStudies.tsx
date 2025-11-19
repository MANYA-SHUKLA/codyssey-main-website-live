'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import './FeaturedCaseStudies.css';

const FeaturedCaseStudies = () => {
  const caseStudies = [
    {
      id: 'foodiess-cafe-website',
      title: 'Foodiess Cafe Website',
      description: 'A comprehensive website for Foodiess Cafe with online booking, menu management, and customer reviews.',
      image: 'https://www.foodiescafe.shop/cozy-interior.jpg',
      category: 'Cafes',
      results: ['+300% Efficiency', '99.9% Uptime', '+200 Orders/Day'],
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      link: 'https://www.foodiescafe.shop/'
    },
    {
      id: 'campaign-wala-project',
      title: 'Campaign Wala Project',
      description: 'Developed a comprehensive campaign management system with real-time analytics and reporting.',
      image: 'casestudies/CW.jpeg',
      category: 'SaaS Application',
      results: ['+300% Efficiency', '99.9% Uptime'],
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      link: 'https://www.campaignwala.in/'
    },
    {
  id: 'telewave-services-project',
  title: 'Telewave Services – Business Website',
  description: 'A professional business website built for a communication and telecalling talent company.',
  image: 'https://www.flatworldsolutions.com/featured-images/success-story-telecalling-lead-generation-services.jpg',
  category: 'Business Services',
  results: ['+200% Engagement', 'Faster Lead Inquiry Flow'],
  gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', // Option B
  link: 'https://telewave-services-live-website.vercel.app/'
}
    // Add more case studies as needed

  ];

  return (
    <section id="featured-case-studies" className="featured-case-studies-section">
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
            Discover how we've helped businesses transform their digital presence
          </p>
        </motion.div>

        <div className="case-studies-grid">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              className="case-study-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="case-study-image">
                <img src={study.image} alt={study.title} />
                <div className="case-study-overlay">
                  <div className="case-study-category">{study.category}</div>
                </div>
              </div>
              
              <div className="case-study-content">
                <h3 className="case-study-title">{study.title}</h3>
                <p className="case-study-description">{study.description}</p>
                
                <div className="case-study-results">
                  {study.results.map((result, idx) => (
                    <span key={idx} className="result-tag" style={{ background: study.gradient }}>
                      {result}
                    </span>
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
          className="case-studies-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <Link href="/case-studies">
            <motion.button
              className="view-all-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Case Studies
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedCaseStudies;