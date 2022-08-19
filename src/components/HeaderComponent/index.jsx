import React from "react";
import NavBar from "../NavBar";
import "./styles.scss";

const HeaderComponent = () => {
  return (
    <header className="header">
      <div>
        <h3>Logo</h3>
      </div>
      <div className="header__nav-bar">
        <NavBar />
      </div>
    </header>
  );
};

export default HeaderComponent;
