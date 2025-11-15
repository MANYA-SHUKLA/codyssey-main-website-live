'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import './Hero.css';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-background">
        <div className="hero-gradient"></div>
        <div className="hero-particles">
          {[...Array(50)].map((_, i) => (
            <div key={i} className="particle"></div>
          ))}
        </div>
      </div>
      
      <div className="hero-container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Transform Your Digital
            <span className="gradient-text"> Presence</span>
          </motion.h1>
          
          <motion.p 
            className="hero-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            We craft exceptional web experiences that drive results. From stunning designs 
            to powerful functionality, we bring your vision to life with cutting-edge technology.
          </motion.p>
          
          <motion.div 
            className="hero-buttons"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link href="/contact">
              <motion.button 
                className="hero-cta-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your Journey
              </motion.button>
            </Link>
            <Link href="/case-studies">
              <motion.button 
                className="hero-cta-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Our Work
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="floating-card card-1">
            <div className="card-content">
              <div className="card-icon">⚡</div>
              <h4>Fast Performance</h4>
            </div>
          </div>
          <div className="floating-card card-2">
            <div className="card-content">
              <div className="card-icon">🎨</div>
              <h4>Modern Design</h4>
            </div>
          </div>
          <div className="floating-card card-3">
            <div className="card-content">
              <div className="card-icon">🔒</div>
              <h4>Secure & Reliable</h4>
            </div>
          </div>
          <div className="main-visual">
            <div className="code-window">
              <div className="window-header">
                <div className="window-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div className="code-content">
                <div className="code-line">
                  <span className="code-keyword">const</span>
                  <span className="code-variable"> digitalJourney</span>
                  <span className="code-operator"> = </span>
                  <span className="code-string">"Amazing"</span>
                </div>
                <div className="code-line">
                  <span className="code-keyword">await</span>
                  <span className="code-function"> startJourney</span>
                  <span className="code-punctuation">()</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      
      <motion.div 
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <div className="scroll-arrow"></div>
      </motion.div>
    </section>
  );
};

export default Hero;