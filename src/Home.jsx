import React from "react";
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { FaDownload } from 'react-icons/fa';

function Home() {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.3]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.2]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <div className="home" ref={ref} id="home">
      <motion.div className="blur-circle1" style={{ scale, opacity, y }} />
      <motion.div className="blur-circle2" style={{ scale, opacity, y }} />

      <motion.div
        className="home-content"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.img
          src="./media/22A91A05K8.png"
          alt="Karthik"
          className="profile-img"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />

        <div className="home-text">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Hey, I'm Karthik
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <span style={{ color: '#ccc', fontWeight: 'bold' }}>
              <Typewriter
                words={['Full-Stack Developer', 'React & Node.js Expert ', 'Firebase + MongoDB ', 'Always Learning...']}
                loop
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={40}
                delaySpeed={1500}
              />
            </span>
          </motion.p>

          <motion.a
            href="./media/new_resume.pdf"
            download
            className="resume-btn"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <center><FaDownload style={{ marginRight: '8px' }} /></center> Download Resume
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
}

export default Home;
