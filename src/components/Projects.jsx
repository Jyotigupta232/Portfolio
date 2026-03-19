import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaMobileAlt, FaLock } from 'react-icons/fa';

const projects = [
  {
    title: "Smartphone Addiction Analysis",
    icon: <FaMobileAlt />,
    tech: ["Python", "Scikit-learn", "Seaborn", "Matplotlib", "NumPy"],
    description:
      "A Machine Learning project designed to analyze smartphone usage behavior and predict addiction levels. The system performs data preprocessing, feature engineering, and exploratory data analysis to identify patterns in user behavior. Multiple classification models were trained and evaluated using metrics such as accuracy and F1-score to generate meaningful insights from the dataset.",
    github: "https://github.com/jyotigupta/smartphone-addiction",
    liveDemo: "#",
    ctaLabel: "Live Demo",
  },
  {
    title: "Blockchain Based Voting System",
    icon: <FaLock />,
    tech: ["Python", "Flask", "HTML", "CSS", "Blockchain"],
    description:
      "A decentralized online voting system that ensures transparency and security in digital elections. The application implements cryptographic hashing, block creation, and chain validation mechanisms to maintain an immutable ledger of votes. It also includes secure authentication, role-based access control, and real-time vote recording and result visualization.",
    github: "https://github.com/jyotigupta/blockchain-voting",
    liveDemo: "#",
    ctaLabel: "Case Study",
  },
];

const Projects = () => {
  return (
    <section id="projects">
      <div className="section-heading">
        <h2>Featured <span className="gradient-text">Projects</span></h2>
        <p>Large glass cards with rich context, tech stack chips, and quick access to repos.</p>
      </div>
      <div className="projects-grid">
        {projects.map((proj, idx) => (
          <motion.div
            key={proj.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: idx * 0.1 }}
            className="glass-card"
            style={{ overflow: 'hidden' }}
          >
            <div
              className="glass-content"
              style={{
                padding: '32px',
                display: 'grid',
                gridTemplateColumns: 'minmax(240px, 1fr) 1.6fr',
                gap: '24px',
                alignItems: 'center',
              }}
            >
              <div
                style={{
                  width: '100%',
                  minHeight: '230px',
                  borderRadius: '18px',
                  background: 'linear-gradient(160deg, rgba(124,93,255,0.18), rgba(24,200,255,0.12))',
                  display: 'grid',
                  placeItems: 'center',
                  fontSize: '3rem',
                }}
              >
                {proj.icon}
              </div>
              <div>
                <h3 style={{ fontSize: '1.9rem', marginBottom: '10px' }}>{proj.title}</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '14px' }}>
                  {proj.tech.map((t) => (
                    <span key={t} className="chip">{t}</span>
                  ))}
                </div>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '18px' }}>
                  {proj.description}
                </p>
                <div className="btn-row">
                  <a href={proj.github} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                    <FaGithub /> GitHub
                  </a>
                  {proj.liveDemo && (
                    <a href={proj.liveDemo} className="btn-secondary">
                      <FaExternalLinkAlt /> {proj.ctaLabel}
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
