import React from "react";
import ProfileItem from "../ProfileItem/ProfileItem";
import "./ProfileList.css";

const ProfileList = ({ data }) => {
  console.log("DTA", data);
  const profiles = data.profiles.map((profile) => {
    return (
      <ProfileItem
        key={profile._id}
        profileId={profile._id}
        title={profile.title}
      />
    );
  });

  return <ul className="profile__list">{profiles}</ul>;
};

export default ProfileList;
