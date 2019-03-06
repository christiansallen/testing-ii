import React, { Component } from "react";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h1>Dashboard</h1>

        <button data-testid="strike" onClick={this.props.recordStrike}>
          Strike
        </button>
        <button data-testid="ball" onClick={this.props.recordBall}>
          Ball
        </button>
        <button data-testid="foul" onClick={this.props.recordFoul}>
          Foul
        </button>
        <button data-testid="hit" onClick={this.props.recordHit}>
          Hit
        </button>
      </div>
    );
  }
}

export default Dashboard;
