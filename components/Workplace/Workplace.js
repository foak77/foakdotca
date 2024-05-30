import styles from "./Workplace.module.scss";
import WorkplaceCard from "./WorkplaceCard";
import { indie } from "@/app/fonts";

async function getData() {
  try {
    const res = await fetch(`${process.env.URLLOCAL}/api/workplaces`);

    if (res.message) {
      alert("💥💥💥 FAIL TO FETCH DATA");
      return;
    }
    return await res.json();
  } catch (error) {
    console.log(error);
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
          {workplaces.workplaces.map((w) => (
            <WorkplaceCard work={w} key={w.id} />
          ))}
        </section>
      </section>
    </section>
  );
}
