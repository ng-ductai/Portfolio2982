import React from "react";
import "./index.scss";
import Bar from "../Bar/Bar";
import { tools, languages } from "../../utils/resume";
import { motion } from "framer-motion";

const Resume = () => {
  const resume_variants = {
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
      className="container resume"
      variants={resume_variants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="row">
        <div className="col-lg-6 resume-card">
          <h3 className="resume-card__heading">Education</h3>
          <div className="resume-card__body">
            <h4 className="resume-card__title">Information Technology</h4>
            <p className="resume-card__name">
              Ho Chi Minh City University of Transport (2018-2022)
            </p>
            <p className="resume-card__details">
              I am currently learning Information Technology at Ho Chi Minh City
              University of Transport.
            </p>
          </div>
        </div>
        <div className="col-lg-6 resume-card">
          <h3 className="resume-card__heading">Experience</h3>
          <div className="resume-card__body">
            <h4 className="resume-card__title">No experience</h4>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-6 resume-languages">
          <h4 className="resume-language__heading">Language and Framework</h4>
          <div className="resume-language__body mt-3">
            {languages.map((language) => (
              <Bar value={language} />
            ))}
          </div>
        </div>
        <div className="col-lg-6 resume-languages">
          <h4 className="resume-language__heading">Tools and Softwares</h4>
          <div className="resume-language__body mt-3">
            {tools.map((tool) => (
              <Bar value={tool} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Resume;
