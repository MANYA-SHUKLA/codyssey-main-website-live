'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import '../components/PrivacyPolicy.css';
const PrivacyPolicy = () => {
  return (
    <div className="legal-page">
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
            Privacy Policy
          </motion.h1>
          <motion.p
            className="legal-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            How we protect and handle your personal information at Codyssey Services
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
          <h2 className="section-title">Introduction</h2>
          <div className="section-content">
            <p>
              At Codyssey Services, we are committed to protecting your privacy and ensuring 
              the security of your personal information. This Privacy Policy explains how we 
              collect, use, disclose, and safeguard your information when you use our services.
            </p>
            <p>
              Codyssey Services is a digital solutions company specializing in professional 
              website development for businesses, startups, and personal brands. We focus on 
              delivering clean, modern, and purpose-driven web platforms that enhance digital 
              credibility, communication, and growth.
            </p>
          </div>
        </motion.section>

        <motion.section
          className="legal-section"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h2 className="section-title">Information We Collect</h2>
          <div className="section-content">
            <h3>Personal Information</h3>
            <p>We may collect personal information that you voluntarily provide to us, including:</p>
            <ul>
              <li>Name and contact information (email, phone number, address)</li>
              <li>Company information and business details</li>
              <li>Project requirements and specifications</li>
              <li>Communication preferences</li>
              <li>Billing and payment information</li>
            </ul>

            <h3>Automatically Collected Information</h3>
            <p>When you visit our website, we may automatically collect:</p>
            <ul>
              <li>IP address and browser type</li>
              <li>Device information and operating system</li>
              <li>Website usage statistics and analytics</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>
          </div>
        </motion.section>

        <motion.section
          className="legal-section"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className="section-title">How We Use Your Information</h2>
          <div className="section-content">
            <div className="info-grid">
              <div className="info-card">
                <h4>Service Delivery</h4>
                <p>To provide and maintain our web development services, communicate about projects, and deliver completed work.</p>
              </div>
              <div className="info-card">
                <h4>Communication</h4>
                <p>To respond to inquiries, provide customer support, and send important updates about your projects.</p>
              </div>
              <div className="info-card">
                <h4>Business Operations</h4>
                <p>To process payments, manage accounts, and improve our services and website functionality.</p>
              </div>
              <div className="info-card">
                <h4>Marketing</h4>
                <p>To send promotional materials about our services (with your consent) and analyze website performance.</p>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          className="legal-section"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <h2 className="section-title">Data Sharing and Disclosure</h2>
          <div className="section-content">
            <p>
              We do not sell, trade, or rent your personal information to third parties. 
              We may share your information only in the following circumstances:
            </p>
            <ul>
              <li>With your explicit consent</li>
              <li>With service providers who assist in our operations (hosting, payment processing)</li>
              <li>To comply with legal obligations or protect our rights</li>
              <li>In connection with business transfers or mergers</li>
            </ul>
          </div>
        </motion.section>

        <motion.section
          className="legal-section"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h2 className="section-title">Data Security</h2>
          <div className="section-content">
            <p>
              We implement appropriate technical and organizational security measures to protect 
              your personal information against unauthorized access, alteration, disclosure, or 
              destruction. These measures include:
            </p>
            <ul>
              <li>Encryption of sensitive data</li>
              <li>Secure server infrastructure</li>
              <li>Regular security assessments</li>
              <li>Access controls and authentication</li>
              <li>Employee training on data protection</li>
            </ul>
          </div>
        </motion.section>

        <motion.section
          className="legal-section"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <h2 className="section-title">Your Rights</h2>
          <div className="section-content">
            <p>You have the right to:</p>
            <ul>
              <li>Access and receive copies of your personal information</li>
              <li>Correct inaccurate or incomplete data</li>
              <li>Request deletion of your personal information</li>
              <li>Object to or restrict processing of your data</li>
              <li>Withdraw consent at any time</li>
              <li>Data portability in a machine-readable format</li>
            </ul>
            <p>
              To exercise these rights, please contact us using the information provided below.
            </p>
          </div>
        </motion.section>

        <motion.section
          className="legal-section"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <h2 className="section-title">Contact Information</h2>
          <div className="section-content">
            <div className="contact-info">
              <h3>Codyssey Services</h3>
              <p>For any questions about this Privacy Policy or your personal information, please contact us:</p>
              <p>Email: <a href="mailto:info@codyssey.services">info@codyssey.services</a></p>
              <p>Phone: <a href="tel:+917634820773">+91 763-482-0773</a></p>
            </div>
          </div>
        </motion.section>

        <motion.div
          className="last-updated"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.1 }}
        >
          Last updated: November 17, 2025
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
