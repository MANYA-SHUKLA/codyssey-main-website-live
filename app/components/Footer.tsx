'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';
import './Footer.css';
import Image from "next/image";

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setIsSubscribed(true);
        setEmail('');
      } else {
        const data = await response.json();
        setError(data.error || 'Failed to subscribe. Please try again.');
      }
    } catch (error) {
      setError('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        {/* Newsletter Section */}
        <motion.div
          className="newsletter-section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="newsletter-content">
            <h3>Stay Updated with CODYSSEY</h3>
            <p>Get the latest insights on web development, design trends, and digital innovation delivered to your inbox.</p>
            
            {isSubscribed ? (
              <motion.div
                className="success-message"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                <div className="success-icon">🎉</div>
                <div>
                  <p className="success-title">Welcome to the CODYSSEY Community!</p>
                  <p className="success-description">
                    Thank you for subscribing! We've sent a confirmation email to your inbox. 
                    Get ready for valuable insights and updates.
                  </p>
                </div>
              </motion.div>
            ) : (
              <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
                <div className="input-group">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="newsletter-input"
                    disabled={isSubmitting}
                  />
                  <motion.button
                    type="submit"
                    className="newsletter-button"
                    disabled={isSubmitting}
                    whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="spinner"></div>
                        Subscribing...
                      </>
                    ) : (
                      'Subscribe Now'
                    )}
                  </motion.button>
                </div>
                {error && (
                  <motion.p
                    className="error-message"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {error}
                  </motion.p>
                )}
                <p className="newsletter-note">
                  We respect your privacy. Unsubscribe at any time. No spam, ever.
                </p>
              </form>
            )}
          </div>
        </motion.div>

        {/* Main Footer Content */}
        <div className="footer-content">
          <div className="footer-grid">
            <motion.div
              className="footer-brand"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Link href="/" className="brand-logo" aria-label="Go to homepage">
                <Image 
  src="/Codyssey.jpeg"
  alt="Codyssey Logo"
  width={60}
  height={60}
  className="footer-logo-image"
/>
<span className="logo-text">CODYSSEY</span>

              </Link>
              <p className="brand-description">
                Transforming ideas into exceptional digital experiences through 
                innovative web solutions and cutting-edge technology.
              </p>
              <div className="social-links">
                <a
                  href="https://www.linkedin.com/company/codyssey-services/about/"
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="CODYSSEY on LinkedIn"
                  title="LinkedIn"
                >
                  <svg viewBox="0 0 24 24" width="20" height="20">
                    <path fill="currentColor" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a
  href="https://wa.me/917634820773"
  className="social-link"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Chat on WhatsApp"
  title="WhatsApp"
>
  <svg width="20" height="20" viewBox="0 0 32 32" fill="currentColor">
    <path d="M16.04 2.003c-7.732 0-14 6.268-14 14 0 2.466.641 4.851 1.858 6.96L2 30l7.207-1.878a13.94 13.94 0 006.833 1.741h.004c7.732 0 14-6.268 14-14s-6.268-14-14-14zm0 25.5h-.003a11.48 11.48 0 01-5.84-1.6l-.418-.248-4.28 1.115 1.144-4.166-.272-.427A11.46 11.46 0 014.54 16c0-6.315 5.145-11.46 11.46-11.46S27.46 9.685 27.46 16s-5.145 11.503-11.42 11.503zM22.11 19.63c-.307-.154-1.81-.893-2.09-.994-.28-.1-.485-.154-.69.154-.204.307-.79.994-.97 1.198-.18.205-.357.23-.664.077-.307-.154-1.296-.478-2.468-1.523-.912-.813-1.53-1.816-1.71-2.123-.18-.307-.02-.472.135-.626.138-.137.307-.357.46-.536.154-.18.205-.307.307-.51.102-.205.051-.38-.026-.536-.077-.154-.69-1.663-.945-2.28-.25-.6-.504-.52-.69-.53l-.59-.01c-.204 0-.536.077-.817.38-.28.307-1.07 1.045-1.07 2.55 0 1.504 1.096 2.958 1.25 3.162.154.205 2.155 3.293 5.227 4.62.73.315 1.298.503 1.74.643.73.232 1.395.2 1.92.121.586-.087 1.81-.74 2.068-1.455.258-.717.258-1.33.18-1.455-.077-.128-.282-.205-.59-.36z"/>
  </svg>
</a>
              </div>
            </motion.div>

            <motion.div
              className="footer-links"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Link href="/services" aria-label="Go to Services page">
                <h4>Services</h4>
              </Link>
              <ul>
                <li><Link href="/services">Web Development</Link></li>
                <li><Link href="/services">E-Commerce</Link></li>
                <li><Link href="/services">UI/UX Design</Link></li>
                <li><Link href="/services">API Development</Link></li>
              </ul>
            </motion.div>

            <motion.div
              className="footer-links"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4>Company</h4>
              <ul>
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/case-studies">Case Studies</Link></li>
                <li><Link href="/services">Services</Link></li>
                <li><Link href="/contact">Book your Free Consultation</Link></li>
              </ul>
            </motion.div>

            <motion.div
              className="footer-links"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4>Support</h4>
              <ul>
                <li><Link href="/contact">Help Center</Link></li>
                <li><Link href="/privacy">Privacy Policy</Link></li>
                <li><Link href="/terms">Terms of Service</Link></li>
                <li><Link href="/cookies">Cookie Policy</Link></li>
              </ul>
            </motion.div>

            <motion.div
              className="footer-links"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h4>Contact Info</h4>
              <ul>
                <li>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span>📧</span>
                    <span>Info@codyssey.services</span>
                  </div>
                </li>
                <li>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span>🌐</span>
                    <span>India & Worldwide</span>
                  </div>
                </li>
                <li>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span>🕒</span>
                    <span>Within 12 hours</span>
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; {currentYear} CODYSSEY. All rights reserved.</p>
            <div className="footer-bottom-links">
              <Link href="/privacy">Privacy Policy</Link>
              <Link href="/terms">Terms of Service</Link>
              <Link href="/cookies">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;