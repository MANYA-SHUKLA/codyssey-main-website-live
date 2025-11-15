'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  const features = [
    {
      icon: '🚀',
      title: 'Cutting-Edge Technology',
      description: 'We use the latest MERN stack, Next.js, TypeScript, and modern tools to build scalable, high-performance applications.',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      icon: '🎯',
      title: 'Result-Oriented Approach',
      description: 'Every project is driven by clear objectives and measurable outcomes to ensure your business goals are achieved.',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
      icon: '⚡',
      title: 'Rapid Development',
      description: 'Agile methodology and efficient workflows ensure timely delivery without compromising on quality.',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    },
    {
      icon: '🛡️',
      title: 'Robust Security',
      description: 'Enterprise-grade security practices to protect your data and ensure application integrity.',
      gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
    },
    {
      icon: '📈',
      title: 'Scalable Solutions',
      description: 'Architected for growth, our solutions scale seamlessly with your business needs.',
      gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
    },
    {
      icon: '🌟',
      title: 'Dedicated Support',
      description: 'Continuous support and maintenance to keep your applications running smoothly.',
      gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)'
    }
  ];

  return (
    <section id="why-choose-us" className="why-choose-us-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Why Choose CODYSSEY?</h2>
          <p className="section-subtitle">
            We combine technical expertise with creative vision to deliver exceptional results
          </p>
        </motion.div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="feature-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
            >
              <div 
                className="feature-icon"
                style={{ background: feature.gradient }}
              >
                {feature.icon}
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
              <div className="feature-hover-effect"></div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="expertise-showcase"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="expertise-content">
            <h3>Ready to Start Your Project?</h3>
            <p>Let's discuss how we can bring your ideas to life with our expertise.</p>
            <Link href="/contact">
              <motion.button
                className="cta-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started Today
              </motion.button>
            </Link>
          </div>
          <div className="expertise-visual">
            <div className="floating-tech">
              <span>React</span>
              <span>Next.js</span>
              <span>Node.js</span>
              <span>TypeScript</span>
              <span>MongoDB</span>
              <span>AWS</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;