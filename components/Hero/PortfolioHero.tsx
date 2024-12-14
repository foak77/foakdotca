import Image from "next/image";
import styles from "./../Hero/PortfolioHero.module.scss";
import toprip from "./../../public/images/transition1.png";
import bottomrip from "./../../public/images/transition-y.png";

export default function PortfolioHero() {
  return (
    <section className={styles.portfolioHero}>
      <Image className={styles.portfolioHero__toprip} src={toprip} alt="hero" />
      <video
        autoPlay
        muted
        loop
        preload="true"
        playsInline
        className={`${styles.portfolioHero__vid}`}
      >
        <source src="/videos/front-hero-1.mp4" type="video/mp4" />
      </video>
      <Image
        className={styles.portfolioHero__bottomrip}
        src={bottomrip}
        alt="hero"
      />
    </section>
  );
}
