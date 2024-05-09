import Image from "next/image";
import styles from "./../Hero/HomeHero.module.scss";
// import heroImage from "./../../public/images/front-Image.jpg";
import toprip from "./../../public/images/transition1.png";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <Image className={styles.hero__toprip} src={toprip} alt="hero" />
      <section className={styles.hero__helloFrame}>
        <h1 className={styles.hero__title}>Welcome!</h1>
        <h2 className={styles.hero__underTitle}>To my online resume</h2>
        <p className={styles.hero__text}>- Step Inside and Explore -</p>
        <p className={styles.hero__underText}>
          I'm in pursuit of fresh career horizons!
        </p>
      </section>
      <Image className={styles.hero__bottomrip} src={toprip} alt="hero" />
    </section>
  );
}
