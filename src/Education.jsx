import React from 'react';
import { motion } from 'framer-motion';

function Education() {
  const education = [
    {
      year: '2022-Present',
      role: 'B.Tech in Computer Science',
      marks: '8.39/10.0 CGPA',
      school: 'Aditya Engineering College',
    },
    {
      year: '2020-2022',
      role: 'MPC - Intermediate',
      marks: '93/100 %',
      school: 'Narayana Junior College',
    },
    {
      year: '2019-2020',
      role: '10th Grade',
      marks: '10.0/10.0 CGPA',
      school: 'Narayana EM School',
    },
  ];

  return (
    <div className="education">
      <h1 className="edu-heading">EDUCATIONAL JOURNEY</h1>

      <div className="edu-wrapper">
        <div className="edu-line"></div>

        <div className="edu-items">
          {education.map((item, index) => (
            <motion.div
              key={index}
              className="edu-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{scale: 1.05,duration:0.1}}
            >
              <div className="edu-dot"></div>
              <div className="edu-content">
                <h2>{item.year}</h2>
                <p>{item.role} | <strong>{item.marks}</strong></p>
                <p>{item.school}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Education;
