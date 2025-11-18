'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import './CaseStudyDetail.css';

interface CaseStudy {
  id: string;
  title: string;
  description: string;
  overview: string;
  problem: string;
  approach: string;
  image: string;
  industry: string;
  duration: string;
  team: string[];
  results: Record<string, string>;
  techStack: {
    frontend: string[];
    backend: string[];
    tools: string[];
  };
  challenges: string[];
  solutions: string[];
  gallery: string[];
  gradient: string;
}

interface CaseStudyDetailProps {
  study: CaseStudy;
}

const CaseStudyDetail = ({ study }: CaseStudyDetailProps) => {
  return (
    <div className="case-study-detail">
      {/* Hero Section */}
      <section className="case-study-hero">
        <div className="case-study-hero-background">
          <div className="hero-gradient-1"></div>
          <div className="hero-gradient-2"></div>
          <div className="floating-shapes">
            {[...Array(6)].map((_, i) => (
              <div key={i} className={`shape shape-${i + 1}`}></div>
            ))}
          </div>
        </div>
        
        <div className="container">
          <motion.div
            className="case-study-hero-content"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link href="/case-studies" className="back-button">
              ← Back to Case Studies
            </Link>
            
            <motion.h1
              className="case-study-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {study.title}
            </motion.h1>
            
            <motion.p
              className="case-study-description"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {study.description}
            </motion.p>
            
            <motion.div
              className="case-study-meta"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="meta-item">
                <span className="meta-label">Industry:</span>
                <span className="meta-value">{study.industry}</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Duration:</span>
                <span className="meta-value">{study.duration}</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Team:</span>
                <span className="meta-value">{study.team.join(', ')}</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="case-study-section overview-section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Project Overview</h2>
            <p className="section-subtitle">
              A comprehensive look at the project goals and achievements
            </p>
          </motion.div>

          <div className="section-grid">
            <motion.div
              className="section-content"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="content-block">
                <h3>The Vision</h3>
                <p>{study.overview}</p>
              </div>
            </motion.div>
            
            <motion.div
              className="section-visual"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="visual-container">
                <img src={study.image} alt={study.title} className="main-image" />
                <div className="visual-overlay" style={{ background: study.gradient }}></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problem & Solution Section */}
      <section className="case-study-section problem-solution-section">
        <div className="container">
          <div className="problem-solution-grid">
            <motion.div
              className="problem-column"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="column-header">
                <div className="column-icon">🎯</div>
                <h3>The Challenge</h3>
              </div>
              <p className="column-description">{study.problem}</p>
              
              <div className="challenges-list">
                <h4>Key Challenges:</h4>
                <div className="challenges-grid">
                  {study.challenges.map((challenge, index) => (
                    <motion.div
                      key={index}
                      className="challenge-item"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                    >
                      <div className="challenge-number">0{index + 1}</div>
                      <p>{challenge}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              className="solution-column"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="column-header">
                <div className="column-icon">💡</div>
                <h3>Our Solution</h3>
              </div>
              <p className="column-description">{study.approach}</p>
              
              <div className="solutions-list">
                <h4>Innovative Solutions:</h4>
                <div className="solutions-grid">
                  {study.solutions.map((solution, index) => (
                    <motion.div
                      key={index}
                      className="solution-item"
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ x: 10, transition: { duration: 0.3 } }}
                    >
                      <div className="solution-check">✓</div>
                      <p>{solution}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="case-study-section results-section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Remarkable Results</h2>
            <p className="section-subtitle">
              Measurable outcomes that transformed the business
            </p>
          </motion.div>

          <div className="results-showcase">
            {Object.entries(study.results).map(([key, value], index) => (
              <motion.div
                key={key}
                className="result-card"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              >
                <div className="result-glow" style={{ background: study.gradient }}></div>
                <div 
                  className="result-value"
                  style={{ background: study.gradient }}
                >
                  {value}
                </div>
                <div className="result-label">
                  {key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}
                </div>
                <div className="result-description">
                  Significant improvement in {key.replace(/([A-Z])/g, ' $1').toLowerCase()}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="case-study-section tech-section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Technology Stack</h2>
            <p className="section-subtitle">
              Powerful tools and technologies that brought the vision to life
            </p>
          </motion.div>

          <div className="tech-showcase">
            <motion.div
              className="tech-category"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="tech-category-header">
                <div className="tech-icon">⚛️</div>
                <h3>Frontend</h3>
              </div>
              <div className="tech-tags">
                {study.techStack.frontend.map((tech, index) => (
                  <motion.span
                    key={tech}
                    className="tech-tag"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              className="tech-category"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="tech-category-header">
                <div className="tech-icon">🔧</div>
                <h3>Backend</h3>
              </div>
              <div className="tech-tags">
                {study.techStack.backend.map((tech, index) => (
                  <motion.span
                    key={tech}
                    className="tech-tag"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              className="tech-category"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="tech-category-header">
                <div className="tech-icon">🛠️</div>
                <h3>Tools & Services</h3>
              </div>
              <div className="tech-tags">
                {study.techStack.tools.map((tech, index) => (
                  <motion.span
                    key={tech}
                    className="tech-tag"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="case-study-section gallery-section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Project Gallery</h2>
            <p className="section-subtitle">
              Visual journey through the project development and final outcome
            </p>
          </motion.div>

          <div className="gallery-showcase">
            {study.gallery.map((image, index) => (
              <motion.div
                key={index}
                className="gallery-item"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              >
                <div className="gallery-image-container">
                  <img src={image} alt={`${study.title} showcase ${index + 1}`} />
                  <div className="gallery-overlay">
                    
                  </div>
                </div>
                
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="case-study-cta">
        <div className="case-study-cta-background">
          <div className="cta-gradient-1"></div>
          <div className="cta-gradient-2"></div>
          <div className="floating-elements">
            <div className="element element-1">🚀</div>
            <div className="element element-2">💡</div>
            <div className="element element-3">🌟</div>
          </div>
        </div>
        
        <div className="container">
          <motion.div
            className="cta-content"
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
              Ready to Create Your
              <span className="gradient-text"> Success Story?</span>
            </motion.h2>
            
            <motion.p
              className="cta-subtitle"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Let's discuss how we can transform your business with innovative digital solutions.
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
              <Link href="/case-studies">
                <motion.button
                  className="cta-button secondary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View More Case Studies
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudyDetail;