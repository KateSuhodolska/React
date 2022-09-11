import React, { Component } from "react";

class Colors extends Component {
  changeBackground = (color) => {
    document.body.style.backgroundColor = color;
  };

  render() {
    return (
      <div className="colors">
        <button
          className="colors__button"
          style={{
            backgroundColor: "#f00",
          }}
          onClick={() => this.changeBackground("#f00")}
        ></button>
        <button
          className="colors__button"
          style={{
            backgroundColor: "#0f0",
          }}
          onClick={() => this.changeBackground("#0f0")}
        ></button>
        <button
          className="colors__button"
          style={{
            backgroundColor: "#00f",
          }}
          onClick={() => this.changeBackground("#00f")}
        ></button>
      </div>
    );
  }
}

export default Colors;
