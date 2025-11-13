'use client';
import { motion } from 'framer-motion';
import './ContactHero.css';

const ContactHero = () => {
  return (
    <section className="contact-hero">
      <div className="contact-hero-background">
        <div className="hero-gradient-1"></div>
        <div className="hero-gradient-2"></div>
        <div className="floating-shapes">
          {[...Array(8)].map((_, i) => (
            <div key={i} className={`shape shape-${i + 1}`}></div>
          ))}
        </div>
      </div>
      
      <div className="contact-hero-container">
        <motion.div
          className="contact-hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="contact-hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Start Your
            <span className="gradient-text"> Journey</span>
          </motion.h1>
          
          <motion.p
            className="contact-hero-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Ready to transform your ideas into exceptional digital experiences? 
            Let's discuss your project and create something amazing together.
          </motion.p>
          
          <motion.div
            className="contact-hero-stats"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="stat-item">
              <div className="stat-number">24h</div>
              <div className="stat-label">Response Time</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100%</div>
              <div className="stat-label">Free Consultation</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">5+</div>
              <div className="stat-label">Projects Delivered</div>
            </div>
          </motion.div>
        </motion.div>
        
        <motion.div
          className="contact-hero-visual"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="contact-visual">
            <div className="message-bubble message-1">
              <div className="bubble-content">
                <div className="bubble-avatar">👋</div>
                <div className="bubble-text">Hello! Let's discuss your project</div>
              </div>
            </div>
            <div className="message-bubble message-2">
              <div className="bubble-content">
                <div className="bubble-text">We can help bring your ideas to life</div>
                <div className="bubble-avatar">💡</div>
              </div>
            </div>
            <div className="message-bubble message-3">
              <div className="bubble-content">
                <div className="bubble-avatar">🚀</div>
                <div className="bubble-text">Ready to start your journey?</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactHero;