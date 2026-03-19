import React from 'react';
import { motion } from 'framer-motion';
import { FaUniversity } from 'react-icons/fa';

const education = [
  {
    institution: "Lovely Professional University",
    degree: "B.Tech Computer Science",
    details: "CGPA: 8.27",
  },
  {
    institution: "Vidyagyan School",
    degree: "Intermediate",
    details: "88.2%",
  },
  {
    institution: "Vidyagyan School",
    degree: "Matriculation",
    details: "94.6%",
  },
];

const Education = () => {
  return (
    <section id="education">
      <div className="section-heading">
        <h2>Education <span className="gradient-text">Timeline</span></h2>
        <p>Structured timeline with milestone cards and subtle connectors.</p>
      </div>
      <div style={{ position: 'relative', maxWidth: '900px', margin: '0 auto' }}>
        <div style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', top: 0, bottom: 0, width: '2px', background: 'rgba(255, 255, 255, 0.08)' }} />
        {education.map((item, idx) => (
          <motion.div
            key={item.institution + idx}
            initial={{ opacity: 0, x: idx % 2 === 0 ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              display: 'flex',
              justifyContent: idx % 2 === 0 ? 'flex-end' : 'flex-start',
              paddingLeft: idx % 2 === 0 ? '0' : '52%',
              paddingRight: idx % 2 === 0 ? '52%' : '0',
              marginBottom: '34px',
            }}
          >
            <div className="glass-card" style={{ padding: '22px', width: '92%', position: 'relative' }}>
              <div className="glass-content" style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <div className="chip" style={{ fontSize: '1.05rem' }}><FaUniversity /></div>
                <div>
                  <h3 style={{ fontSize: '1.25rem' }}>{item.institution}</h3>
                  <p style={{ color: 'var(--accent-primary)', fontWeight: 600 }}>{item.degree}</p>
                  <p style={{ color: 'var(--text-secondary)' }}>{item.details}</p>
                </div>
              </div>
              <div
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: idx % 2 === 0 ? '100%' : 'auto',
                  right: idx % 2 === 0 ? 'auto' : '100%',
                  width: '20px',
                  height: '2px',
                  background: 'rgba(255, 255, 255, 0.14)',
                  transform: 'translateY(-50%)',
                }}
              />
              <div
                className="pulse-dot"
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: idx % 2 === 0 ? 'calc(100% + 18px)' : 'auto',
                  right: idx % 2 === 0 ? 'auto' : 'calc(100% + 18px)',
                  transform: 'translate(-50%, -50%)',
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  background: 'linear-gradient(120deg, var(--accent-primary), var(--accent-secondary))',
                  boxShadow: '0 0 0 6px rgba(124,93,255,0.25)',
                }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
