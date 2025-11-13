'use client';
import { motion } from 'framer-motion';
import './GlobalPresence.css';

const GlobalPresence = () => {
  const locations = [
    {
      country: 'India',
      flag: '🇮🇳',
      description: 'Our headquarters and primary development center',
      clients: '5+ Active Projects',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      country: 'United States',
      flag: '🇺🇸',
      description: 'Serving clients across North America with custom solutions',
      clients: '3+ Enterprise Clients',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
      country: 'Europe',
      flag: '🇪🇺',
      description: 'Expanding our reach to European markets with localized solutions',
      clients: '2+ Strategic Partners',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    },
    {
      country: 'Australia',
      flag: '🇦🇺',
      description: 'Growing presence in the APAC region with innovative projects',
      clients: '1+ Launch Partners',
      gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
    }
  ];

  return (
    <section id="global-presence" className="global-presence-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Global Presence</h2>
          <p className="section-subtitle">
            Serving clients worldwide with localized expertise and global standards
          </p>
        </motion.div>

        <div className="global-content">
          <motion.div
            className="global-map"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="map-visual">
              <div className="world-map">
                <div className="location-dot dot-1"></div>
                <div className="location-dot dot-2"></div>
                <div className="location-dot dot-3"></div>
                <div className="location-dot dot-4"></div>
                <div className="connection-line line-1"></div>
                <div className="connection-line line-2"></div>
                <div className="connection-line line-3"></div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="global-locations"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3>Where We Operate</h3>
            <p className="global-description">
              From our base in India, we've expanded our services globally, 
              delivering exceptional digital solutions to clients across continents.
            </p>
            
            <div className="locations-grid">
              {locations.map((location, index) => (
                <motion.div
                  key={location.country}
                  className="location-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, transition: { duration: 0.3 } }}
                >
                  <div className="location-header">
                    <span className="location-flag">{location.flag}</span>
                    <h4>{location.country}</h4>
                  </div>
                  <p className="location-description">{location.description}</p>
                  <div 
                    className="location-stats"
                    style={{ background: location.gradient }}
                  >
                    {location.clients}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="global-mission"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="mission-content">
            <h3>Our Global Mission</h3>
            <p>
              To democratize access to world-class digital solutions, making cutting-edge 
              technology accessible to businesses of all sizes, everywhere in the world.
            </p>
            <div className="mission-stats">
              <div className="mission-stat">
                <div className="stat-value">4+</div>
                <div className="stat-label">Continents</div>
              </div>
              <div className="mission-stat">
                <div className="stat-value">24/7</div>
                <div className="stat-label">Support</div>
              </div>
              <div className="mission-stat">
                <div className="stat-value">100%</div>
                <div className="stat-label">Remote</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GlobalPresence;