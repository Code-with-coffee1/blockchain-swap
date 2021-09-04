import React from "react";
import classes from "./Navbar.module.css";
import Hamburger from "./Hamburger";
import { PrimaryBtn } from "./NavButtons";
import Dropdown from "../Dropdown/Dropdown";

const dropdownOptions = [
  {
    name: "Ethereum",
    link: "https://cryptologos.cc/logos/ethereum-eth-logo.svg",
  },
  {
    name: "Polygon",
    link: "https://cryptologos.cc/logos/polygon-matic-logo.svg",
  },
  {
    name: "Binance",
    link: "https://cryptologos.cc/logos/binance-coin-bnb-logo.svg",
  },
];

const Navbar = (props) => {
  return (
    <nav className={classes["nav-container"]}>
      <div className={classes["nav-brand"]}>
        <Hamburger toggleSlidebar={props.onToggle} />
        <div className={classes["nav-logo"]}>
          <img src="/assets/logo512.png" alt="logo" />
        </div>
      </div>

      <div className={classes["nav-links"]}>
        <Dropdown options={[...dropdownOptions]} />

        <PrimaryBtn>Connect Wallet</PrimaryBtn>
      </div>
    </nav>
  );
};

export default Navbar;
