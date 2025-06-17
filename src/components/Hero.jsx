import React from "react";
import { motion } from "framer-motion";
import "./Hero.scss";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { MdEmail } from "react-icons/md";

const title = "Thomas\u00A0Smidt";
const subTitle = "<\u00A0student \u00A0full-stack\u00A0developer\u00A0>";

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
      duration: 0.1,
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
            display: "flex",
            gap: "0.05em",
          }}
        >
          {title.split("").map((char, index) => (
            <motion.span key={index} variants={letterVariants}>
              {char}
            </motion.span>
          ))}
        </motion.h1>

        <motion.h1
          id="hero-sub-title"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{
            borderBottom: "2px solid var(--secondary-color)",
            borderRadius: "5px",
            paddingBottom: "0.1em",
            marginBottom: "0.5em",
            display: "flex",
            gap: "0.05em",
          }}
        >
          {subTitle.split("").map((char, index) => (
            <motion.span key={index} variants={letterVariants}>
              {char}
            </motion.span>
          ))}
        </motion.h1>
        <motion.div
          className="location"
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <FaLocationDot className="location-icon" />
          <p>Rødovre, Denmark</p>
        </motion.div>
        <motion.div
          className="mail"
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <MdEmail className="mail-icon" />
          <p>smidt592@gmail.com</p>
        </motion.div>
        <motion.p
          className="hero-desc"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 1.5 }}
        >
          I'm a programming student studying to become a full-stack developer at
          TEC, and I'm currently looking for an apprenticeship where I can
          further develop my career and skills, and create a more comfortable
          life for my wife and baby daughter.
        </motion.p>

        <motion.p
          className="hero-desc"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1.5 }}
        >
          I'm a cheerful and quick-learning employee with skills in both backend
          and frontend development.
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;
