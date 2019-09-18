import React from "react";
import { Route, withRouter, Redirect, Switch } from "react-router-dom";
import Header from "./Header";
import Landing from "./Landing";
import Footer from "./Footer";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      user: {}
    };
  }

  componentDidMount() {
    this.checkSession();
  }

  checkSession() {

    axios.get('/session')
      .then((response) => {
        return this.checkLogin();
      })
      .catch((err) => {
        console.log('no user in session');
        this.setState({
          isLoggedIn: false,
          user: {}
        })
      });
  }

  checkLogin() {
    return axios.get('/user')
      .then((user) => {
        console.log('current user is:', user.data.rows[0]);
        this.setState({
          isLoggedIn: true,
          user: user.data.rows[0]
        });
      })
      .catch((err) => {
        console.log('sign in failed, try again');
      });
  }

  setScript(script) {
    this.setState({
      script: script,
      transcript: ""
    });
    this.props.history.push("/speech");
  }

  setLines(script) {
    this.setState({
      script: script,
      transcript: ""
    });
    this.props.history.push("/linereader");
  }

  setTranscript(transcript) {
    this.setState({
      transcript: transcript
    });
  }

  setResults(results) {
    this.setState({
      results: results
    });
    this.props.history.push("/results");
  }

  setScore(score) {
    this.setState({
      score: score
    });
  }

  setUser(user) {
    if (user) {
      this.setState({
        isLoggedIn: true,
        user
      });
    } else if (!user) {
      this.setState({
        isLoggedIn: false,
        user: {}
      });
    }
    console.log("this.state", this.state);
  }

  scriptComparison(one, two) {
    this.setState({
      comparison: ScriptComparison(one, two)
    });
  }
  render () {
    return (
      <div className="app">
        <Header userLoggedIn={this.state.isLoggedIn} user={this.state.user} setUser={this.setUser.bind(this)}/>
        <Footer />
      </div>
    );
  }
}
export default withRouter(App);