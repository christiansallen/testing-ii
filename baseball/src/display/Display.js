import React, { Component } from "react";

class Display extends Component {
  render() {
    return (
      <div>
        <div>
          <h1>Balls: </h1>
          <h1 data-testid="balls">{this.props.balls}</h1>
        </div>

        <div>
          <h1>Strikes: </h1>
          <h1 data-testid="strikes">{this.props.strikes}</h1>
        </div>
      </div>
    );
  }
}

export default Display;
