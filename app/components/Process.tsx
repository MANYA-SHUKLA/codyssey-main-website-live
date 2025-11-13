'use client';
import { motion } from 'framer-motion';
import './Process.css';

const Process = () => {
  const steps = [
    {
      number: '01',
      title: 'Discovery & Planning',
      description: 'We start by understanding your vision, goals, and requirements through detailed discussions and research.',
      icon: '🔍',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      number: '02',
      title: 'Design & Prototyping',
      description: 'Our designers create wireframes and prototypes to visualize the user experience and interface design.',
      icon: '🎨',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
      number: '03',
      title: 'Development',
      description: 'Using modern technologies, we build robust, scalable applications with clean, maintainable code.',
      icon: '💻',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    },
    {
      number: '04',
      title: 'Testing & Quality',
      description: 'Rigorous testing ensures your application is bug-free, secure, and performs optimally across all devices.',
      icon: '🧪',
      gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
    },
    {
      number: '05',
      title: 'Deployment',
      description: 'We deploy your application to production servers with proper CI/CD pipelines and monitoring setup.',
      icon: '🚀',
      gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
    },
    {
      number: '06',
      title: 'Support & Maintenance',
      description: 'Continuous support, updates, and maintenance to keep your application running smoothly and securely.',
      icon: '🛠️',
      gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)'
    }
  ];

  return (
    <section id="process" className="process-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Our Development Process</h2>
          <p className="section-subtitle">
            A structured approach to delivering exceptional digital products
          </p>
        </motion.div>

        <div className="process-timeline">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className="process-step"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="step-content">
                <div 
                  className="step-number"
                  style={{ background: step.gradient }}
                >
                  {step.number}
                </div>
                <div className="step-icon">{step.icon}</div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="step-connector">
                  <div className="connector-line"></div>
                  <div className="connector-arrow">↓</div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;