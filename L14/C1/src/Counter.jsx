import React, { useState } from "react";

const Counter = () => {
  const [counter, setCount] = useState(0);
  return (
    <div className="counter">
      <button className="counter__button" onClick={() => setCount(counter - 1)}>
        -
      </button>
      <span className="counter__value">{counter}</span>
      <button className="counter__button" onClick={() => setCount(counter + 1)}>
        +
      </button>
    </div>
  );
};

export default Counter;
