import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className="about wow fadeInUp">
        <div className="container">
          <div className="card medium about-card grey lighten-4 z-depth-4">
            <div className="card-content">
              <h5 class="maxtield">ABOUT US</h5>
            </div>
            <div className="card-tabs">
              <ul className="tabs grey lighten-3">
                <li className="tab">
                  <a href="#annah" className="teal-text">
                    BETH
                  </a>
                </li>
                <li className="tab">
                  <a href="#yufan" className="teal-text">
                    BIRDIE
                  </a>
                </li>
              </ul>
            </div>
            <div className="card-content">
              <div id="annah" className="row">
                <div className="col s12 m6">
                  <img className="responsive-img z-depth-2 avatar" src="" />
                </div>
                <div className="col s12 m6">
                  <h4>Beth</h4>
                  <h5>Founder</h5>
                  <div>
                    <a href="" target="_blank" rel="noopener noreferrer">
                      <img className="logo-link" src="media/
                      " />
                    </a>
                    <a href="" target="_blank" rel="noopener noreferrer">
                      <img className="logo-link" src="media/
                      " />
                    </a>
                  </div>
                  <p className="flow-text thin-text about-quote">
                    The most damaging phrase in any language is: 'It's
                    always been done that way.' - Grace Hopper
                  </p>
                </div>
              </div>
                  <img className="responsive-img z-depth-2 avatar" src="" />
                </div>
                <div className="col s12 m6">
                  <h4>Beth</h4>
                  <h5>Founder</h5>
                  <div>
                    <a href="" target="_blank" rel="noopener noreferrer">
                      <img className="logo-link" src="" />
                    </a>
                    <a href="" target="_blank" rel="noopener noreferrer">
                      <img className="logo-link" src="" />
                    </a>
                  </div>
                  <p className="flow-text thin-text about-quote">
                    We're actors! We're the OPPOSITE of people! - Tom
                    Stoppard
                  </p>
                </div>
              </div>
              <div id="yufan" className="row">
                <div className="col s12 m6">
                  <img className="responsive-img z-depth-2 avatar" src="" />
                </div>
                <div className="col s12 m6">
                  <h4>Birdie</h4>
                  <h5>Founder</h5>
                  <div>
                    <a href="" target="_blank" rel="noopener noreferrer">
                      <img className="logo-link" src="media/
                      " />
                    </a>
                    <a href="" target="_blank" rel="noopener noreferrer">
                      <img className="logo-link" src="media/
                      " />
                    </a>
                  </div>
                  <p className="flow-text thin-text about-quote">
                    Your time is limited, so don't waste it living someone
                    else's life. - Steve Jobs
                  </p>
                </div>
              </div>
        </div>
      </div>
    );
  }
}

export default About;