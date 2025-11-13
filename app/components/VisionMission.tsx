'use client';
import { motion } from 'framer-motion';
import './VisionMission.css';

const VisionMission = () => {
  return (
    <section className="vision-mission-section">
      <div className="container">
        <div className="vm-grid">
          <motion.div
            className="vm-card vision-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
          >
            <div className="vm-icon">🔭</div>
            <h3 className="vm-title">Our Vision</h3>
            <p className="vm-description">
              To become the most trusted digital innovation partner globally, 
              transforming how businesses leverage technology to create meaningful 
              impact and drive sustainable growth in the digital era.
            </p>
            <div className="vm-highlights">
              <div className="highlight-item">Global Innovation Leader</div>
              <div className="highlight-item">Technology Excellence</div>
              <div className="highlight-item">Sustainable Growth</div>
            </div>
          </motion.div>

          <motion.div
            className="vm-card mission-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
          >
            <div className="vm-icon">🎯</div>
            <h3 className="vm-title">Our Mission</h3>
            <p className="vm-description">
              To deliver exceptional digital solutions that empower businesses 
              to thrive in the digital landscape. We combine cutting-edge technology 
              with creative design to build products that users love and businesses need.
            </p>
            <div className="vm-highlights">
              <div className="highlight-item">Exceptional Solutions</div>
              <div className="highlight-item">User-Centric Design</div>
              <div className="highlight-item">Business Growth</div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="values-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="values-title">Our Core Values</h3>
          <div className="values-grid">
            <div className="value-item">
              <div className="value-icon">💡</div>
              <h4>Innovation</h4>
              <p>Pushing boundaries with creative solutions</p>
            </div>
            <div className="value-item">
              <div className="value-icon">🤝</div>
              <h4>Collaboration</h4>
              <p>Working together to achieve excellence</p>
            </div>
            <div className="value-item">
              <div className="value-icon">⚡</div>
              <h4>Excellence</h4>
              <p>Delivering quality in everything we do</p>
            </div>
            <div className="value-item">
              <div className="value-icon">🌱</div>
              <h4>Growth</h4>
              <p>Continuous learning and improvement</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VisionMission;