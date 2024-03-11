"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./../../components/MainHeader/MainHeader.module.scss";

export default function NavLink({ href, children }) {
  const path = usePathname();
  return (
    <Link
      alt={children}
      className={path.startsWith(href) ? `${styles.header__link}` : undefined}
      href={href}
      title={children}
    >
      {children}
    </Link>
  );
}
