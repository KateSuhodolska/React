import React, { Component } from "react";
import User from "./User";
import Filter from "./Filter";

class UsersList extends Component {
  state = {
    text: "",
    usersList: this.props.users,
  };

  onChange = (val) => {
    this.setState({
      text: val,
    });
  };

  render() {
    const filteredUsers = this.props.users.filter((user) =>
      user.name.toLowerCase().startsWith(this.state.text)
    );

    const users = filteredUsers.map((user) => (
      <User key={user.id} name={user.name} age={user.age} />
    ));

    return (
      <div>
        <Filter
          onChange={this.onChange}
          filterText={this.state.text}
          count={filteredUsers.length}
        />
        <ul className="users">{users}</ul>
      </div>
    );
  }
}

export default UsersList;
