import React from "react";
import classes from "./Navbar.module.css";
import Hamburger from "./Hamburger";

const Navbar = (props) => {
  return (
    <nav className={classes["nav-container"]}>
      <div className={classes["nav-brand"]}>
        <Hamburger toggleSlidebar={props.onToggle} />
        <div className={classes["nav-logo"]}>
          <img src="/assets/logo512.png" alt="logo" />
        </div>
      </div>

      <div className={classes["nav-links"]}>{props.children}</div>
    </nav>
  );
};

export default Navbar;
