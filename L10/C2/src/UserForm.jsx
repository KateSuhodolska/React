import React from "react";

const UserForm = ({ userData, onChange }) => {
  return (
    <form className="user-form">
      <input
        type="text"
        name="firstName"
        className="user-form__input"
        value={userData.firstName}
        onChange={onChange}
      />
      <input
        type="text"
        name="secondName"
        className="user-form__input"
        value={userData.secondName}
        onChange={onChange}
      />
    </form>
  );
};

export default UserForm;
