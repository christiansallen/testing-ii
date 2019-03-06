import React, { Component } from "react";
import "./App.css";
import Dashboard from "./dashboard/Dashboard";
import Display from "./display/Display";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      strikes: 0,
      balls: 0
    };
  }

  recordStrike = () => {
    if (this.state.strikes >= 2) {
      return this.setState({ strikes: 0, balls: 0 });
    } else {
      this.setState({ strikes: this.state.strikes + 1 });
    }
  };

  recordBall = () => {
    if (this.state.balls >= 3) {
      return this.setState({ strikes: 0, balls: 0 });
    } else {
      this.setState({ balls: this.state.balls + 1 });
    }
  };

  recordFoul = () => {
    if (this.state.strikes < 2) {
      return this.setState({
        strikes: this.state.strikes + 1,
        balls: this.state.balls
      });
    } else {
      return this.state;
    }
  };

  recordHit = () => {
    this.setState({ strikes: 0, balls: 0 });
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Dashboard
            recordStrike={this.recordStrike}
            recordBall={this.recordBall}
            recordFoul={this.recordFoul}
            recordHit={this.recordHit}
          />
          <Display strikes={this.state.strikes} balls={this.state.balls} />
        </header>
      </div>
    );
  }
}

export default App;
