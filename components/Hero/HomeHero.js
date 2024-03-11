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
        <p className={styles.hero__text}>Step Inside and Explore</p>
      </section>
      <Image className={styles.hero__bottomrip} src={toprip} alt="hero" />
    </section>
  );
}
