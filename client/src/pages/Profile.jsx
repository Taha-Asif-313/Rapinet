import React from "react";
import UserProfile from "../components/Profile/UserProfile";
import { useSelector } from "react-redux";

const Profile = () => {
  const authUser = useSelector((state) => state.user.authUser);
  return (
    <UserProfile
      username={authUser.username}
      fullname={authUser.fullname}
      email={authUser.email}
      profilePic={authUser.profilePic}
    />
  );
};

export default Profile;
