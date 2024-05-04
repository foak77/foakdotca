import styles from "./../Workplace/WorkplaceCard.module.scss";
import Image from "next/image";
import clip from "./../../public/images/clip.png";
import bottomclip from "./../../public/images/bottomclip.png";

import { indie } from "@/app/fonts";

function WorkplaceCard({ work }) {
  return (
    <section className={styles.workplaceCard}>
      <Image className={styles.workplaceCard__clip} src={clip} alt="clip" />
      <section className={styles.workplaceCard__underClip}>
        <p className={styles.workplaceCard__duties}>{work.role}</p>
        <p className={styles.workplaceCard__company}>{work.company}</p>
        <p className={styles.workplaceCard__date}>{work.period}</p>
        <ul className={`${styles.workplaceCard__bullets} ${indie.className}`}>
          {work.description.map((desc, index) => {
            return (
              <li
                className={styles.workplaceCard__bullets_list}
                key={desc[index]}
              >
                <p className={styles.workplaceCard__spaceBetweenBullets}>
                  {desc}
                </p>
              </li>
            );
          })}
        </ul>
      </section>
      <Image
        className={styles.workplaceCard__clip}
        src={bottomclip}
        alt="Bottom Clip"
      />
    </section>
  );
}

export default WorkplaceCard;
