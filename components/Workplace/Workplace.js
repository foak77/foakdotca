import styles from "./../../components/Workplace/Workplace.module.scss";
import WorkplaceCard from "./../../components/Workplace/WorkplaceCard";
import { cookies } from "next/headers";

import { indie } from "@/app/fonts";

async function getData() {
  const cookieStore = cookies();
  const res = await fetch("http://localhost:3000/api/workplaces", {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("💥💥💥FAIL TO FETCH DATA");
  } else {
    return res.json();
  }
}

export default async function Workplace() {
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
