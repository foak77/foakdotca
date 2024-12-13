import styles from "./../../components/SideMenu/SideMenu.module.scss";
import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { TiLightbulb } from "react-icons/ti";
import { TiPencil } from "react-icons/ti";
import { GiTalk } from "react-icons/gi";
import { useStore } from "../../global-store/globalStore";

interface SideMenuProps {
  toggle: () => void;
}

const MenuItem = ({ href, icon: Icon, children, onClick }: any) => (
  <Link href={href} className={styles.menu__link} onClick={onClick}>
    <li className={styles.menu__list}>
      <Icon className={styles.menu__icon} />
      {children}
    </li>
  </Link>
);

export default function SideMenu({ toggle }: SideMenuProps) {
  // GLOBAL STATE
  const appConnection = useStore((state) => state.appConnection);
  const userId = useStore((state) => state.userId);

  return (
    <ul className={styles.menu}>
      <li className={styles.menu__list}>
        <IoCloseSharp
          className={`${styles.menu__icon} ${styles.menu__x}`}
          onClick={toggle}
        />
      </li>

      {/* Menu Items */}
      <MenuItem href="/" icon={FaHome} onClick={toggle}>
        Home
      </MenuItem>
      <MenuItem href="/about" icon={TiLightbulb} onClick={toggle}>
        About
      </MenuItem>
      <MenuItem href="/portfolio" icon={TiPencil} onClick={toggle}>
        Portfolio
      </MenuItem>
      <MenuItem href="/contact" icon={GiTalk} onClick={toggle}>
        Contact
      </MenuItem>

      {/* Conditional Menu Item */}
      {!appConnection ? (
        <MenuItem
          href="/sign-in"
          icon={HiOutlineDesktopComputer}
          onClick={toggle}
        >
          Sign In
        </MenuItem>
      ) : (
        <MenuItem
          href={`/user/${userId}`}
          icon={HiOutlineDesktopComputer}
          onClick={toggle}
        >
          Profile
        </MenuItem>
      )}
    </ul>
  );
}
