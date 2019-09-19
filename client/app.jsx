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
        <Footer />
      </div>
    );
  }
}
export default App;