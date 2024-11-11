import React from "react";

const Footer = ({ title }) => {
  return (
    <footer
      className="bg-dark text-white text-center py-3"
      style={{ width: "100%" }}
    >
      <div className="container">
        <p className="mb-0">{title}</p>
      </div>
    </footer>
  );
};
export default Footer;
