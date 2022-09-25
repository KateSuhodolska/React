import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import UsersList from "./UsersList";

const rootElement = document.querySelector("#root");

ReactDOM.render(
  <UsersList
    users={[
      { name: "Tom", age: 17, id: 0 },
      { name: "Olivia", age: 28, id: 1 },
      { name: "Sherlok", age: 25, id: 2 },
      { name: "Anna", age: 19, id: 3 },
      { name: "Artur", age: 19, id: 4 },
      { name: "Olivander", age: 48, id: 5 },
    ]}
  />,
  rootElement
);
