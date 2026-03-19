import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaFileDownload } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact">
      <motion.div
        className="glass-card"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ overflow: 'hidden' }}
      >
        <div className="glass-content" style={{ padding: '32px', textAlign: 'center' }}>
          <p className="pill" style={{ margin: '0 auto 18px', width: 'fit-content' }}>Let’s collaborate</p>
          <h2 style={{ fontSize: '2.2rem', marginBottom: '12px' }}>
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '26px' }}>
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <div className="btn-row" style={{ justifyContent: 'center' }}>
            <a href="mailto:jyoti.gupta@example.com" className="btn-primary">
              <FaEnvelope /> Email
            </a>
            <a href="https://linkedin.com/in/jyotigupta" target="_blank" rel="noopener noreferrer" className="btn-secondary">
              <FaLinkedin /> LinkedIn
            </a>
            <a href="https://github.com/jyotigupta" target="_blank" rel="noopener noreferrer" className="btn-secondary">
              <FaGithub /> GitHub
            </a>
            <a href="/resume.pdf" className="btn-secondary">
              <FaFileDownload /> Resume
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
