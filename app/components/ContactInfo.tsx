'use client';
import { motion } from 'framer-motion';
import './ContactInfo.css';

const ContactInfo = () => {
  const contactMethods = [
    {
      icon: '📧',
      title: 'Email Us',
      description: 'Send us an email anytime',
      value: 'shuklamanya99@gmail.com',
      link: 'mailto:shuklamanya99@gmail.com',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      icon: '💬',
      title: ' Chat with Us',
      description: 'Chat with our team',
      value: 'Start Chat',
      link: '#',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
      icon: '📞',
      title: 'Call Us',
      description: 'Mon - Fri from 9am to 6pm',
      value: '+91 800-558-6588',
      link: 'tel:+918005586588',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    },
  ];

  return (
    <section id="contact-info" className="contact-info-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Other Ways to Reach Us</h2>
          <p className="section-subtitle">
            Prefer to connect through other channels? Here's how you can reach our team.
          </p>
        </motion.div>

        <div className="contact-methods-grid">
          {contactMethods.map((method, index) => (
            <motion.a
              key={method.title}
              href={method.link}
              className="contact-method-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div 
                className="method-icon"
                style={{ background: method.gradient }}
              >
                {method.icon}
              </div>
              <h3 className="method-title">{method.title}</h3>
              <p className="method-description">{method.description}</p>
              <div className="method-value">{method.value}</div>
            </motion.a>
          ))}
        </div>

        <motion.div
          className="contact-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3>Still Have Questions?</h3>
          <p>Check out our FAQ section or schedule a call with our experts.</p>
          <div className="cta-buttons">
            <motion.button
              className="cta-button primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View FAQ
            </motion.button>
            <motion.button
              className="cta-button secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Schedule Call
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactInfo;