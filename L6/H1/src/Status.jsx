import React, { Component } from "react";
import Online from "./Online.jsx";
import Offline from "./Offline.jsx";

class Status extends Component {
  constructor() {
    super();
    this.state = {
      isOnline: true,
    };
  }
  render() {
    return <>{this.state.isOnline ? <Online /> : <Offline />}</>;
  }
}

export default Status;
