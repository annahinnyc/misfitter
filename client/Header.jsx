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
      <div className="transparent">
        <div className="nav-wrapper">
          <a href="/"><img className="logo" src="assets/icon.png" /></a>
        </div>
      </div>
    );
  }
}

export default Header;