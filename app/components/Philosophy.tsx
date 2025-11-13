'use client';
import { motion } from 'framer-motion';
import './Philosophy.css';

const Philosophy = () => {
  const principles = [
    {
      icon: '🎯',
      title: 'Purpose-Driven Design',
      description: 'Every pixel and line of code serves a purpose. We design with intention, ensuring that aesthetics and functionality work in harmony to achieve business goals.',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      icon: '🚀',
      title: 'Innovation First',
      description: 'We embrace emerging technologies and creative approaches to solve complex problems, pushing boundaries while maintaining practicality and user-friendliness.',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
      icon: '🤝',
      title: 'Collaborative Partnership',
      description: 'We work with you, not just for you. Your vision becomes our mission, and we maintain transparent communication throughout our journey together.',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    },
    {
      icon: '🌱',
      title: 'Sustainable Growth',
      description: 'We build solutions that scale with your business, ensuring long-term viability and adaptability in an ever-evolving digital landscape.',
      gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
    }
  ];

  return (
    <section id="philosophy" className="philosophy-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Our Philosophy</h2>
          <p className="section-subtitle">
            What drives us to create exceptional digital experiences
          </p>
        </motion.div>

        <div className="philosophy-content">
          <motion.div
            className="philosophy-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3>Building Tomorrow's Digital Landscape, Today</h3>
            <p>
              At CODYSSEY, we believe that technology should serve humanity, not the other way around. 
              Our philosophy is rooted in creating digital solutions that are not only technically 
              advanced but also meaningful and accessible to everyone.
            </p>
            <p>
              We stand for ethical design, inclusive technology, and sustainable development. 
              Every project we undertake is an opportunity to make a positive impact - whether 
              it's streamlining business operations, connecting communities, or solving real-world problems.
            </p>
            <div className="philosophy-quote">
              <div className="quote-icon">❝</div>
              <p>Code is poetry when written with purpose, and design is art when created with intention.</p>
            </div>
          </motion.div>

          <motion.div
            className="philosophy-visual"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="principles-grid">
              {principles.map((principle, index) => (
                <motion.div
                  key={principle.title}
                  className="principle-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, transition: { duration: 0.3 } }}
                >
                  <div 
                    className="principle-icon"
                    style={{ background: principle.gradient }}
                  >
                    {principle.icon}
                  </div>
                  <h4>{principle.title}</h4>
                  <p>{principle.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;