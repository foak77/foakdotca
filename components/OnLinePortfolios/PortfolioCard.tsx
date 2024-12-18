import styles from "./../../components/OnLinePortfolios/PortfolioCard.module.scss";
import Image from "next/image";

interface Portfolio {
  title: string;
  description: string;
  technology: string;
  stack: string;
  mode: string;
  imgFile: string;
  link: string;
}

interface PortfolioCardProps {
  portfolio: Portfolio;
}

export default function PortfolioCard({ portfolio }: PortfolioCardProps) {
  return (
    <section className={styles.cardframe}>
      <Image
        className={styles.cardframe__img}
        src={portfolio.imgFile}
        alt={portfolio.title}
        width={350}
        height={150}
      />
      <section className={styles.cardframe__info}>
        <h3 className={styles.cardframe__title}>{portfolio.title}</h3>
        <p className={styles.cardframe__stack}>
          {portfolio.stack}
          {portfolio.mode === "UNDER CONSTRUCTION" && (
            <span className={styles.cardframe__mode}>{portfolio.mode}</span>
          )}
        </p>
        <p className={styles.cardframe__paragraphs}>{portfolio.technology}</p>
        <p className={styles.cardframe__description}>{portfolio.description}</p>
      </section>
      <a
        href={portfolio.link}
        className={styles.cardframe__link}
        target="_blank"
        rel="noreferrer"
      >
        VISIT SITE
      </a>
    </section>
  );
}
