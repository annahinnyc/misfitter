import React from "react";
import Header from "./Header";
import Landing from "./Landing";
import Footer from "./Footer";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    };
  }

  componentDidMount() {

  }

  render () {
    return (
      <div className="app">
        <Header user={this.state.user}/>
        <h1 class="maxtield">Welcome to Misfitter!</h1>
        <ul id="nav-mobile" className="right hide-on-small-only">
          <a className="btn waves-effect black" href="https://docs.google.com/forms/d/e/1FAIpQLSfvCyPqr7L3isnppbfcGbiDAjuqDEQdY8JQco1mPpFlvFrDqw/viewform">Start Questionnaire</a>
        </ul>
        <Landing />
        <Footer />
      </div>
    );
  }
}
export default App;