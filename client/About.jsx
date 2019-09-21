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
          <div className="card medium about-card lavender lighten-4">
            <div className="card-content">
              <h5 class="maxtield">ABOUT US</h5>
            </div>

            <div className="aboutus-content">
              <div id="beth" className="">
                <div className="">
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
                    lorem ipsum
                  </p>
                </div>

              </div>
              <div id="birdie" className="">
                <div className="">
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
                    lorem ipsum
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default About;