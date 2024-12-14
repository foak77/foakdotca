import Image from "next/image";
import styles from "./../Hero/HomeHero.module.scss";
import toprip from "./../../public/images/transition1.png";
import bottomrip from "./../../public/images/transition-b.png";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <Image className={styles.hero__toprip} src={toprip} alt="hero" />
      <video
        autoPlay
        muted
        loop
        preload="auto"
        playsInline
        className={`${styles.hero__vid}`}
      >
        <source src="/videos/front-hero-3.mp4" type="video/mp4" />
      </video>
      <Image className={styles.hero__bottomrip} src={bottomrip} alt="hero" />
    </section>
  );
}
