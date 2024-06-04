import styles from "./../portfolio/Portfolio.module.scss";
import OnLinePortfolios from "@/components/OnLinePortfolios/OnLinePortfolios";
import bottomrip from "./../../public/images/transition2.png";
import transition from "./../../public/images/transition1.png";
import Videos from "@/components/Videos/Videos";
import Image from "next/image";
import img0 from "./../../public/images/img0.png";
import img1 from "./../../public/images/img1.png";
import img2 from "./../../public/images/img2.png";
import img3 from "./../../public/images/img3.png";
import img4 from "./../../public/images/img4.png";
import img5 from "./../../public/images/img5.png";
import img6 from "./../../public/images/img6.png";
import img0Mob from "./../../public/images/img0-Mob.png";
import img1Mob from "./../../public/images/img1-Mob.png";
import img2Mob from "./../../public/images/img2-Mob.png";
import img3Mob from "./../../public/images/img3-Mob.png";
import img4Mob from "./../../public/images/img4-Mob.png";
import img5Mob from "./../../public/images/img5-Mob.png";
import img6Mob from "./../../public/images/img6-Mob.png";
import { indie } from "./../fonts";

export const metadata = {
  title: "Portfolio",
  description: "This is the Portfolio page from Frederico's Web Page",
  keywords: [
    "Resume",
    "Portfolio",
    "Graphic Design",
    "Industrial Design",
    "Web Design",
    "Web Development",
  ],
};

export default function Portfolio() {
  return (
    <main className={styles.portfolio}>
      <Image
        className={styles.portfolio__transition}
        src={transition}
        alt="transition image"
      />
      <section className={styles.portfolio__wrap}>
        <h5 className={`${styles.portfolio__title} ${indie.className}`}>
          Portfolio
        </h5>
        <p
          className={`${styles.portfolio__heading} ${styles.portfolio__firstP}`}
        >
          Here is a collection of some of the works and graphic pieces I&apos;ve
          been doing through the years. I&apos;ve been producing assets for
          YouTube, Facebook, and Instagram, as well as flyers, posters, and
          logos. It&apos;s been an exciting journey creating a diverse range of
          content that caters to these different platforms.
        </p>
        <Image className={styles.portfolio__imgs} src={img1} alt="slide" />
        <Image
          className={styles.portfolio__imgs_MOB}
          src={img1Mob}
          alt="slide"
        />
        <p
          className={`${styles.portfolio__firstP} ${styles.portfolio__heading}`}
        >
          From crafting engaging videos to designing eye-catching graphics, and
          even developing visually appealing flyers and posters, I&apos;ve been
          able to showcase my creativity across various mediums, including their
          website, when working with the &ldquo;Uflawless Medical Grade
          Skincare&ldquo; Team.
        </p>
        <Image className={styles.portfolio__imgs} src={img0} alt="slide" />
        <Image
          className={styles.portfolio__imgs_MOB}
          src={img0Mob}
          alt="slide"
        />
        <p
          className={`${styles.portfolio__heading} ${styles.portfolio__firstP}`}
        >
          Each platform and medium comes with its unique requirements, and I
          enjoy tailoring my work to suit the specific needs and preferences of
          each one. The People from the &ldquo;Farm Picked for You&ldquo; and I
          were very pleased with the results developed for the Logo, Package,
          Flyers, Posters, User Interface, and Social Media Assets.
        </p>
        <Image className={styles.portfolio__imgs} src={img6} alt="slide" />
        <Image
          className={styles.portfolio__imgs_MOB}
          src={img6Mob}
          alt="slide"
        />
        <p
          className={`${styles.portfolio__heading} ${styles.portfolio__firstP}`}
        >
          If you have any questions or would like to discuss any aspect of
          creating assets for various platforms or designing flyers and graphic
          pieces, feel free to reach out! I helped the people from the
          &ldquo;Elite Custom Made Furniture&ldquo; reach their first position
          in the Google Rank only from organic SEO work.
        </p>
        <Image className={styles.portfolio__imgs} src={img2} alt="slide" />
        <Image
          className={styles.portfolio__imgs_MOB}
          src={img2Mob}
          alt="slide"
        />
        <Image className={styles.portfolio__imgs} src={img3} alt="slide" />
        <Image
          className={styles.portfolio__imgs_MOB}
          src={img3Mob}
          alt="slide"
        />
        <p
          className={`${styles.portfolio__heading} ${styles.portfolio__firstP}`}
        >
          As previously mentioned, printing magazines and newspapers were big in
          my life, woven into the very fabric of my creative journey. A
          substantial collection of these printed pieces is preserved within my
          portfolio. If you&apos;re inclined to see it, the world of paper and
          ink is very real.
        </p>
        <Image className={styles.portfolio__imgs} src={img4} alt="slide" />
        <Image
          className={styles.portfolio__imgs_MOB}
          src={img4Mob}
          alt="slide"
        />
        <p
          className={`${styles.portfolio__heading} ${styles.portfolio__firstP}`}
        >
          High-quality, engaging visuals are more likely to be shared,
          increasing the organic reach of advertising efforts. Thoughtful design
          can evoke emotions and resonate with the target audience, creating a
          memorable connection that extends beyond a mere transaction. The team
          from the &ldquo;Conti Realty Group&ldquo; benefits a lot from the
          Social Media Content created for them.
        </p>
        <Image className={styles.portfolio__imgs} src={img5} alt="slide" />
        <Image
          className={styles.portfolio__imgs_MOB}
          src={img5Mob}
          alt="slide"
        />
      </section>
      <Image
        className={styles.portfolio__transition}
        src={transition}
        alt="bottom transition image"
      />
      <Videos />
      <Image
        className={styles.portfolio__transition}
        src={transition}
        alt="bottom transition image"
      />
      <OnLinePortfolios />
      <Image
        className={styles.portfolio__bottomrip}
        src={bottomrip}
        alt="bottom transition image"
      />
    </main>
  );
}
