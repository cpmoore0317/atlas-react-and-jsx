import React from "react";
import linkedinImage from "../assets/linkedin.svg";
import githubImage from "../assets/github.svg";

const SocialLinks = () => {
  return (
    <div className="social-links">
      <a href="https://www.linkedin.com/in/parkermoore317/" target="_blank" rel="noopener noreferrer">
        <img src={linkedinImage} alt="LinkedIn" />
      </a>
      <a href="https://github.com/cpmoore0317/atlas-react-and-jsx" target="_blank" rel="noopener noreferrer">
        <img src={githubImage} alt="GitHub" />
      </a>
    </div>
  );
};

export default SocialLinks;
