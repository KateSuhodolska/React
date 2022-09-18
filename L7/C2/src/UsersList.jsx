import React, { Component } from "react";
import User from "./User";

class UsersList extends Component {
  state = {
    sorting: null,
  };

  toggleSorting = () => {
    const newSorting = this.state.sorting === "asc" ? "desc" : "asc";
    this.setState({
      sorting: newSorting,
    });
  };
  render() {
    const userList = this.props.users
      .slice()
      .sort((a, b) =>
        this.state.sorting === "asc" ? a.age - b.age : b.age - a.age
      );
    return (
      <div>
        <button className="btn" onClick={this.toggleSorting}>
          {this.state.sorting || "-"}
        </button>
        <div className="users">
          {userList.map((user) => (
            <User key={user.id} name={user.name} age={user.age} />
          ))}
        </div>
      </div>
    );
  }
}

export default UsersList;
