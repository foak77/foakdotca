import styles from "./Workplace.module.scss";
import WorkplaceCard from "./WorkplaceCard";
import dbConnect from "./../../lib/mongoDb/dbConnect";
import Workplaces from "./../../models/workplaceModel";
import { indie } from "./../../app/fonts";

async function getData() {
  try {
    await dbConnect();
    const workplaces = await Workplaces.find({});
    return workplaces;
  } catch (error) {
    console.log(error);
    throw new Error("OOOPS!Failed to fetch data");
  }
}

export default async function Workplace() {
  const workplaces = await getData();

  return (
    <section className={styles.workplace}>
      <h2 className={`${styles.workplace__title} ${indie.className}`}>
        Workplaces
      </h2>
      <section className={styles.workplace__wrap}>
        <section className={styles.workplace__section}>
          {workplaces.map((w) => (
            <WorkplaceCard work={w} key={w.id} />
          ))}
        </section>
      </section>
    </section>
  );
}
