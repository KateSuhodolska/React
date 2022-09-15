import React from "react";
import ReactDOM from "react-dom";
import Mailbox from "./Mailbox.jsx";
import "./index.scss";

const rootEl = document.querySelector("#root");

ReactDOM.render(<Mailbox unreadMessages={[]} />, rootEl);
