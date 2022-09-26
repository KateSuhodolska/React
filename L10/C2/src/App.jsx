import React, { Component } from "react";
import Profile from "./Profile";
import ShoppingCart from "./ShoppingCart";

class App extends Component {
  state = {
    userData: {
      firstName: "Tom",
      secondName: "Jery",
    },
  };

  handleChangeUserData = (event) => {
    const { name, value } = event.target;
    this.setState({
      userData: {
        ...this.state.userData,
        [name]: value,
      },
    });
  };

  render() {
    const { userData } = this.state;
    return (
      <div className="page">
        <h1 className="title">{`Hello, ${userData.firstName} ${userData.secondName}`}</h1>
        <main className="content">
          <ShoppingCart userData={userData} />
          <Profile userData={userData} onChange={this.handleChangeUserData} />
        </main>
      </div>
    );
  }
}

export default App;
