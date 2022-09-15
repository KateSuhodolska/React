import React from "react";

const Offline = ({ onClick }) => {
  return (
    <div class="status">
      <span class="status__text">Offline</span>
      <button class="status__btn" onClick={onClick}>
        Reconnect
      </button>
    </div>
  );
};

export default Offline;
