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
              <h3 class="maxtield">ABOUT US</h3>
            </div>

            <div className="aboutus-content">
              <div id="beth" className="">
                <div className="">
                  <h4>Beth Farley</h4>
                  <h5>Founder</h5>
                  <div>
                    <a href="" target="_blank" rel="noopener noreferrer">
                      <img className="logo-link" src="media/beth_profile.jpg"/>
                    </a>
                  </div>
                  <p className="thin-text about-quote">
                    Beth Farley is a lifelong misfit. As a child, she passed her time befriending trees, playing Galaga, and trying for long hours to move objects with her mind. These days, she enjoys spending time with her three boys, growing and cooking food, solving logic grid puzzles, and avoiding the need to make small talk.
                    <br></br>
                    Beth envisions Misfitter Podcast as an opportunity for nonconformists of all kinds to find camaraderie, friendship, and most importantly, love.
                  </p>
                </div>

              </div>
              <div id="birdie" className="">
                <div className="">
                  <h4>Birdie Lark</h4>
                  <h5>Founder</h5>
                  <div>
                    <a href="" target="_blank" rel="noopener noreferrer">
                      <img className="logo-link" src="media/birdie_profile.jpg" />
                    </a>
                  </div>
                  <p className="thin-text about-quote">
                    Birdie Lark spent her formative years sneaking out of her suburban bedroom window to hang out with fellow misfits in 1980s downtown NYC.
                    <br></br>
                    Post a Master’s degree in English Education, she has held jobs ranging from tarot card reader to college instructor to nanny to professional dominatrix, all while being her misfit self.  Some current interests include memoir writing, social justice initiatives, the psychology of sexual desire, hand crafting jewelry, and the online perusing of architecturally amazing home furnishings she cannot afford.
                    <br></br>
                    Birdie sees Misfitter Podcast as a welcoming space where she and Beth get to fairy godmother the fuck out of NYC misfits, pairing up awesome humans for like, lust and any love they see fit.
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