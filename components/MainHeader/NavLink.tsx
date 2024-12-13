"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./../../components/MainHeader/MainHeader.module.scss";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => {
  const path = usePathname();

  return (
    <Link
      className={path.startsWith(href) ? `${styles.header__link}` : undefined}
      href={href}
      title={typeof children === "string" ? children : undefined}
    >
      {children}
    </Link>
  );
};
