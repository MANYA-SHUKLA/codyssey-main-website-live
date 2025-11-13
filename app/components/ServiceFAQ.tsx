'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import './ServiceFAQ.css';

const ServiceFAQ = () => {
  const [activeCategory, setActiveCategory] = useState('general');
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev =>
      prev.includes(index)
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  const faqCategories = {
    general: [
      {
        question: 'How long does a typical website development project take?',
        answer: 'Project timelines vary based on complexity. A basic website takes 2-4 weeks, e-commerce sites 4-8 weeks, and complex web applications 8-16 weeks. We provide detailed timelines during the planning phase.'
      },
      {
        question: 'Do you provide ongoing maintenance and support?',
        answer: 'Yes, we offer comprehensive maintenance packages including security updates, performance optimization, bug fixes, and feature enhancements. Our support plans are tailored to your specific needs.'
      },
      {
        question: 'Can you work with our existing design or development team?',
        answer: 'Absolutely! We frequently collaborate with in-house teams, providing specialized expertise in areas like advanced development, performance optimization, or specific technology stacks.'
      },
      {
        question: 'What is your pricing structure?',
        answer: 'We offer flexible pricing: fixed-price for well-defined projects, time-and-materials for evolving requirements, and monthly retainers for ongoing work. We provide transparent quotes after understanding your requirements.'
      }
    ],
    technical: [
      {
        question: 'What technologies do you use for web development?',
        answer: 'We use modern technologies including Next.js, React, TypeScript, Node.js, MongoDB, and Tailwind CSS. Our stack is chosen for performance, scalability, and maintainability.'
      },
      {
        question: 'Do you develop responsive websites?',
        answer: 'Yes, all our websites are mobile-first and fully responsive. We ensure optimal performance across all devices and screen sizes through rigorous testing.'
      },
      {
        question: 'How do you handle website security?',
        answer: 'We implement security best practices including HTTPS, input validation, secure authentication, regular security updates, and follow OWASP guidelines to protect against common vulnerabilities.'
      },
      {
        question: 'Do you provide SEO optimization?',
        answer: 'Yes, we build SEO-friendly websites with proper meta tags, structured data, fast loading times, mobile optimization, and clean URL structures to help improve search engine rankings.'
      }
    ],
    process: [
      {
        question: 'What is your development process?',
        answer: 'Our process includes discovery & planning, design & prototyping, development, testing & QA, deployment, and ongoing support. We follow agile methodology with regular client updates.'
      },
      {
        question: 'How involved do I need to be during the project?',
        answer: 'We recommend regular check-ins (weekly or bi-weekly) for feedback and decisions. The level of involvement can be adjusted based on your availability and preferences.'
      },
      {
        question: 'Do you provide design mockups before development?',
        answer: 'Yes, we create detailed wireframes and design mockups for client approval before starting development. This ensures we are aligned on the visual direction and user experience.'
      },
      {
        question: 'What happens after the project is completed?',
        answer: 'We provide training, documentation, and ongoing support. We also offer maintenance packages to keep your website secure, updated, and performing optimally.'
      }
    ],
    support: [
      {
        question: 'What kind of support do you offer after launch?',
        answer: 'We offer 24/7 monitoring, regular backups, security updates, performance optimization, and technical support. Our response times vary based on your support plan.'
      },
      {
        question: 'How do you handle website updates and changes?',
        answer: 'We use version control and follow deployment best practices. For updates, we provide change requests with estimates and deploy during low-traffic periods when possible.'
      },
      {
        question: 'Do you provide hosting services?',
        answer: 'We can recommend and set up hosting solutions that best fit your needs. We work with reliable providers like Vercel, AWS, and Netlify, or can help you choose your own hosting.'
      },
      {
        question: 'What is your policy on project revisions?',
        answer: 'We include reasonable revisions during the development phase. After project completion, additional changes are handled through our maintenance plans or as separate projects.'
      }
    ]
  };

  const currentFAQs = faqCategories[activeCategory as keyof typeof faqCategories];

  return (
    <section id="service-faq" className="service-faq-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">
            Find answers to common questions about our services and processes
          </p>
        </motion.div>

        <div className="faq-container">
          <motion.div
            className="faq-categories"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {Object.keys(faqCategories).map((category, index) => (
              <motion.button
                key={category}
                className={`category-tab ${activeCategory === category ? 'active' : ''}`}
                onClick={() => setActiveCategory(category)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </motion.button>
            ))}
          </motion.div>

          <motion.div
            className="faq-content"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="faq-items">
              {currentFAQs.map((faq, index) => (
                <motion.div
                  key={index}
                  className="faq-item"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <button
                    className="faq-question"
                    onClick={() => toggleItem(index)}
                  >
                    <span>{faq.question}</span>
                    <motion.span
                      className="faq-icon"
                      animate={{ rotate: openItems.includes(index) ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      +
                    </motion.span>
                  </button>
                  <AnimatePresence>
                    {openItems.includes(index) && (
                      <motion.div
                        className="faq-answer"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <p>{faq.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="faq-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <h3>Still have questions?</h3>
          <p>We're here to help! Contact us for more information.</p>
          <motion.button
            className="cta-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Us
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceFAQ;