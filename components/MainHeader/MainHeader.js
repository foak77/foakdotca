"use client";
import Link from "next/link";
import styles from "./../MainHeader/MainHeader.module.scss";
import HamburgerIcon from "./HamburgerIcon";
import { useStore } from "./../../global-store/globalStore";
import { indie } from "./../../app/fonts";

export default function MainHeader() {
  // GLOBAL STATE
  const userId = useStore((state) => state.userId);
  const appConnection = useStore((state) => state.appConnection);

  return (
    <>
      <header className={styles.header}>
        <HamburgerIcon />
        <Link
          className={`${styles.header__name} ${indie.className}`}
          href={"/"}
          title="Home"
        >
          <h1 className={styles.header__nameSize}>This is my Website</h1>
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
