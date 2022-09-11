import React, { Component } from "react";

class Toggler extends Component {
  constructor() {
    super();
    this.state = {
      status: "Off",
    };
  }
  changeStatus = () => {
    this.state.status === "Off"
      ? this.setState({
          status: "On",
        })
      : this.setState({
          status: "Off",
        });
  };
  render() {
    return (
      <div class="toggler" onClick={() => this.changeStatus()}>
        {this.state.status}
      </div>
    );
  }
}

export default Toggler;
