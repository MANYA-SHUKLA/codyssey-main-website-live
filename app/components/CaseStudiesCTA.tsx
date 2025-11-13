'use client';
import { motion } from 'framer-motion';
import './CaseStudiesCTA.css';

const CaseStudiesCTA = () => {
  return (
    <section className="case-studies-cta-section">
      <div className="case-studies-cta-background">
        <div className="cta-gradient-1"></div>
        <div className="cta-gradient-2"></div>
        <div className="floating-elements">
          <div className="element element-1">💡</div>
          <div className="element element-2">🚀</div>
          <div className="element element-3">🌟</div>
          <div className="element element-4">⚡</div>
        </div>
      </div>
      
      <div className="container">
        <motion.div
          className="case-studies-cta-content"
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
            Have an idea?
            <span className="gradient-text"> Start your journey with us.</span>
          </motion.h2>
          
          <motion.p
            className="cta-subtitle"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Ready to create your own success story? Let's collaborate to bring your vision to life 
            with innovative solutions and exceptional results.
          </motion.p>
          
          <motion.div
            className="cta-buttons"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.button
              className="cta-button primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Project
            </motion.button>
            <motion.button
              className="cta-button secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Our Services
            </motion.button>
          </motion.div>
          
          <motion.div
            className="cta-features"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="feature">
              <div className="feature-icon">✓</div>
              <span>Free Project Consultation</span>
            </div>
            <div className="feature">
              <div className="feature-icon">✓</div>
              <span>Transparent Process</span>
            </div>
            <div className="feature">
              <div className="feature-icon">✓</div>
              <span>Dedicated Team</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudiesCTA;