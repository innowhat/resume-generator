import React from "react";
import { Route } from "react-router-dom";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import Profiles from "./../../pages/Profile/Profiles";
import "./Routes.css";
import Register from "../../pages/Register/Register";

const Routes = () => (
  <div className="main-content">
    <Route exact path="/" component={Home} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/register" component={Register} />

    <Route exact path="/profiles" component={Profiles} />
  </div>
);

export default Routes;
