import React from "react";
import linkedinImage from "../assets/linkedin.svg";
import githubImage from "../assets/github.svg";
import "./SocialLinks.css"; // Assuming you might want to style this component separately

const SocialLinks = () => {
  return (
    <div className="social-links">
      <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
        <img src={linkedinImage} alt="LinkedIn" />
      </a>
      <a href="https://github.com/your-repository" target="_blank" rel="noopener noreferrer">
        <img src={githubImage} alt="GitHub" />
      </a>
    </div>
  );
};

export default SocialLinks;
