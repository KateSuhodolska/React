import React from "react";
import moment from "moment";

const Profile = (props) => {
  return (
    <div className="profile">
      <div className="profile__name">
        {`${props.firstName} ${props.lastName}`}{" "}
      </div>
      <div className="profile__birth">
        {`Was born ${moment(props.birthDay).format("MMM Do YY")} in ${
          props.birthPlace
        }`}
      </div>
    </div>
  );
};

export default Profile;
