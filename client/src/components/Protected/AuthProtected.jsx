import React from "react";
import { useSelector } from "react-redux";
import LogIn from "../../pages/LogInPage";

const AuthProtected = ({ Component }) => {
  const isLogin = useSelector((state) => state.user.isLogin); // Corrected state path

  return isLogin ? <Component /> : <LogIn />;
};

export default AuthProtected;
