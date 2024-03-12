import styles from "./Workplace.module.scss";
import WorkplaceCard from "./WorkplaceCard";
import { indie } from "@/app/fonts";

async function getData() {
  try {
    const res = await fetch(`${process.env.URL}/api/workplaces`, {
      method: "get",
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("💥💥💥FAIL TO FETCH DATA");
    }
    return res.json();
  } catch (error) {}
}

export default async function Workplace() {
  // const { workplaces } = await getData();
  const workplaces = await getData();
  return (
    <section className={styles.workplace}>
      <h2 className={`${styles.workplace__title} ${indie.className}`}>
        Workplace
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
