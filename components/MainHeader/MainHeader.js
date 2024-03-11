import Link from "next/link";
import styles from "./../MainHeader/MainHeader.module.scss";
import Image from "next/image";
import logo from "./../../public/images/logo.png";
import NavLink from "./../MainHeader/NavLink";
import HamburgerIcon from "./HamburgerIcon";

export default function MainHeader() {
  return (
    <>
      <header className={styles.header}>
        <HamburgerIcon />
        <Link href={"/"} title="Home">
          <Image className={styles.header__logo} src={logo} alt="logo" />
        </Link>
        <menu className={styles.header__listBlock}>
          {/* <li className={styles.header__list}>
            <NavLink  href="/">Home</NavLink>
          </li> */}
          <li className={styles.header__list}>
            <NavLink href="/about">About Me</NavLink>
          </li>
          <li className={styles.header__list}>
            <NavLink href="/portfolio">Portfolio</NavLink>
          </li>
          <li className={styles.header__list}>
            <NavLink href="/contact">Contact</NavLink>
          </li>
          {/* <li className={styles.header__list}>
            <NavLink  href="/blog">Blog</NavLink>
          </li> */}
        </menu>
      </header>
    </>
  );
}
