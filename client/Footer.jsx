import React from "react";

const Footer = (props) => (
  <footer className="page-footer transparent z-depth-4">
    <div className="container blue-grey-text darken-3-text">
      © {new Date().getFullYear()} Misfitter.
    </div>
  </footer>
);

module.exports = Footer;