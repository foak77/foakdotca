"use client";

import { TiThMenu } from "react-icons/ti";
import { useState } from "react";
import styles from "./../../components/MainHeader/MainHeader.module.scss";
import SideMenu from "../SideMenu/SideMenu";

type HamburgerIconProps = {
  children?: React.ReactNode;
};

const HamburgerIcon: React.FC<HamburgerIconProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggle = () => {
    setIsOpen((prev) => !prev);
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
};

export default HamburgerIcon;
