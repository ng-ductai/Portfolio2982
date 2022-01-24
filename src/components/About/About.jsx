import React from "react";
import Skillcard from "../skillCard/skillCard";
import { motion } from "framer-motion";
import skills from "../../utils/about";
import "./index.scss";

const About = () => {
  const about_variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.2,
        duration: 0.6,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        ease: "easeInOut",
      },
    },
  };
  return (
    <motion.div
      className="about"
      variants={about_variants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <p className="about__intro">
        I describe myself as someone who's persistant, a quick learner and loves
        problem solving by using simple and scalable solutions.
      </p>
      <div className="container about__container">
        <p className="about__container-heading">What I offer</p>
        <div className="row">
          {skills.map((skill) => (
            <Skillcard skill={skill} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default About;
