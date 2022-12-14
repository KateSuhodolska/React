import React from "react";

const Greeting = (props) => {
  return (
    <div className="greeting">{`My name is ${props.firstName} ${
      props.lastName
    }. I'm ${props.birthDate.getFullYear()} years old`}</div>
  );
};

export default Greeting;
