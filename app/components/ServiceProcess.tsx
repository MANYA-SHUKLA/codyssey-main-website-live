'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import './ServiceProcess.css';

const ServiceProcess = () => {
  const processes = [
    {
      step: '01',
      title: 'Discovery & Consultation',
      description: 'We begin by understanding your business goals, target audience, and project requirements through detailed discussions.',
      icon: '🔍',
      activities: ['Requirement Analysis', 'Goal Setting', 'Project Scope'],
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      step: '02',
      title: 'Planning & Strategy',
      description: 'Creating a comprehensive project plan with timelines, technology stack, and development approach.',
      icon: '📋',
      activities: ['Technical Planning', 'Timeline Creation', 'Resource Allocation'],
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
      step: '03',
      title: 'Design & Prototyping',
      description: 'Our designers create wireframes and prototypes to visualize the user experience and interface.',
      icon: '🎨',
      activities: ['Wireframing', 'UI/UX Design', 'Prototype Testing'],
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    },
    {
      step: '04',
      title: 'Development & Implementation',
      description: 'Agile development process with regular updates and milestone deliveries using modern technologies.',
      icon: '💻',
      activities: ['Frontend Development', 'Backend Development', 'API Integration'],
      gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
    },
    {
      step: '05',
      title: 'Testing & Quality Assurance',
      description: 'Comprehensive testing including functionality, performance, security, and user acceptance testing.',
      icon: '🧪',
      activities: ['Unit Testing', 'Integration Testing', 'Performance Testing'],
      gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
    },
    {
      step: '06',
      title: 'Deployment & Launch',
      description: 'Smooth deployment to production servers with proper monitoring and performance optimization.',
      icon: '🚀',
      activities: ['Server Setup', 'Deployment', 'Performance Optimization'],
      gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)'
    },
    {
      step: '07',
      title: 'Support & Maintenance',
      description: 'Ongoing support, updates, and maintenance to ensure your application runs smoothly.',
      icon: '🛠️',
      activities: ['Bug Fixing', 'Feature Updates', 'Security Patches'],
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    }
  ];

  return (
    <section id="service-process" className="service-process-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Our Service Process</h2>
          <p className="section-subtitle">
            A structured approach to delivering exceptional digital solutions
          </p>
        </motion.div>

        <div className="process-timeline">
          {processes.map((process, index) => (
            <motion.div
              key={process.step}
              className="process-step"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="step-indicator">
                <div 
                  className="step-number"
                  style={{ background: process.gradient }}
                >
                  {process.step}
                </div>
                {index < processes.length - 1 && (
                  <div className="step-connector"></div>
                )}
              </div>

              <motion.div 
                className="step-content"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="step-header">
                  <div className="step-icon">{process.icon}</div>
                  <h3 className="step-title">{process.title}</h3>
                </div>
                <p className="step-description">{process.description}</p>
                
                <div className="step-activities">
                  <h4>Key Activities:</h4>
                  <div className="activities-list">
                    {process.activities.map((activity, idx) => (
                      <span key={idx} className="activity-tag">
                        {activity}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="process-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="cta-content">
            <h3>Ready to Start Your Project?</h3>
            <p>Let's discuss your requirements and begin the journey to success.</p>
            <Link href="/contact">
              <motion.button
                className="cta-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your Project
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceProcess;