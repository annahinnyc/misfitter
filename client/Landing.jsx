import React from "react";
import About from "./About.jsx";

class Landing extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className="landing">
        <div className="parallax-container valign-wrapper">
          <div className="container">
            <h3 className="landing-tagline valign white-text animated zoomIn">Lorem ipsum dolor sit amet.</h3>
            <a
              href="/upload"
              className="animated fadeInUpBig btn-large tooltipped waves-effect cyan accent-4 hoverable"
              data-position="bottom"
              data-delay="50"
              data-tooltip="Upload a script"
            >Get Started</a>
          </div>
          <div className="parallax"><img src="media/landing.jpg"/></div>
        </div>
        <br></br>
        <div className="container wow fadeInUp">
          <div className="parallax-container highlight valign-wrapper z-depth-4">
            <div className="container">
              <h3 className="valign landing-text white-text">Get Misfitter</h3>
              <div className="landing-text flow-text white-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              </div>
            </div>
            <div className="parallax"><img src="media/work.jpg" /></div>
          </div>
        </div>
        <br></br>
        <div className="container wow fadeInRight">
          <div className="parallax-container highlight valign-wrapper z-depth-4">
            <div className="container">
              <h3 className="valign landing-text white-text">Go OffScript</h3>
              <div className="landing-text white-text flow-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </div>
            </div>
            <div className="parallax"><img src="media/stage.jpg" /></div>
          </div>
        </div>
        <br></br>
        <div className="container wow fadeInLeft">
          <div className="parallax-container highlight valign-wrapper z-depth-4">
            <div className="container">
              <h3 className="valign landing-text white-text">Stay OffScript</h3>
              <div className="landing-text flow-text white-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </div>
              <a className="btn waves-effect cyan hoverable modal-trigger" href="#modal-login">Login / Signup</a>
            </div>
            <div className="parallax"><img src="media/books.jpg" /></div>
          </div>
        </div>
        <br/>
        <About />
      </div>
    );
  }
}

module.exports = Landing;