import React from "react";
import classes from "./Navbar.module.css";
import Hamburger from "./Hamburger";
import NavButton, { SecondaryBtn } from "./NavButton";
import Dropdown from "../Dropdown/Dropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWallet, faCog } from "@fortawesome/free-solid-svg-icons";

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
        <SecondaryBtn>
          <FontAwesomeIcon icon={faCog} />
        </SecondaryBtn>
        <NavButton icon={<FontAwesomeIcon icon={faWallet} />}>Connect Wallet</NavButton>
      </div>
    </nav>
  );
};

export default Navbar;
