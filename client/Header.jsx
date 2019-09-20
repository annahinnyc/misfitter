import React from "react";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: true,
      isLoggedOut: false
    };
  }

  componentDidUpdate() {
    let loggedin = localStorage.getItem("loggedIn");
    if (loggedin) {
      this.setState({
        isLoggedIn: true
      });
    }
  }

  render() {
    return (
      <nav className="transparent">
        <div className="nav-wrapper">
          <a href="/"><img className="logo" src="assets/misfitter_icon.png" /></a>
          <ul id="nav-mobile" className="right hide-on-small-only">
            <a className="btn waves-effect black" href="https://docs.google.com/forms/d/e/1FAIpQLSfvCyPqr7L3isnppbfcGbiDAjuqDEQdY8JQco1mPpFlvFrDqw/viewform">Start Questionnaire</a>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;