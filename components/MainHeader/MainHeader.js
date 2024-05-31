"use client";
import Link from "next/link";
import styles from "./../MainHeader/MainHeader.module.scss";
import Image from "next/image";
import logo from "./../../public/images/logo.png";
import HamburgerIcon from "./HamburgerIcon";
import { useStore } from "./../../global-store/globalStore";

export default function MainHeader() {
  // GLOBAL STATE
  const userId = useStore((state) => state.userId);
  const appConnection = useStore((state) => state.appConnection);

  return (
    <>
      <header className={styles.header}>
        <HamburgerIcon />
        <Link href={"/"} title="Home">
          <Image
            className={styles.header__logo}
            src={logo}
            width={175}
            height={"auto"}
            alt="logo"
          />
        </Link>
        <ul className={styles.header__listBlock}>
          <li className={styles.header__list} key={"01"}>
            <Link className={styles.header__link} href="/about">
              About Me
            </Link>
          </li>
          <li key={"02"} className={styles.header__list}>
            <Link className={styles.header__link} href="/portfolio">
              Portfolio
            </Link>
          </li>
          <li key={"03"} className={styles.header__list}>
            <Link className={styles.header__link} href="/contact">
              Contact
            </Link>
          </li>
          {!appConnection && (
            <li key={"04"} className={styles.header__list}>
              <Link className={styles.header__link} href="/sign-in">
                Sign In
              </Link>
            </li>
          )}
          {appConnection && (
            <li key={"05"} className={styles.header__list}>
              <Link className={styles.header__link} href={`/user/${userId}`}>
                Profile
              </Link>
            </li>
          )}
        </ul>
      </header>
    </>
  );
}
