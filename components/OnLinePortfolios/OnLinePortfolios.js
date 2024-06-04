import styles from "./OnLinePortfolios.module.scss";
import PortfolioCard from "./PortfolioCard";
import { indie } from "@/app/fonts";
import dbConnect from "@/lib/mongoDb/dbConnect";
import Onportfolios from "./../../models/onportfolioModel";

async function getData() {
  try {
    await dbConnect();
    const onportfolios = await Onportfolios.find();
    return onportfolios;
  } catch (error) {
    console.log(error);
  }
}

export default async function OnLinePortfolios() {
  const onportfolios = await getData();

  return (
    <main className={styles.onportfolio}>
      <section className={styles.onportfolio__title_wrap}>
        <h5 className={`${styles.onportfolio__title} ${indie.className}`}>
          Online Portfolio
        </h5>
      </section>
      <p
        className={`${styles.onportfolio__heading} ${styles.onportfolio__firstP}`}
      >
        Delve into my web design and development portfolio. Here is a collection
        of some of the works and studies of some online material pieces I have
        been producing lately. Each card will have a short description of the
        work and the link to its respective app.
      </p>
      <section className={styles.onportfolio__map}>
        {onportfolios.map((port) => (
          <PortfolioCard key={port.id} portfolio={port} />
        ))}
      </section>
    </main>
  );
}
