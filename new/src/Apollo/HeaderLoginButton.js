import React from "react";
import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import { USER_PROFILES } from "./queries";

const HeaderLoginButton = () => {
  const { client, data } = useQuery(USER_PROFILES);

  // Reset Apollo and local store on logout
  const logout = () => {
    window.localStorage.clear();
    client.resetStore();
  };

  if (data && data.profiles) {
    return (
      <button onClick={logout} color="inherit">
        Logout
      </button>
    );
  }
  return (
    <Link to="/login">
      <button color="inherit">Login</button>
    </Link>
  );
};

export default HeaderLoginButton;
