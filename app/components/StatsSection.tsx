'use client';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';
import './StatsSection.css';

const Counter = ({ end, duration = 2 }: { end: number; duration?: number }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const increment = end / (duration * 60);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.ceil(start));
        }
      }, 1000 / 60);
      
      return () => clearInterval(timer);
    }
  }, [inView, end, duration]);

  return <span ref={ref}>{count}+</span>;
};

const StatsSection = () => {
  const stats = [
    {
      number: 5,
      label: 'Projects Delivered',
      icon: '🚀',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      number: 8,
      label: 'Industries Served',
      icon: '🏢',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
      number: 5,
      label: 'Satisfied Clients',
      icon: '😊',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    },
    {
      number: 15,
      label: 'Technologies Used',
      icon: '⚡',
      gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
    }
  ];

  return (
    <section id="stats" className="stats-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Our Impact in Numbers</h2>
          <p className="section-subtitle">
            Measuring success through tangible results and client satisfaction
          </p>
        </motion.div>

        <div className="stats-grid">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="stat-card"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            >
              <div 
                className="stat-icon"
                style={{ background: stat.gradient }}
              >
                {stat.icon}
              </div>
              <div className="stat-number">
                <Counter end={stat.number} />
              </div>
              <div className="stat-label">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="stats-achievements"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="achievement-item">
            <div className="achievement-icon">🏆</div>
            <div className="achievement-content">
              <h4>100% Project Success Rate</h4>
              <p>Every project delivered on time and exceeding client expectations</p>
            </div>
          </div>
          <div className="achievement-item">
            <div className="achievement-icon">⭐</div>
            <div className="achievement-content">
              <h4>5-Star Client Reviews</h4>
              <p>Consistent positive feedback for quality and professionalism</p>
            </div>
          </div>
          <div className="achievement-item">
            <div className="achievement-icon">🚀</div>
            <div className="achievement-content">
              <h4>Rapid Growth</h4>
              <p>Expanding team and capabilities to serve more clients globally</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;