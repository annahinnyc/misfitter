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
          <div className="card about-card lavender lighten-4">
            <div className="card-content">
              <h3 class="adahybrid">ABOUT US</h3>
            </div>

            <div className="aboutus-content">
              <div id="beth" className="">
                <div className="">
                  <h4>Beth Farley</h4>
                  <h5>Founder</h5>
                  <div>
                    <a href="" target="_blank" rel="noopener noreferrer">
                      <img className="logo-link" src="assets/beth_profile.jpg"/>
                    </a>
                  </div>
                  <p className="thin-text about-quote adahybrid">
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
                      <img className="logo-link" src="assets/birdie_profile.jpg" />
                    </a>
                  </div>
                  <p className="thin-text about-quote adahybrid">
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

        <div className="container">
          <div className="card about-card lavender lighten-4">
            <div className="card-content">
              <h4 class="adahybrid">#misfitternyc</h4>
            </div>
            <img className="logo-link" src="assets/free_advice.jpg" />
            <div className="aboutus-content">
              <p className="thin-text about-quote adahybrid">
                Beth and Birdie founded Misfitter Podcast one winter night while sharing coconut cake, cocktails, and the memories of their New York City, GenX past. They longed for that old-school, downtown vibe: the random, in-person, happenstance meetings, the search for “missed connections” on the back of the Village Voice…
              </p>
              <p>
                Birdie found a faded photo: their early-90s “Free Advice” stand on the corner of 11th and Hudson Street. They had served as dating advisors, matchmakers, and fairy godmothers to a unique and wonderful hodgepodge of fellow misfits.
              </p>
              <p>
                That winter night, they decided to do it all again. Another cardboard advice stand? No way! Beth and Birdie are no Luddites (well, maybe a little). They vibe on podcasts and technology, and (with some help) they developed a super-secret, misfit-matching algorithm (SSMMA). But could that algorithm beat Beth and Birdie’s (B&B’s) own old-school, matchmaking skills? They decided to find out. Game on!
              </p>
              <p>
                Thus was born the Misfitter Podcast, a dating show created to bring together misfits of all kinds: square pegs, nonconformists, freaks, outliers, oddballs, weirdos, mavericks, iconoclasts, nerds, punks, and out-of-the-box-ers… and send them out on dates! Sound good? We think so!
              </p>
              <p>
                Each week, the super-secret, misfit-matching algorithm chooses a match. And each week, Beth and Birdie (after fierce disagreements, more cake, wild threats and various libations) choose two people to send on a date. Both couples go on their dates (on us!) and return to the podcast to discuss their time together. Will B&B beat the SSMMA? Tune in to find out! Let’s get it on!
              </p>
            </div>

            <div className="card-content">
              <h3 class="adahybrid">#findyourfit</h3>
            </div>
            <div className="aboutus-content">
              <p className="thin-text about-quote adahybrid">
                So how does this work?
                <ol className="aboutus-ordered-list">
                  <li>Click on our quiz, take it, and attach your photo.</li>
                  <li>Follow us on Instagram and Twitter for updates.</li>
                  <li>Listen to our podcast to find out if you’re the next one chosen to go on a date!</li>
                  <li>We send you out on a date. You show up, share a few “special” moments through pictures and video, and have fun!</li>
                  <li>You appear as a guest on our podcast and let us know what you did and how we did. Not chosen that week? More of a voyeur on the dating scene? No problem! Participate by listening and spreading the word.</li>
                </ol>
              </p>
            </div>

            <div className="card-content">
              <h3 class="adahybrid">#mineyourownbusiness</h3>
            </div>
            <div className="aboutus-content">
              <p className="thin-text about-quote adahybrid">
                Our Misfitter Match Quiz is our own—developed, written, and securely stored in-house. Your data is yours to mine.  Yep, that’s right. Misfitter Podcast will NEVER sell your information, your answers or your photos on the downlow to third party entities. We are not interested in data-mining your private lives or Russian botting you into a rabbit hole of ad-click hell.
                <br></br>
                Please note: Once you have sent your form, you have contractually agreed to the following: If you do not show up for an agreed-upon date, you will be financially liable for date-related costs incurred. While on the date, you agree to share at least three social media updates. Finally, you will appear on Misfitter Podcast to discuss your dating experience (we all want to know!).
                <br></br>
                MisfitterNYC assumes no liability for any dating mishaps, disasters, hurt feelings, or mishegas.
                Date responsibly and have fun!
              </p>
            </div>

          </div>

        </div>
      </div>
    );
  }
}

export default About;