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
  results: Record<string, string | undefined>;
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
          <div 
            className="hero-gradient"
            style={{ background: study.gradient }}
          ></div>
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
          <div className="section-grid">
            <motion.div
              className="section-content"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2>Project Overview</h2>
              <p>{study.overview}</p>
            </motion.div>
            
            <motion.div
              className="section-image"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img src={study.image} alt={study.title} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problem & Approach Section */}
      <section className="case-study-section problem-approach-section">
        <div className="container">
          <div className="columns-grid">
            <motion.div
              className="column"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3>The Challenge</h3>
              <p>{study.problem}</p>
              
              <div className="challenges-list">
                <h4>Key Challenges:</h4>
                <ul>
                  {study.challenges.map((challenge, index) => (
                    <li key={index}>{challenge}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
            
            <motion.div
              className="column"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3>Our Approach</h3>
              <p>{study.approach}</p>
              
              <div className="solutions-list">
                <h4>Solutions Implemented:</h4>
                <ul>
                  {study.solutions.map((solution, index) => (
                    <li key={index}>{solution}</li>
                  ))}
                </ul>
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
            <h2>Results & Impact</h2>
            <p>Measurable outcomes that made a difference</p>
          </motion.div>

          <div className="results-grid">
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
                <div 
                  className="result-value"
                  style={{ background: study.gradient }}
                >
                  {value}
                </div>
                <div className="result-label">
                  {key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}
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
            <h2>Technology Stack</h2>
            <p>Tools and technologies that powered the solution</p>
          </motion.div>

          <div className="tech-grid">
            <motion.div
              className="tech-category"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3>Frontend</h3>
              <div className="tech-tags">
                {study.techStack.frontend.map((tech, index) => (
                  <span key={tech} className="tech-tag">{tech}</span>
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
              <h3>Backend</h3>
              <div className="tech-tags">
                {study.techStack.backend.map((tech, index) => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              className="tech-category"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3>Tools & Services</h3>
              <div className="tech-tags">
                {study.techStack.tools.map((tech, index) => (
                  <span key={tech} className="tech-tag">{tech}</span>
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
            <h2>UI/UX Showcase</h2>
            <p>Visual highlights from the project</p>
          </motion.div>

          <div className="gallery-grid">
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
                <img src={image} alt={`${study.title} showcase ${index + 1}`} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="case-study-cta">
        <div className="container">
          <motion.div
            className="cta-content"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Have an idea? Start your journey with us.</h2>
            <p>Ready to transform your vision into a successful digital product?</p>
            <motion.button
              className="cta-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Project
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudyDetail;