"use client";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation items with explicit routes
  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Case Studies', href: '/case-studies' }
  ];

  const cta = { label: 'Start Your Journey', href: '/contact' }; // Assumed CTA target

  const handleMobileNavClick = () => setIsMobileMenuOpen(false);

  return (
    <motion.nav
      className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="nav-container">
        <Link href="/">
          <motion.div 
            className="nav-logo"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="logo-wrapper">
              <div className="logo-icon">
                <div className="logo-circle"></div>
                <div className="logo-code">{'</>'}</div>
              </div>
              <span className="logo-text">CODYSSEY</span>
            </div>
          </motion.div>
        </Link>

        <div className="nav-links">
          {navItems.map((item) => (
            <motion.div
              key={item.href}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Link href={item.href} className="nav-link">
                {item.label}
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="cta-button-wrapper"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link href={cta.href} className="cta-button">
            {cta.label}
          </Link>
        </motion.div>

        <button 
          className="mobile-menu-button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <div className={`menu-icon ${isMobileMenuOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div 
        className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}
        initial={{ opacity: 0, height: 0 }}
        animate={{ 
          opacity: isMobileMenuOpen ? 1 : 0, 
          height: isMobileMenuOpen ? 'auto' : 0 
        }}
        transition={{ duration: 0.3 }}
      >
        {navItems.map((item) => (
          <motion.div
            key={item.href}
            className="mobile-nav-link-wrapper"
            whileHover={{ x: 10 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleMobileNavClick}
          >
            <Link href={item.href} className="mobile-nav-link">
              {item.label}
            </Link>
          </motion.div>
        ))}
        <motion.div
          className="mobile-cta-button-wrapper"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleMobileNavClick}
        >
          <Link href={cta.href} className="mobile-cta-button">
            {cta.label}
          </Link>
        </motion.div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;