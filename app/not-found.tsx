import styles from "./notfound.module.scss";
import Image from "next/image";
// images
import toprip from "./../public/images/transition1.png";
import bottomrip from "./../public/images/transition2.png";

export default function notfound() {
  return (
    <main className={styles.notfound}>
      <Image
        className={styles.notfound__toprip}
        src={toprip}
        alt="hero top rip"
      />
      <h1 className={styles.notfound__title}>Sorry!!!</h1>
      <p className={styles.notfound__text}>
        Your request failed, try another time!
      </p>
      <Image
        className={styles.notfound__bottomrip}
        src={bottomrip}
        alt="bottom transition image"
      />
    </main>
  );
}
