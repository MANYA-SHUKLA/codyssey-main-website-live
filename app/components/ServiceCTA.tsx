'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import './ServiceCTA.css';

const ServiceCTA = () => {
  return (
    <section className="service-cta-section">
      <div className="service-cta-background">
        <div className="cta-gradient-1"></div>
        <div className="cta-gradient-2"></div>
        <div className="floating-elements">
          <div className="element element-1">🚀</div>
          <div className="element element-2">💡</div>
          <div className="element element-3">🌟</div>
          <div className="element element-4">⚡</div>
        </div>
      </div>
      
      <div className="container">
        <motion.div
          className="service-cta-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="cta-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Let's Build Something
            <span className="gradient-text"> Great Together</span>
          </motion.h2>
          
          <motion.p
            className="cta-subtitle"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Ready to transform your ideas into exceptional digital experiences? 
            Let's discuss your project and create something amazing.
          </motion.p>
          
          <motion.div
            className="cta-buttons"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link href="/contact">
              <motion.button
                className="cta-button primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your Project
              </motion.button>
            </Link>
            <Link href="/contact">
              <motion.button
                className="cta-button secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Schedule Consultation
              </motion.button>
            </Link>
          </motion.div>
          
          <motion.div
            className="cta-features"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="feature">
              <div className="feature-icon">✓</div>
              <span>Free Initial Consultation</span>
            </div>
            <div className="feature">
              <div className="feature-icon">✓</div>
              <span>Detailed Project Proposal</span>
            </div>
            <div className="feature">
              <div className="feature-icon">✓</div>
              <span>Transparent Pricing</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceCTA;