import Image from "next/image";
import styles from "./../Hero/AboutHero.module.scss";
import toprip from "./../../public/images/transition1.png";

export default function AboutHero() {
  return (
    <section className={styles.aboutHero}>
      <Image className={styles.aboutHero__toprip} src={toprip} alt="hero" />
      <video
        // controls
        autoPlay
        muted
        loop
        preload="true"
        playsInline
        className={`${styles.aboutHero__vid}`}
        alt="video"
      >
        <source src="/videos/front-hero-2.mp4" type="video/mp4" />
      </video>
      <Image className={styles.aboutHero__bottomrip} src={toprip} alt="hero" />
    </section>
  );
}
