import React, { Component } from "react";
import Greeting from "./Greeting.jsx";
import Login from "./Login.jsx";
import Logout from "./Logout.jsx";

class Auth extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
    };
  }

  handleLoggedin = () => {
    this.setState({
      isLoggedIn: !this.state.isLoggedIn,
    });
  };

  render() {
    return (
      <div className="panel">
        <Greeting isLoggedIn={this.state.isLoggedIn} />
        <div>
          {!this.state.isLoggedIn ? (
            <Login onClick={this.handleLoggedin} />
          ) : (
            <Logout onClick={this.handleLoggedin} />
          )}
        </div>
      </div>
    );
  }
}

export default Auth;
