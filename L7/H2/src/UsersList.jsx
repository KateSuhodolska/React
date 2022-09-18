import React from "react";
import User from "./User";
import Pagination from "./Pagination";

class UsersList extends React.Component {
  state = {
    currentPage: 0,
  };

  goPrev = () => {
    this.setState({
      currentPage: this.state.currentPage - 1,
    });
  };
  goNext = () => {
    this.setState({
      currentPage: this.state.currentPage + 1,
    });
  };

  render() {
    return (
      <div>
        <Pagination
          page={this.state.currentPage}
          next={this.goNext}
          prev={this.goPrev}
          total={this.props.users.length}
        />
        <ul className="users">
          {this.props.users
            .map((user) => <User key={user.id} {...user} />)
            .slice(3 * this.state.currentPage, 3 * this.state.currentPage + 3)}
        </ul>
      </div>
    );
  }
}

export default UsersList;
