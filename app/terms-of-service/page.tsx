'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import '../components/TermsOfService.css';

const TermsOfService = () => {
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
            Terms of Service
          </motion.h1>
          <motion.p
            className="legal-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Guidelines and agreements for using Codyssey Services
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
          <h2 className="section-title">Agreement to Terms</h2>
          <div className="section-content">
            <p>
              By accessing and using Codyssey Services' website and services, you accept and 
              agree to be bound by the terms and provision of this agreement. Codyssey Services 
              is a digital solutions company specializing in professional website development 
              for businesses, startups, and personal brands.
            </p>
            <p>
              Our approach prioritizes quality, clarity, and business value in every project 
              we execute. These Terms of Service govern your use of our services and website.
            </p>
          </div>
        </motion.section>

        <motion.section
          className="legal-section"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h2 className="section-title">Services Description</h2>
          <div className="section-content">
            <p>Codyssey Services provides:</p>
            <div className="terms-grid">
              <div className="term-card">
                <h4>Website Development</h4>
                <p>Custom website design and development tailored to your business needs and brand identity.</p>
              </div>
              <div className="term-card">
                <h4>Digital Solutions</h4>
                <p>Comprehensive digital platforms that enhance online presence and business growth.</p>
              </div>
              <div className="term-card">
                <h4>Consultation</h4>
                <p>Strategic advice and planning for digital transformation and online strategy.</p>
              </div>
              <div className="term-card">
                <h4>Maintenance</h4>
                <p>Ongoing support, updates, and optimization for your digital platforms.</p>
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
          <h2 className="section-title">Client Responsibilities</h2>
          <div className="section-content">
            <p>As a client of Codyssey Services, you agree to:</p>
            <ul>
              <li>Provide accurate and complete information for project requirements</li>
              <li>Respond to communications in a timely manner during project development</li>
              <li>Provide necessary content, images, and materials as required</li>
              <li>Review and provide feedback within agreed timelines</li>
              <li>Make timely payments according to the agreed schedule</li>
              <li>Ensure you have rights to all materials provided for the project</li>
            </ul>
          </div>
        </motion.section>

        <motion.section
          className="legal-section"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <h2 className="section-title">Payment Terms</h2>
          <div className="section-content">
            <h3>Pricing and Payments</h3>
            <p>
              All services are provided at the prices quoted in your project proposal. 
              Payment schedules will be outlined in your service agreement and typically include:
            </p>
            <ul>
              <li>Initial deposit to begin work</li>
              <li>Milestone payments during development</li>
              <li>Final payment upon project completion</li>
            </ul>

            <h3>Late Payments</h3>
            <p>
              Payments are due according to the schedule in your agreement. Late payments 
              may result in project delays or suspension of services.
            </p>
          </div>
        </motion.section>

        <motion.section
          className="legal-section"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h2 className="section-title">Intellectual Property</h2>
          <div className="section-content">
            <h3>Client Materials</h3>
            <p>
              You retain all rights to materials you provide for your project, including 
              logos, images, text, and other content.
            </p>

            <h3>Delivered Work</h3>
            <p>
              Upon final payment, you receive full ownership of the completed website and 
              associated code, excluding any third-party components or licensed materials.
            </p>

            <h3>Our Rights</h3>
            <p>
              We retain the right to display your completed project in our portfolio and 
              marketing materials unless otherwise agreed in writing.
            </p>
          </div>
        </motion.section>

        <motion.section
          className="legal-section"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <h2 className="section-title">Project Timeline and Delivery</h2>
          <div className="section-content">
            <p>
              Project timelines are estimates based on the scope of work and client responsiveness. 
              We strive to deliver projects on time, but delays may occur due to:
            </p>
            <ul>
              <li>Client response times</li>
              <li>Scope changes during development</li>
              <li>Technical complexities</li>
              <li>Third-party dependencies</li>
            </ul>
            <p>
              Regular communication and status updates will be provided throughout the project lifecycle.
            </p>
          </div>
        </motion.section>

        <motion.section
          className="legal-section"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <h2 className="section-title">Limitation of Liability</h2>
          <div className="section-content">
            <div className="warning-note">
              <h4>Important Notice</h4>
              <p>
                Codyssey Services shall not be liable for any indirect, incidental, special, 
                consequential, or punitive damages, including but not limited to loss of profits, 
                data, or business opportunities arising from the use of our services.
              </p>
            </div>
            <p>
              Our total liability for any claim shall not exceed the total amount paid by you 
              for the specific services giving rise to the claim.
            </p>
          </div>
        </motion.section>

        <motion.section
          className="legal-section"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
        >
          <h2 className="section-title">Termination</h2>
          <div className="section-content">
            <p>
              Either party may terminate a project with written notice. Upon termination:
            </p>
            <ul>
              <li>You will pay for all work completed up to the termination date</li>
              <li>We will deliver all completed work and materials</li>
              <li>Any prepaid amounts for work not yet started will be refunded</li>
            </ul>
          </div>
        </motion.section>

        <motion.section
          className="legal-section"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <h2 className="section-title">Contact Us</h2>
          <div className="section-content">
            <div className="contact-info">
              <h3>Questions About These Terms?</h3>
              <p>If you have any questions about these Terms of Service, please contact us:</p>
              <p>Email: <a href="mailto:Info@codyssey.services">Info@codyssey.services</a></p>
              <p>Phone: <a href="tel:+917634820773">+91 763-482-0773</a></p>
            </div>
          </div>
        </motion.section>

        <motion.div
          className="last-updated"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.3 }}
        >
          Last updated: November 2025
        </motion.div>
      </div>
    </div>
  );
};

export default TermsOfService;