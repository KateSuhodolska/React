import React, { Component } from "react";

class Filter extends Component {
  eventChange = (event) => {
    this.props.onChange(event.target.value);
  };

  render() {
    return (
      <div className="filter">
        <span className="filter__count">{this.props.count}</span>
        <input
          type="text"
          className="filter__input"
          onChange={this.eventChange}
          value={this.props.filterText}
        />
      </div>
    );
  }
}

export default Filter;
