import React, { Component } from "react";
import OddNumbers from "./OddNumbers";
import EvenNumbers from "./EvenNumbers";
import Numbers from "./Numbers";

class App extends Component {
  state = {
    number: 0,
  };

  componentDidMount() {
    this.interval = setInterval(
      () =>
        this.setState({
          number: this.state.number + 1,
        }),
      1000
    );
  }

  render() {
    return (
      <div className="app">
        <OddNumbers title="Odd numbers" number={this.state.number} />
        <EvenNumbers title="Even numbers" number={this.state.number} />
        <Numbers number={this.state.number} />
        <Numbers number={this.state.number} />
      </div>
    );
  }
}

export default App;
