import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
    this.decrement = this.decrement.bind(this);
  }

  decrement = () => {
    this.setState({
      value: this.state.value - 1,
    });
    console.log(this.state.value);
  };

  increase = () => {
    this.setState({
      value: this.state.value + 1,
    });
    console.log(this.state.value);
  };

  render() {
    return (
      <div className="counter">
        <button
          data-action="decrease"
          className="counter__button"
          onClick={this.decrement}
        >
          -
        </button>
        <span className="counter__value">{this.state.value}</span>
        <button
          data-action="increase"
          className="counter__button"
          onClick={this.increase}
        >
          +
        </button>
      </div>
    );
  }
}

export default Counter;
