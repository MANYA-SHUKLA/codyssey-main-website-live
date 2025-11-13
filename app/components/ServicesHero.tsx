'use client';
import { motion } from 'framer-motion';
import './ServicesHero.css';

const ServicesHero = () => {
  return (
    <section className="services-hero">
      <div className="services-hero-background">
        <div className="hero-gradient-1"></div>
        <div className="hero-gradient-2"></div>
        <div className="floating-shapes">
          {[...Array(6)].map((_, i) => (
            <div key={i} className={`shape shape-${i + 1}`}></div>
          ))}
        </div>
      </div>
      
      <div className="services-hero-container">
        <motion.div
          className="services-hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="services-hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Comprehensive
            <span className="gradient-text"> Digital Solutions</span>
          </motion.h1>
          
          <motion.p
            className="services-hero-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            From stunning websites to powerful web applications, we provide end-to-end 
            digital solutions that drive growth and transform businesses.
          </motion.p>
          
          <motion.div
            className="services-hero-stats"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="stat-item">
              <div className="stat-number">8+</div>
              <div className="stat-label">Services</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">15+</div>
              <div className="stat-label">Technologies</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100%</div>
              <div className="stat-label">Custom Solutions</div>
            </div>
          </motion.div>
        </motion.div>
        
        <motion.div
          className="services-hero-visual"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="service-icons-grid">
            <div className="service-icon">🌐</div>
            <div className="service-icon">🛒</div>
            <div className="service-icon">⚡</div>
            <div className="service-icon">🎨</div>
            <div className="service-icon">📱</div>
            <div className="service-icon">🔧</div>
            <div className="service-icon">🚀</div>
            <div className="service-icon">🔄</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesHero;