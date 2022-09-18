import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import UsersList from "./UsersList";

const rootElement = document.querySelector("#root");

ReactDOM.render(
  <UsersList
    users={[
      {
        id: "id-0",
        age: 21,
        name: "Bob",
      },
      {
        id: "id-1",
        age: 17,
        name: "Tom",
      },
      {
        id: "id-2",
        age: 18,
        name: "Tad",
      },
      {
        id: "id-3",
        age: 45,
        name: "Sam",
      },
      {
        id: "id-4",
        age: 38,
        name: "Andriy",
      },
      {
        id: "id-5",
        age: 18,
        name: "Anna",
      },
      {
        id: "id-6",
        age: 23,
        name: "Harry",
      },
      {
        id: "id-7",
        age: 31,
        name: "Artur",
      },
    ]}
  />,
  rootElement
);
