import React from 'react';
import { motion } from 'framer-motion';
import { FaCertificate } from 'react-icons/fa';

const certificates = [
  "Virtual Internship in Data Science – Skillcraft",
  "Gen AI Academy – Google Cloud",
  "Databases and SQL for Data Science – IBM",
  "Cloud Computing – NPTEL (IIT Kharagpur)",
];

const Certificates = () => {
  return (
    <section id="certificates">
      <div className="section-heading">
        <h2>Certificates <span className="gradient-text">& Training</span></h2>
        <p>Scrollable glass cards with credentials and learning highlights.</p>
      </div>
      <div className="horizontal-scroll">
        {certificates.map((cert, idx) => (
          <motion.div
            key={cert}
            className="glass-card"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.05 }}
            style={{ minWidth: '280px', flex: '0 0 auto' }}
          >
            <div className="glass-content" style={{ padding: '24px', display: 'grid', gap: '12px', justifyItems: 'center' }}>
              <div className="chip" style={{ fontSize: '1.6rem' }}><FaCertificate /></div>
              <p style={{ fontWeight: 600, textAlign: 'center' }}>{cert}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
