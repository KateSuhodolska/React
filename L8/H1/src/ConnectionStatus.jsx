import React, { Component } from "react";

class ConnectionStatus extends Component {
  state = {
    status: "online",
  };

  componentDidMount() {
    window.addEventListener("online", this.onlineStatus);
    window.addEventListener("offline", this.offlineStatus);
  }
  componentWillUnmount() {
    window.removeEventListener("online", this.onlineStatus);
    window.removeEventListener("offline", this.offlineStatus);
  }

  onlineStatus = () => this.setState({ status: "online" });
  offlineStatus = () => this.setState({ status: "offline" });

  render() {
    return this.state.status === "online" ? (
      <div className="status">{this.state.status}</div>
    ) : (
      <div className="status status_offline">{this.state.status}</div>
    );
  }
}

export default ConnectionStatus;
