import React, { Component } from "react";
import Login from "./Login.jsx";
import Logout from "./Logout.jsx";
import Spinner from "./Spinner.jsx";

class Auth extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
    };
  }

  onLogin = () => {
    this.setState({
      isLoggedIn: "spinner",
    });
    setTimeout(
      () =>
        this.setState({
          isLoggedIn: true,
        }),
      2000
    );
  };

  onLogout = () => {
    this.setState({
      isLoggedIn: false,
    });
  };

  render() {
    return (
      <div className="panel">
        {this.state.isLoggedIn === true && <Logout onLogout={this.onLogout} />}
        {this.state.isLoggedIn === "spinner" && <Spinner size="50px" />}
        {this.state.isLoggedIn === false && <Login onLogin={this.onLogin} />}
      </div>
    );
  }
}

export default Auth;
