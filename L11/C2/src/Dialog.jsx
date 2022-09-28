import React from "react";
import DialogChildren from "./DialogChildren";
import PropTypes from "prop-types";

const Dialog = ({ onClose, title }) => {
  return (
    <div className="dialog">
      <div className="dialog__heading">
        <h4 className="dialog__title">{title}</h4>
        <button className="dialog__close-btn" onClick={onClose}>
          +
        </button>
      </div>
      <div className="dialog__content">
        <DialogChildren />
      </div>
    </div>
  );
};

Dialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string,
};

export default Dialog;
