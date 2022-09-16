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
    let button;
    if (this.state.isLoggedIn === true) {
      button = <Logout onLogout={this.onLogout} />;
    } else if (this.state.isLoggedIn === "spinner") {
      button = <Spinner size="50px" />;
    } else if (this.state.isLoggedIn === false) {
      button = <Login onLogin={this.onLogin} />;
    }
    return <div className="panel">{button}</div>;
  }
}

export default Auth;
