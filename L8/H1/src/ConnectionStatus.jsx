import React, { Component } from "react";

class ConnectionStatus extends Component {
  state = {
    status: "online",
  };

  componentDidMount() {
    window.addEventListener("online", () =>
      this.setState({ status: "online" })
    );
    window.addEventListener("offline", () =>
      this.setState({ status: "offline" })
    );
  }
  componentWillUnmount() {
    window.removeEventListener("online", () =>
      this.setState({ status: "online" })
    );
    window.removeEventListener("offline", () =>
      this.setState({ status: "offline" })
    );
  }

  render() {
    return this.state.status === "online" ? (
      <div className="status">Online</div>
    ) : (
      <div className="status status_offline">Offline</div>
    );
  }
}

export default ConnectionStatus;
