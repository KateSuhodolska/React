import React, { Component } from "react";

class ColorPicker extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
    };
  }
  changeTitle = (title) => {
    this.setState({
      title: title,
    });
  };
  deleteTitle = () => {
    this.setState({
      title: "",
    });
  };
  render() {
    return (
      <div>
        <div className="picker__title">{this.state.title}</div>
        <div>
          <button
            className="picker__button picker__button_coral"
            style={{ backgroundColor: "coral" }}
            onMouseEnter={() => this.changeTitle("Coral")}
            onMouseLeave={() => this.deleteTitle()}
          ></button>
          <button
            className="picker__button picker__button_aqua"
            style={{ backgroundColor: "aqua" }}
            onMouseEnter={() => this.changeTitle("Aqua")}
            onMouseLeave={() => this.deleteTitle()}
          ></button>
          <button
            className="picker__button picker__button_bisque"
            style={{ backgroundColor: "bisque" }}
            onMouseEnter={() => this.changeTitle("Bisque")}
            onMouseLeave={() => this.deleteTitle()}
          ></button>
        </div>
      </div>
    );
  }
}

export default ColorPicker;
