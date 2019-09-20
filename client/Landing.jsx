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
        <About />
      </div>
    );
  }
}

export default Landing;