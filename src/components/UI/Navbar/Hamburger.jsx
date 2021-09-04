import React, { useState } from "react";
import styles from "./Hamburger.module.css";

const Hamburger = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuHandeler = () => {
    setIsOpen((prevValue) => !prevValue);
    props.toggleSlidebar(prevValue=>!prevValue);
  };

  return (
    <div onClick={menuHandeler} className={`${styles["nav-icon"]} ${isOpen && styles.open}`}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default Hamburger;
