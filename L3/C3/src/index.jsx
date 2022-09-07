import React from "react";
import ReactDOM from "react-dom";
import Comment from "./Comment";
import "./styles.scss";

const userInfo = {
  name: "Kate",
  avatarUrl: "https://avatars.githubusercontent.com/u/90890687?v=4",
};

const rootEl = document.querySelector("#root");

ReactDOM.render(
  <Comment author={userInfo} text="Good job!" date={new Date()} />,
  rootEl
);
