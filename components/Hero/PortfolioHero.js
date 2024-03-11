import Image from "next/image";
import styles from "./../Hero/PortfolioHero.module.scss";
import toprip from "./../../public/images/transition1.png";

export default function PortfolioHero() {
  return (
    <section className={styles.portfolioHero}>
      <Image className={styles.portfolioHero__toprip} src={toprip} alt="hero" />
      <Image
        className={styles.portfolioHero__bottomrip}
        src={toprip}
        alt="hero"
      />
    </section>
  );
}
