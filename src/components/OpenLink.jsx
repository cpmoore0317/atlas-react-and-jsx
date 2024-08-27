import React from "react";
import openImage from "../assets/open.svg";

const OpenLink = ({ link }) => {
  const handleClick = () => {
    window.open(link, "_blank", "noopener,noreferrer");
  };

  return (
    <a onClick={handleClick} style={{ cursor: "pointer" }}>
      <img src={openImage} alt="Open Link" />
    </a>
  );
};

export default OpenLink;
