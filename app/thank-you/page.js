import styles from "./../../app/thank-you/thankyou.module.scss";
import Image from "next/image";
// images
import toprip from "./../../public/images/transition1.png";
import bottomrip from "./../../public/images/transition2.png";

export default function page() {
  return (
    <main className={styles.thankyou}>
      <Image
        className={styles.thankyou__toprip}
        src={toprip}
        alt="hero top rip"
      />
      <h1 className={styles.thankyou__title}>Thank You</h1>
      <p className={styles.thankyou__text}>
        Your e-mail was sent with success!
      </p>
      <Image
        className={styles.thankyou__bottomrip}
        src={bottomrip}
        alt="bottom transition image"
      />
    </main>
  );
}
