import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaFlagCheckered } from 'react-icons/fa';

const achievements = [
  { icon: <FaTrophy />, text: "🏆 Solved 100+ coding problems across competitive platforms." },
  { icon: <FaFlagCheckered />, text: "🏆 5th Place in CTF Hackathon for problem-solving skills." },
];

const Achievements = () => {
  return (
    <section id="achievements">
      <div className="section-heading">
        <h2>Key <span className="gradient-text">Achievements</span></h2>
        <p>Concise highlight cards with motion and iconography.</p>
      </div>
      <div className="grid auto-grid">
        {achievements.map((item, idx) => (
          <motion.div
            key={item.text}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.08 }}
            className="glass-card"
          >
            <div className="glass-content" style={{ padding: '22px', display: 'flex', gap: '14px', alignItems: 'center' }}>
              <div className="chip" style={{ fontSize: '1.2rem' }}>{item.icon}</div>
              <p style={{ fontSize: '1.05rem', fontWeight: 600 }}>{item.text}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
