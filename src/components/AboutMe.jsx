import React from "react";
import profileImage from "../assets/profile-img.png"; // Replace with the actual image path

const AboutMe = () => {
  return (
    <div className="about-me">
      <img src={profileImage} alt="Parker Moore" className="profile-picture" />
      <p>
        Hi, I'm Parker Moore! I'm currently in the Full Stack Web Development spec, and I'm in my fifth trimester. 
        I love working with HTML, CSS, JavaScript, React, and Node.js, but I'm also keen on exploring new technologies.
        After school, I aim to dive into back-end development, possibly focusing on API design and cloud computing.
        When I'm not coding, I enjoy gaming, exercising, and playing the piano. 
      </p>
    </div>
  );
};

export default AboutMe;
