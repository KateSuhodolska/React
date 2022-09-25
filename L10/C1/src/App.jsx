import React, { Component } from "react";
import UserMenu from "./UserMenu";
import UserProfile from "./UserProfile";

class App extends Component {
  state = {
    userData: "",
  };

  componentDidMount() {
    fetch(`https://api.github.com/users/${this.props.userId}`)
      .then((response) => response.json())
      .then((userData) => {
        this.setState({
          userData,
        });
      });
  }

  render() {
    return (
      <div className="page">
        <header className="header">
          <UserMenu userData={this.state.userData} />
        </header>
        <UserProfile userData={this.state.userData} />
      </div>
    );
  }
}

export default App;
