import Image from "next/image";
import styles from "./../Hero/AboutHero.module.scss";
// import heroImage from "./../../public/images/about_hero.jpg";
import toprip from "./../../public/images/transition1.png";

export default function AboutHero() {
  return (
    <section className={styles.aboutHero}>
      <Image className={styles.aboutHero__toprip} src={toprip} alt="hero" />
      <Image className={styles.aboutHero__bottomrip} src={toprip} alt="hero" />
    </section>
  );
}
