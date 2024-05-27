import Image from "next/image";
import styles from "./../Hero/HomeHero.module.scss";
// import heroImage from "./../../public/images/front-Image.jpg";
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
      {/* <section className={styles.hero__helloFrame}>
        <h1 className={styles.hero__title}>Welcome!</h1>
        <h2 className={styles.hero__underTitle}>To my online resume</h2>
        <p className={styles.hero__text}>- Step Inside and Explore -</p>
        <p className={styles.hero__underText}>
          I am in pursuit of fresh career horizons!
        </p>
      </section> */}
      <Image className={styles.hero__bottomrip} src={toprip} alt="hero" />
    </section>
  );
}
