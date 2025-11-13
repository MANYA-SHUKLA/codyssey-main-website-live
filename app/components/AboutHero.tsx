'use client';
import { motion } from 'framer-motion';
import './AboutHero.css';

const AboutHero = () => {
  return (
    <section className="about-hero">
      <div className="about-hero-background">
        <div className="hero-gradient-1"></div>
        <div className="hero-gradient-2"></div>
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
        </div>
      </div>
      
      <div className="about-hero-container">
        <motion.div
          className="about-hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="about-hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Crafting Digital
            <span className="gradient-text"> Excellence</span>
          </motion.h1>
          
          <motion.p
            className="about-hero-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            We are CODYSSEY - a passionate team of developers, designers, and innovators 
            dedicated to transforming ideas into exceptional digital experiences.
          </motion.p>
          
          <motion.div
            className="about-hero-stats"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="stat-item">
              <div className="stat-number">5+</div>
              <div className="stat-label">Projects Delivered</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">99%</div>
              <div className="stat-label">Client Satisfaction</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">2025</div>
              <div className="stat-label">Founded In</div>
            </div>
          </motion.div>
        </motion.div>
        
        <motion.div
          className="about-hero-visual"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="floating-element element-1">
            <div className="element-icon">🚀</div>
          </div>
          <div className="floating-element element-2">
            <div className="element-icon">💡</div>
          </div>
          <div className="floating-element element-3">
            <div className="element-icon">🌟</div>
          </div>
          <div className="main-visual-circle">
            <div className="circle-content">
              <div className="circle-text">CODYSSEY</div>
              <div className="circle-subtext">Since 2025</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutHero;