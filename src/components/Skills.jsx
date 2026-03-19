import React from 'react';
import { motion } from 'framer-motion';
import { FaCodeBranch, FaCogs, FaDatabase } from 'react-icons/fa';

const skillGroups = [
  {
    title: "Languages",
    icon: <FaCodeBranch />,
    skills: ["C++", "Python", "Java"],
  },
  {
    title: "Tools & Platforms",
    icon: <FaCogs />,
    skills: ["MySQL", "Git", "GitHub", "VS Code", "Jupyter Notebook", "MS Excel"],
  },
  {
    title: "Core CS",
    icon: <FaDatabase />,
    skills: ["DBMS", "Operating Systems", "Computer Networks", "SQL", "OOP"],
  },
];

const Skills = () => {
  return (
    <section id="skills">
      <div className="section-heading">
        <h2>Technical <span className="gradient-text">Skills</span></h2>
        <p>Grouped into languages, tooling, and core computer science foundations.</p>
      </div>
      <div className="grid auto-grid">
        {skillGroups.map((group, idx) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.08, duration: 0.55 }}
            className="glass-card"
          >
            <div className="glass-content" style={{ padding: '26px', display: 'grid', gap: '14px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div className="chip" style={{ fontSize: '1.1rem' }}>{group.icon}</div>
                <h3 style={{ fontSize: '1.35rem' }}>{group.title}</h3>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {group.skills.map((skill) => (
                  <span key={skill} className="chip" style={{ background: 'rgba(124,93,255,0.08)', borderColor: 'rgba(124,93,255,0.2)' }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
