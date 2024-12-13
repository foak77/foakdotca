import Image from "next/image";
import styles from "./../Hero/ContactHero.module.scss";
import toprip from "./../../public/images/transition1.png";

export default function ContactHero(): JSX.Element {
  return (
    <section className={styles.contactHero}>
      <Image
        className={styles.contactHero__toprip}
        src={toprip}
        alt="hero top rip"
      />
      <Image
        className={styles.contactHero__bottomrip}
        src={toprip}
        alt="hero bottom rip"
      />
    </section>
  );
}
