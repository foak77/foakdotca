import { AiFillLinkedin } from "react-icons/ai";
import Link from "next/link";
import styles from "./../../components/MainFooter/MainFooter.module.scss";
import logo from "./../../public/images/logo.png";
import Image from "next/image";
import { TiLightbulb } from "react-icons/ti";
import { TiPencil } from "react-icons/ti";
import { GiTalk } from "react-icons/gi";
import { AiOutlineGithub } from "react-icons/ai";
import { FaRegFilePdf } from "react-icons/fa";

export default function MainFooter() {
  return (
    <footer className={styles.footer}>
      <section className={styles.footer__wrapper}>
        <section className={styles.footer__navBlock1}>
          <Link href={"/"}>
            <Image
              className={styles.footer__logo}
              src={logo}
              alt="logo"
              width={175}
              height={100}
              title="Home"
            />
          </Link>
        </section>
        <section className={styles.footer__navBlock2}>
          <ul className={styles.footer__linkBlock}>
            <li>
              <Link
                className={styles.footer__link}
                href={"/about"}
                title="About Me"
              >
                <TiLightbulb className={styles.footer__icon} />
                About Me
              </Link>
            </li>
            <li>
              <Link
                className={styles.footer__link}
                href={"/portfolio"}
                title="Portfolio"
              >
                <TiPencil className={styles.footer__icon} />
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                className={styles.footer__link}
                href={"/contact"}
                title="Contact"
              >
                <GiTalk className={styles.footer__icon} />
                Contact
              </Link>
            </li>
          </ul>
        </section>
        <section className={styles.footer__navBlock3}>
          <ul>
            <li>
              <Link
                className={styles.footer__link}
                href="https://www.linkedin.com/in/foak77/"
                target="_blank"
                rel="noreferrer"
                title="LinkedIn"
              >
                <AiFillLinkedin className={styles.footer__icon} />
                LinkedIn
              </Link>
            </li>
            <li>
              <Link
                className={styles.footer__link}
                href="https://github.com/foak77"
                target="_blank"
                rel="noreferrer"
                title="GitHub"
              >
                <AiOutlineGithub className={styles.footer__icon} />
                GitHub
              </Link>
            </li>
            <li>
              <Link
                className={styles.footer__link}
                href="/resume/frederico_carvalho_resume.pdf"
                target="_blank"
                rel="noreferrer"
                title="Dowload Resume"
              >
                <FaRegFilePdf className={styles.footer__icon} />
                Resume
              </Link>
            </li>
          </ul>
        </section>
      </section>
    </footer>
  );
}
