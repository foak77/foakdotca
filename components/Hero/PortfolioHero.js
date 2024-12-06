import Image from "next/image";
import styles from "./../Hero/PortfolioHero.module.scss";
import toprip from "./../../public/images/transition1.png";

export default function PortfolioHero() {
  return (
    <section className={styles.portfolioHero}>
      <Image className={styles.portfolioHero__toprip} src={toprip} alt="hero" />
      <video
        // controls
        autoPlay
        muted
        loop
        preload="true"
        playsInline
        className={`${styles.portfolioHero__vid}`}
        alt="video"
      >
        <source src="/videos/front-hero-1.mp4" type="video/mp4" />
      </video>
      <Image
        className={styles.portfolioHero__bottomrip}
        src={toprip}
        alt="hero"
      />
    </section>
  );
}
