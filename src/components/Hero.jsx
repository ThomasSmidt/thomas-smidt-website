import React from 'react';
import { motion } from 'framer-motion';
import './Hero.scss';

const text = "Welcome!";

const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const letterVariants = {
  hidden: { opacity: 0, y: `0.25em` },
  visible: {
    opacity: 1,
    y: `0em`,
    transition: {
      duration: 0.3,
      ease: [0.2, 0.65, 0.3, 0.9],
    },
  },
};

const Hero = () => {
  return (
    <section id="hero">
      <div id="hero-desc-container">
        <motion.h1
          id="hero-title"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ 
            display: 'flex', 
            gap: '0.05em',
            justifyContent: 'center'
          }}
        >
          {text.split("").map((char, index) => (
            <motion.span key={index} variants={letterVariants}>
              {char}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          className="hero-desc"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .1, duration: 1.5 }}
        >
          I'm a programming student studying to become a full-stack developer at TEC,
          and I'm currently looking for an apprenticeship where I can further develop my career and skills,
          and create a more comfortable life for my wife and baby daughter.
        </motion.p>

        <motion.p
          className="hero-desc"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .3,duration: 1.5 }}
        >
          I have been programming since I enrolled at TEC in 2022. I chose to study here because I originally wanted to be an IT Supporter,
          but I tried programming in one of the classes and instantly fell in love with the process and possibilities of programming, so I made the switch.
        </motion.p>

      </div>
    </section>
  );
};

export default Hero;
