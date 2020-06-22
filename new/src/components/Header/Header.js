import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

import { useQuery } from "@apollo/client";
import { PROFILES_QUERY } from "./../../components/Queries//queries";
const Header = () => {
  const { client, loading, error, data } = useQuery(PROFILES_QUERY);
  console.log(data);

  // Reset Apollo and local store on logout
  const logout = () => {
    window.localStorage.clear();
    client.resetStore();
  };
  if (data && data.profiles) {
    return (
      <header className="main-navigation">
        <a className="main-navigation__logo" href="/">
          <h1>Easy Resume </h1>
        </a>
        <nav className="main-navigation__items">
          <ul>
            <li>
              <NavLink to="/profiles">profiles</NavLink>
            </li>
            <li>
              <button onClick={logout} color="inherit">
                Logout
              </button>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
  return (
    <header className="main-navigation">
      <a className="main-navigation__logo" href="/">
        <h1>Easy Resume </h1>
      </a>
      <nav className="main-navigation__items">
        <ul>
          <li>
            <NavLink to="/register">register</NavLink>
          </li>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
