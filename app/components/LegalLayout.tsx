'use client';
import { motion } from 'framer-motion';

interface LegalLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
}

const LegalLayout = ({ children, title, subtitle }: LegalLayoutProps) => {
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
            {title}
          </motion.h1>
          <motion.p
            className="legal-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {subtitle}
          </motion.p>
        </div>
      </section>

      {children}
    </div>
  );
};

export default LegalLayout;