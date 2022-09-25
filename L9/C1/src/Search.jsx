import React, { Component } from "react";

class Search extends Component {
  state = {
    text: "",
  };

  search = (event) => {
    event.preventDefault();
    alert(`Search text: ${this.state.text}`);
  };

  handleSubmit = (event) => {
    this.setState({
      text: event.target.value,
    });
  };

  render() {
    return (
      <form className="search" onSubmit={this.search}>
        <input
          type="text"
          className="search__input"
          onChange={this.handleSubmit}
          value={this.state.value}
        />
        <button className="search__button" type="submit">
          Search
        </button>
      </form>
    );
  }
}
export default Search;
