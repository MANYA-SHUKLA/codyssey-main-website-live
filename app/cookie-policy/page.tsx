'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import '../components/CookiePolicy.css';

const CookiePolicy = () => {
  const handleAcceptAll = () => {
 
    console.log('All cookies accepted');
  };

  const handleEssentialOnly = () => {
 
    console.log('Essential cookies only');
  };

  const handleCustomSettings = () => {

    console.log('Custom cookie settings');
  };

  return (
    <div className="legal-page">
      {/* Hero Section */}
      <section className="legal-hero">
        <div className="legal-hero-background">
          <div className="legal-gradient-1"></div>
          <div className="legal-gradient-2"></div>
        </div>
        
        <div className="legal-hero-content">
          <motion.h1
            className="legal-title"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Cookie Policy
          </motion.h1>
          <motion.p
            className="legal-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            How we use cookies and similar technologies at Codyssey Services
          </motion.p>
        </div>
      </section>

      {/* Content Section */}
      <div className="legal-content">
        <motion.section
          className="legal-section"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="section-title">What Are Cookies?</h2>
          <div className="section-content">
            <p>
              Cookies are small text files that are stored on your device when you visit a website. 
              They help websites remember information about your visit, which can make it easier 
              to visit the site again and make the site more useful to you.
            </p>
            <p>
              At Codyssey Services, we use cookies and similar technologies to enhance your 
              experience, analyze site usage, and support our marketing efforts.
            </p>
          </div>
        </motion.section>

        <motion.section
          className="legal-section"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h2 className="section-title">Types of Cookies We Use</h2>
          <div className="section-content">
            <div className="cookie-types">
              <div className="cookie-card essential">
                <h4>Essential Cookies</h4>
                <span className="cookie-badge">Required</span>
                <p>
                  These cookies are necessary for the website to function properly. They enable 
                  basic functions like page navigation and access to secure areas of the website.
                </p>
                <p><strong>Examples:</strong> Session management, security, load balancing</p>
              </div>

              <div className="cookie-card analytics">
                <h4>Analytics Cookies</h4>
                <span className="cookie-badge">Optional</span>
                <p>
                  These cookies help us understand how visitors interact with our website by 
                  collecting and reporting information anonymously.
                </p>
                <p><strong>Examples:</strong> Google Analytics, visitor statistics, page performance</p>
              </div>

              <div className="cookie-card functional">
                <h4>Functional Cookies</h4>
                <span className="cookie-badge">Optional</span>
                <p>
                  These cookies enable the website to provide enhanced functionality and 
                  personalization based on your preferences and past interactions.
                </p>
                <p><strong>Examples:</strong> Language settings, font size preferences, region selection</p>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          className="legal-section"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className="section-title">How We Use Cookies</h2>
          <div className="section-content">
            <p>Cookies help us provide our services in the following ways:</p>
            <ul>
              <li><strong>Website Functionality:</strong> Ensuring our website works correctly and securely</li>
              <li><strong>User Experience:</strong> Remembering your preferences and settings</li>
              <li><strong>Analytics:</strong> Understanding how visitors use our site to improve our services</li>
              <li><strong>Performance:</strong> Monitoring website performance and identifying issues</li>
              <li><strong>Marketing:</strong> Measuring the effectiveness of our marketing campaigns</li>
            </ul>
          </div>
        </motion.section>

        <motion.section
          className="legal-section"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <h2 className="section-title">Third-Party Cookies</h2>
          <div className="section-content">
            <p>
              Some cookies on our website are placed by third-party services that appear on our pages. 
              These may include:
            </p>
            <ul>
              <li><strong>Analytics Providers:</strong> Google Analytics, Hotjar</li>
              <li><strong>Social Media:</strong> Facebook, Twitter, LinkedIn</li>
              <li><strong>Payment Processors:</strong> Stripe, PayPal</li>
              <li><strong>Hosting Services:</strong> Vercel, AWS</li>
            </ul>
            <p>
              We don't control the setting of these cookies, so please check the respective 
              third-party websites for more information about their cookies and how to manage them.
            </p>
          </div>
        </motion.section>

        <motion.section
          className="legal-section"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h2 className="section-title">Cookie Duration</h2>
          <div className="section-content">
            <p>Cookies on our website have different lifespans:</p>
            <ul>
              <li><strong>Session Cookies:</strong> Temporary cookies that expire when you close your browser</li>
              <li><strong>Persistent Cookies:</strong> Remain on your device for a set period or until deleted</li>
              <li><strong>First-Party Cookies:</strong> Set by our website domain</li>
              <li><strong>Third-Party Cookies:</strong> Set by domains other than ours</li>
            </ul>
          </div>
        </motion.section>

        <motion.section
          className="legal-section"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <h2 className="section-title">Managing Your Cookie Preferences</h2>
          <div className="section-content">
            <p>
              You can control and/or delete cookies as you wish. You can delete all cookies 
              that are already on your computer and you can set most browsers to prevent them 
              from being placed.
            </p>

            <div className="control-options">
              <h3>Cookie Control Options</h3>
              <p>Choose how you want us to use cookies on your device:</p>
              
              <div className="control-buttons">
                <button 
                  className="control-button primary"
                  onClick={handleAcceptAll}
                >
                  Accept All Cookies
                </button>
                <button 
                  className="control-button secondary"
                  onClick={handleEssentialOnly}
                >
                  Essential Cookies Only
                </button>
                <button 
                  className="control-button secondary"
                  onClick={handleCustomSettings}
                >
                  Custom Settings
                </button>
              </div>
            </div>

            <h3>Browser Settings</h3>
            <p>
              Most web browsers allow you to control cookies through their settings preferences. 
              However, limiting cookies may affect your experience on our website and other websites.
            </p>
            <ul>
              <li><strong>Chrome:</strong> Settings → Privacy and security → Cookies and other site data</li>
              <li><strong>Firefox:</strong> Options → Privacy & Security → Cookies and Site Data</li>
              <li><strong>Safari:</strong> Preferences → Privacy → Cookies and website data</li>
              <li><strong>Edge:</strong> Settings → Cookies and site permissions → Cookies and site data</li>
            </ul>
          </div>
        </motion.section>

        <motion.section
          className="legal-section"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <h2 className="section-title">Updates to This Policy</h2>
          <div className="section-content">
            <p>
              We may update this Cookie Policy from time to time to reflect changes in our 
              practices or for other operational, legal, or regulatory reasons. We will 
              notify you of any material changes by posting the new policy on our website 
              with an updated effective date.
            </p>
            <p>
              We encourage you to periodically review this page for the latest information 
              on our cookie practices.
            </p>
          </div>
        </motion.section>

        <motion.section
          className="legal-section"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
        >
          <h2 className="section-title">Contact Information</h2>
          <div className="section-content">
            <div className="contact-info">
              <h3>Questions About Cookies?</h3>
              <p>If you have any questions about our use of cookies, please contact us:</p>
              <p>Email: <a href="mailto:Info@codyssey.services">Info@codyssey.services</a></p>
              <p>Phone: <a href="tel:+917634820773">+91 763-482-0773</a></p>
            </div>
          </div>
        </motion.section>

        <motion.div
          className="last-updated"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          Last updated: November 2025
        </motion.div>
      </div>
    </div>
  );
};

export default CookiePolicy;
