import Image from "next/image";
import styles from "./../Hero/AboutHero.module.scss";
import toprip from "./../../public/images/transition1.png";
import redrip from "./../../public/images/transition-r.png";

export default function AboutHero() {
  return (
    <section className={styles.aboutHero}>
      <Image className={styles.aboutHero__toprip} src={toprip} alt="hero" />
      <video
        autoPlay
        muted
        loop
        preload="true"
        playsInline
        className={`${styles.aboutHero__vid}`}
      >
        <source src="/videos/front-hero-2.mp4" type="video/mp4" />
      </video>
      <Image className={styles.aboutHero__bottomrip} src={redrip} alt="hero" />
    </section>
  );
}
