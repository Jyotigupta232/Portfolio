import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaFileDownload, FaCode, FaBrain, FaShieldAlt } from 'react-icons/fa';

const Hero = () => {
  return (
    <section
      id="hero"
      style={{
        minHeight: '90vh',
        display: 'grid',
        alignItems: 'center',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '32px',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
        className="glass-card"
      >
        <div className="glass-content" style={{ padding: '40px' }}>
          <div className="pill pulse-dot" style={{ marginBottom: '18px', width: 'fit-content' }}>
            <span role="img" aria-label="spark">✨</span> Building intelligent & secure experiences
          </div>
          <h1 style={{ fontSize: 'clamp(2.6rem, 4vw, 3.6rem)', lineHeight: 1.1, marginBottom: '14px' }}>
            Jyoti <span className="gradient-text">Gupta</span>
          </h1>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', marginBottom: '22px' }}>
            Computer Science Student | <span className="gradient-text">ML & Blockchain Enthusiast</span>
          </p>
          <p className="tagline" style={{ marginBottom: '28px' }}>
            Computer Science student passionate about building intelligent systems and secure digital solutions.
            I enjoy working with Machine Learning, Blockchain applications, and data-driven problem solving while
            continuously improving my development skills.
          </p>
          <div className="btn-row" style={{ marginBottom: '20px' }}>
            <a href="#projects" className="btn-primary">
              <FaCode /> View Projects
            </a>
            <a href="/resume.pdf" className="btn-secondary">
              <FaFileDownload /> Download Resume
            </a>
            <a href="https://github.com/jyotigupta" target="_blank" rel="noopener noreferrer" className="btn-secondary" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/jyotigupta" target="_blank" rel="noopener noreferrer" className="btn-secondary" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
          </div>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <span className="chip"><FaBrain /> Machine Learning</span>
            <span className="chip"><FaShieldAlt /> Blockchain Security</span>
            <span className="chip">Data Analysis</span>
          </div>
        </div>
      </motion.div>

      <div style={{ display: 'grid', gap: '18px' }}>
        <motion.div
          className="glass-card float"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="glass-content" style={{ padding: '26px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
              <span style={{ color: 'var(--text-secondary)' }}>Current Focus</span>
              <span className="chip" style={{ background: 'rgba(124, 93, 255, 0.12)', borderColor: 'rgba(124, 93, 255, 0.4)' }}>2026</span>
            </div>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '4px' }}>Intelligent Systems + Web3</h3>
            <p style={{ color: 'var(--text-secondary)' }}>Blending ML-driven insights with secure blockchain flows.</p>
          </div>
        </motion.div>

        <motion.div
          className="glass-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
        >
          <div className="glass-content" style={{ padding: '26px', display: 'grid', gap: '10px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span className="pill" style={{ padding: '8px 12px' }}>Highlights</span>
              <span className="chip">Collaborative</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '10px' }}>
              <div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Projects</p>
                <h4 style={{ fontSize: '1.4rem' }}>ML • Blockchain</h4>
              </div>
              <div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Strength</p>
                <h4 style={{ fontSize: '1.4rem' }}>Data-first thinking</h4>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
