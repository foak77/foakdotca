import styles from "@/components/SideMenu/SideMenu.module.scss";
import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { TiLightbulb } from "react-icons/ti";
import { TiPencil } from "react-icons/ti";
import { GiTalk } from "react-icons/gi";

export default function SideMenu({ toggle }) {
  return (
    <menu className={styles.menu}>
      <li className={styles.menu__list}>
        <IoCloseSharp className={styles.menu__icon} onClick={toggle} />
      </li>
      <Link className={styles.menu__link} href={"/"} onClick={toggle}>
        <li className={styles.menu__list}>
          <FaHome className={styles.menu__icon} />
          Home
        </li>
      </Link>
      <Link className={styles.menu__link} href={"/about"} onClick={toggle}>
        <li className={styles.menu__list}>
          <TiLightbulb className={styles.menu__icon} />
          About
        </li>
      </Link>
      <Link className={styles.menu__link} href={"/portfolio"} onClick={toggle}>
        <li className={styles.menu__list}>
          <TiPencil className={styles.menu__icon} />
          Portfolio
        </li>
      </Link>
      <Link className={styles.menu__link} href={"/contact"} onClick={toggle}>
        <li className={styles.menu__list}>
          <GiTalk className={styles.menu__icon} />
          Contact
        </li>
      </Link>
      {/* <Link className={styles.menu__link} href={"/blog"} onClick={toggle}>
        <li className={styles.menu__list}>
          <HiOutlineDesktopComputer className={styles.menu__icon} />
          Blog
        </li>
      </Link> */}
    </menu>
  );
}
