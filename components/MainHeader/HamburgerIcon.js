"use client";

import { TiThMenu } from "react-icons/ti";
import { useState } from "react";
import styles from "./../../components/MainHeader/MainHeader.module.scss";
import SideMenu from "../SideMenu/SideMenu";

export default function HamburgerIcon({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <TiThMenu
        className={styles.header__iconBurger}
        onClick={toggle}
        title="Drop Down Menu"
      />
      {isOpen && <SideMenu toggle={toggle} />}
    </>
  );
}
