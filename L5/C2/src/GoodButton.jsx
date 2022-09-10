import React from "react";

class GoodButton extends React.Component {
  handleButton = (event) => {
    alert(event.target.textContent);
  };
  render() {
    return (
      <button className="fancy-button" onClick={this.handleButton}>
        Click me!
      </button>
    );
  }
}

export default GoodButton;
