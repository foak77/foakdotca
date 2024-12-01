import Image from "next/image";
import styles from "./../Hero/HomeHero.module.scss";
import toprip from "./../../public/images/transition1.png";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <Image className={styles.hero__toprip} src={toprip} alt="hero" />
      <video
        // controls
        autoPlay
        muted
        loop
        preload="true"
        playsInline
        className={`${styles.hero__vid}`}
        alt="video"
      >
        <source src="/videos/front-hero.mp4" type="video/mp4" />
      </video>
      <Image className={styles.hero__bottomrip} src={toprip} alt="hero" />
    </section>
  );
}
