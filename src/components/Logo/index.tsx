import React from "react";
import { NavLink } from "react-router-dom";
import { routeMain } from "../../routes/routes";
import "./styles.scss";

const Logo = () => (
  <NavLink to={routeMain()} className="logo">
    Pokemon-INFO
  </NavLink>
);

export default Logo;
