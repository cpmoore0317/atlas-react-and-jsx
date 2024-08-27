import React from "react";
import Greeting from "./Greeting";
import SocialLinks from "./SocialLinks";
import "./Header.css"; // Assuming you might want to style this component separately

const Header = () => {
  return (
    <nav>
      <Greeting />
      <SocialLinks />
    </nav>
  );
};

export default Header;
