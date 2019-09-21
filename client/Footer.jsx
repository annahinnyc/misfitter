import React from "react";

const Footer = (props) => (
  <footer className="page-footer transparent">
    <div className="container blue-grey-text darken-3-text">
      © {new Date().getFullYear()} Misfitter.
    </div>
  </footer>
);

export default Footer;