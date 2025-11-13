'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: '',
    timeline: '',
    projectType: '',
    description: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          company: '',
          budget: '',
          timeline: '',
          projectType: '',
          description: ''
        });
      } else {
        alert('There was an error sending your message. Please try again.');
      }
    } catch (error) {
      alert('There was an error sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section id="contact-form" className="contact-form-section">
        <div className="container">
          <motion.div
            className="success-message"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="success-icon">✅</div>
            <h2>Thank You for Reaching Out!</h2>
            <p>
              We've received your project details and will get back to you within 24 hours. 
              A confirmation email has been sent to your inbox.
            </p>
            <motion.button
              className="back-button"
              onClick={() => setIsSubmitted(false)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Another Message
            </motion.button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact-form" className="contact-form-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Tell Us About Your Project</h2>
          <p className="section-subtitle">
            Fill out the form below and we'll get back to you within 24 hours
          </p>
        </motion.div>

        <motion.form
          className="contact-form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="name" className="form-label">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-input"
                required
                placeholder="Enter your full name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-input"
                required
                placeholder="Enter your email address"
              />
            </div>

            <div className="form-group">
              <label htmlFor="company" className="form-label">
                Company / Organization
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="form-input"
                placeholder="Enter your company name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="projectType" className="form-label">
                Project Type *
              </label>
              <select
                id="projectType"
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                className="form-select"
                required
              >
                <option value="">Select project type</option>
                <option value="website">Website Development</option>
                <option value="ecommerce">E-Commerce Platform</option>
                <option value="webapp">Web Application</option>
                <option value="mobile">Mobile Application</option>
                <option value="uiux">UI/UX Design</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="budget" className="form-label">
                Estimated Budget *
              </label>
              <select
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="form-select"
                required
              >
                <option value="">Select budget range</option>
                <option value="5k-10k">$5,000 - $10,000</option>
                <option value="10k-25k">$10,000 - $25,000</option>
                <option value="25k-50k">$25,000 - $50,000</option>
                <option value="50k-100k">$50,000 - $100,000</option>
                <option value="100k+">$100,000+</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="timeline" className="form-label">
                Project Timeline *
              </label>
              <select
                id="timeline"
                name="timeline"
                value={formData.timeline}
                onChange={handleChange}
                className="form-select"
                required
              >
                <option value="">Select timeline</option>
                <option value="1-2months">1-2 Months</option>
                <option value="2-4months">2-4 Months</option>
                <option value="4-6months">4-6 Months</option>
                <option value="6months+">6+ Months</option>
              </select>
            </div>
          </div>

          <div className="form-group full-width">
            <label htmlFor="description" className="form-label">
              Project Description *
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="form-textarea"
              required
              rows={6}
              placeholder="Tell us about your project goals, requirements, and any specific features you need..."
            ></textarea>
          </div>

          <motion.button
            type="submit"
            className="submit-button"
            disabled={isSubmitting}
            whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
            whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
          >
            {isSubmitting ? (
              <>
                <div className="spinner"></div>
                Sending...
              </>
            ) : (
              'Start Your Journey'
            )}
          </motion.button>

          <p className="form-note">
            By submitting this form, you agree to our privacy policy and allow us to contact you about your project.
          </p>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactForm;