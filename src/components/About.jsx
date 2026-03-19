import React from 'react';
import { motion } from 'framer-motion';
import { FaUserAstronaut } from 'react-icons/fa';

const MotionDiv = motion.div;

const About = () => {
  return (
    <section id="about">
      <div className="section-heading">
        <h2>About <span className="gradient-text">Me</span></h2>
        <p>Card layout with a profile highlight and a concise, professional overview.</p>
      </div>

      <MotionDiv
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="glass-card"
        style={{
          padding: '32px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '28px',
          alignItems: 'center',
        }}
      >
        <div className="glass-content" style={{ position: 'relative' }}>
          <div
            style={{
              width: '100%',
              aspectRatio: '1',
              borderRadius: '20px',
              background: 'linear-gradient(140deg, rgba(124,93,255,0.5), rgba(24,200,255,0.5))',
              display: 'grid',
              placeItems: 'center',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 25px 60px rgba(0,0,0,0.4)',
            }}
          >
            <div
              style={{
                position: 'absolute',
                inset: '14%',
                borderRadius: '50%',
                background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.35), transparent 55%)',
                filter: 'blur(2px)',
              }}
            />
            <FaUserAstronaut size={110} color="#0b1020" />
          </div>
        </div>

        <div className="glass-content">
          <p className="pill" style={{ marginBottom: '16px', width: 'fit-content' }}>
            Computer Science Undergraduate - Lovely Professional University
          </p>
          <p className="tagline" style={{ marginBottom: '14px' }}>
            I am a Computer Science undergraduate at Lovely Professional University with a strong interest in Machine Learning, Blockchain systems, and data analysis. I enjoy exploring how technology can solve real-world problems through intelligent applications and secure systems.
          </p>
          <p className="tagline" style={{ marginBottom: '14px' }}>
            I have experience working with Python, Java, and C++, along with tools such as MySQL, Git, and Jupyter Notebook. Through my projects I have applied concepts from Data Science, Blockchain architecture, and software development to build practical solutions and analyze complex datasets.
          </p>
          <p className="tagline">
            I am always eager to learn new technologies, solve challenging problems, and collaborate on impactful projects.
          </p>
        </div>
      </MotionDiv>
    </section>
  );
};

export default About;
