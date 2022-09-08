import React, { Component } from "react";
import { getTimeWithOffset } from "./index.jsx";
import "./clock.scss";

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: props.location,
      time: getTimeWithOffset(props.offset),
    };

    setInterval(() => {
      this.setState({
        time: getTimeWithOffset(props.offset),
      });
    }, 1000);
  }
  render() {
    return (
      <div className="clock">
        <div className="clock__location">{this.state.location}</div>
        <div className="clock__time">{this.state.time}</div>
      </div>
    );
  }
}

export default Clock;
