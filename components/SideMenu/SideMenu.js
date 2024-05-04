import styles from "@/components/SideMenu/SideMenu.module.scss";
import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { TiLightbulb } from "react-icons/ti";
import { TiPencil } from "react-icons/ti";
import { GiTalk } from "react-icons/gi";
import { useStore } from "./../../global-store/globalStore";

export default function SideMenu({ toggle }) {
  // GLOBAL STATE
  const appConnection = useStore((state) => state.appConnection);
  const userId = useStore((state) => state.userId);
  return (
    <ul className={styles.menu}>
      <li key={"01"} className={styles.menu__list}>
        <IoCloseSharp
          className={`${styles.menu__icon} ${styles.menu__x}`}
          onClick={toggle}
        />
      </li>
      <Link className={styles.menu__link} href={"/"} onClick={toggle}>
        <li key={"02"} className={styles.menu__list}>
          <FaHome className={styles.menu__icon} />
          Home
        </li>
      </Link>
      <Link className={styles.menu__link} href={"/about"} onClick={toggle}>
        <li key={"03"} className={styles.menu__list}>
          <TiLightbulb className={styles.menu__icon} />
          About
        </li>
      </Link>
      <Link className={styles.menu__link} href={"/portfolio"} onClick={toggle}>
        <li key={"04"} className={styles.menu__list}>
          <TiPencil className={styles.menu__icon} />
          Portfolio
        </li>
      </Link>
      <Link className={styles.menu__link} href={"/contact"} onClick={toggle}>
        <li key={"05"} className={styles.menu__list}>
          <GiTalk className={styles.menu__icon} />
          Contact
        </li>
      </Link>
      {!appConnection && (
        <Link className={styles.menu__link} href={"/sign-in"} onClick={toggle}>
          <li
            key={"06"}
            className={`${styles.menu__list} ${styles.menu__lastlist}`}
          >
            <HiOutlineDesktopComputer className={styles.menu__icon} />
            Sign In
          </li>
        </Link>
      )}

      {appConnection && (
        <Link
          className={styles.menu__link}
          href={`/user/${userId}`}
          onClick={toggle}
        >
          <li
            key={"07"}
            className={`${styles.menu__list} ${styles.menu__lastlist}`}
          >
            <HiOutlineDesktopComputer className={styles.menu__icon} />
            Profile
          </li>
        </Link>
      )}
    </ul>
  );
}
