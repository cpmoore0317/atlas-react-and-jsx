import React from "react";
import copyImage from "../assets/copy.svg";

const CopyLink = ({ link }) => {
  const handleClick = () => {
    navigator.clipboard.writeText(link);
    alert("Link copied to clipboard!");
  };

  return (
    <img
      src={copyImage}
      alt="Copy Link"
      className="copy"
      onClick={handleClick}
      style={{ cursor: "pointer" }}
    />
  );
};

export default CopyLink;
