import React from "react";
import { GitHub } from "@material-ui/icons";

const ProjectCard = ({
  project: { name, image, deployed_url, github_url },
}) => {
  return (
    <div className="projectrCard col-md-6 col-lg-4 my-2">
      <figure className="projectCard__wrapper">
        <a href={deployed_url} target="_blank" rel="noopener noreferrer">
          <img src={image} alt={name} className="projectCard__wrapper-image" />
        </a>
        <div className="projectCard__wrapper-title">
          <a href={github_url} target="_blank" rel="noopener noreferrer">
            <GitHub
              alt="github link"
              className="projectCard__wrapper-title_icon"
            />
            <span> {name} </span>
          </a>
        </div>
      </figure>
    </div>
  );
};

export default ProjectCard;
