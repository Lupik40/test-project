import React from "react";
import Logo from "../Logo/index";
import "./styles.scss";

const Header = () => (
  <header className="header">
    <div className="container">
      <div className="header__wrapper">
        <Logo />
      </div>
    </div>
  </header>
);

export default Header;
