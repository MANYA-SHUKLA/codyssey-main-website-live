'use client';
import { motion } from 'framer-motion';
import './OurStory.css';

const OurStory = () => {
  return (
    <section id="our-story" className="our-story-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Our Story</h2>
          <p className="section-subtitle">
            From a simple idea to a thriving digital agency
          </p>
        </motion.div>

        <div className="story-content">
          <motion.div
            className="story-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="story-year">2025</div>
            <h3 className="story-title">The Beginning of CODYSSEY</h3>
            <div className="story-description">
              <p>
                CODYSSEY was born from a shared passion for technology and innovation. 
                Founded in 2025 by Krunal Kumar Yadav, our journey began with a simple 
                mission: to bridge the gap between creative ideas and technical execution.
              </p>
              <p>
                What started as a small team of dedicated developers has evolved into 
                a full-service digital agency, serving clients across India and worldwide. 
                We believe that every great digital product begins with a story, and we're 
                here to help you tell yours.
              </p>
              <p>
                Our name, CODYSSEY, reflects our approach - we see every project as an 
                epic journey through code, where we navigate challenges, discover innovative 
                solutions, and ultimately deliver exceptional digital experiences.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="story-visual"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <h4>Foundation</h4>
                  <p>CODYSSEY founded with vision to transform digital landscape</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <h4>First Projects</h4>
                  <p>Delivered 5+ successful projects across various industries</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <h4>Team Growth</h4>
                  <p>Expanded to include specialized developers and designers</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <h4>Global Reach</h4>
                  <p>Started serving clients internationally with diverse solutions</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;