import React from "react";

const Footer = ({ title, year }) => {
  return (
    <footer
      className="bg-dark text-white text-center py-3"
      style={{ width: "100%" }}
    >
      <div className="container">
        <p className="mb-0">
          {title}
          {year}
        </p>
      </div>
    </footer>
  );
};
export default Footer;
