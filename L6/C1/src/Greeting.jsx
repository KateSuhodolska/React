import React from "react";
import UserGreeting from "./UserGreeting.jsx";
import GuestGreeting from "./GuestGreeting.jsx";

const Greeting = (props) =>
  props.isLoggedIn ? <UserGreeting /> : <GuestGreeting />;

export default Greeting;
