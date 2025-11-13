'use client';
import { motion } from 'framer-motion';
import './CaseStudiesHero.css';

const CaseStudiesHero = () => {
  return (
    <section className="case-studies-hero">
      <div className="case-studies-hero-background">
        <div className="hero-gradient-1"></div>
        <div className="hero-gradient-2"></div>
        <div className="floating-shapes">
          {[...Array(8)].map((_, i) => (
            <div key={i} className={`shape shape-${i + 1}`}></div>
          ))}
        </div>
      </div>
      
      <div className="case-studies-hero-container">
        <motion.div
          className="case-studies-hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="case-studies-hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Our
            <span className="gradient-text"> Success Stories</span>
          </motion.h1>
          
          <motion.p
            className="case-studies-hero-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Discover how we've helped businesses transform their digital presence 
            and achieve remarkable results through innovative solutions.
          </motion.p>
          
          <motion.div
            className="case-studies-hero-stats"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="stat-item">
              <div className="stat-number">5+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100%</div>
              <div className="stat-label">Client Satisfaction</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">8+</div>
              <div className="stat-label">Industries Served</div>
            </div>
          </motion.div>
        </motion.div>
        
        <motion.div
          className="case-studies-hero-visual"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="project-showcase">
            <div className="project-card project-1">
              <div className="project-preview">
                <div className="browser-window">
                  <div className="browser-header">
                    <div className="browser-dots">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                  <div className="browser-content">
                    <div className="content-grid">
                      <div className="content-block"></div>
                      <div className="content-block"></div>
                      <div className="content-block"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="project-card project-2">
              <div className="project-preview">
                <div className="mobile-window">
                  <div className="mobile-header"></div>
                  <div className="mobile-content">
                    <div className="mobile-list">
                      <div className="list-item"></div>
                      <div className="list-item"></div>
                      <div className="list-item"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="project-card project-3">
              <div className="project-preview">
                <div className="dashboard-window">
                  <div className="dashboard-header">
                    <div className="dashboard-nav"></div>
                  </div>
                  <div className="dashboard-content">
                    <div className="metric-cards">
                      <div className="metric-card"></div>
                      <div className="metric-card"></div>
                      <div className="metric-card"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudiesHero;