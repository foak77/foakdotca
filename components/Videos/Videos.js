import styles from "./../../components/Videos/Videos.module.scss";

import { indie } from "@/app/fonts";

export default function Videos() {
  return (
    <section className={styles.video}>
      <section className={styles.video__wrap}>
        <h5 className={`${styles.video__title} ${indie.className}`}>Videos</h5>
        <h3 className={`${styles.video__heading} ${styles.video__firstP}`}>
          I have had the privilege of contributing to a variety of
          purpose-driven videos, each meticulously tailored for specific
          platforms to effectively communicate its intended message.
        </h3>
        {
          <section className={styles.video__frameWrap}>
            <video
              controls
              preload="auto"
              playsInline
              className={`${styles.video__frame}`}
              alt="video"
            >
              <source src="/videos/Conti_V_3.mp4" type="video/mp4" />
            </video>
            <video
              controls
              preload="auto"
              playsInline
              className={`${styles.video__frame} ${styles.video__frameOFF}`}
              alt="video"
            >
              <source src="/videos/Conti_V_1.mp4" type="video/mp4" />
            </video>
            <video
              controls
              preload
              className={`${styles.video__frame} ${styles.video__frameOFF}`}
              alt="video"
            >
              <source src="/videos/metropica_V.mp4" type="video/mp4" />
            </video>
            <video controls preload className={styles.video__frame} alt="video">
              <source
                src="/videos/Uflawless_Dermal Fillers.mp4"
                type="video/mp4"
              />
            </video>
            <video
              controls
              preload
              className={`${styles.video__frame} ${styles.video__frameOFF}`}
              alt="video"
            >
              <source
                src="/videos/Uflawless_X3 Anti Aging Routine.mp4"
                type="video/mp4"
              />
            </video>
            <video controls preload className={styles.video__frame} alt="video">
              <source
                src="/videos/Uflawless_Youthful Skin Cells.mp4"
                type="video/mp4"
              />
            </video>
          </section>
        }
      </section>
    </section>
  );
}
