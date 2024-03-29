import styles from "./../about/about.module.scss";
import Image from "next/image";

import Workplace from "@/components/Workplace/Workplace";
import Education from "@/components/Education/Education";

import transition from "./../../public/images/transition1.png";
import postNoBill from "./../../public/images/post_no_bill.png";
import aftereffects from "./../../public/images/icons/aftereffects.png";
import canva from "./../../public/images/icons/canva.png";
import corel from "./../../public/images/icons/corel.png";
import css from "./../../public/images/icons/css.png";
import facebookads from "./../../public/images/icons/facebookads.png";
import figma from "./../../public/images/icons/figma.png";
import github from "./../../public/images/icons/github.png";
import googleadds from "./../../public/images/icons/googleadds.png";
import html from "./../../public/images/icons/html.png";
import ilustrator from "./../../public/images/icons/ilustrator.png";
import indesign from "./../../public/images/icons/indesign.png";
import javascript from "./../../public/images/icons/javascript.png";
import next from "./../../public/images/icons/next.png";
import photoshop from "./../../public/images/icons/photoshop.png";
import premiere from "./../../public/images/icons/premiere.png";
import react from "./../../public/images/icons/react.png";
import seo from "./../../public/images/icons/seo.png";
import sketchup from "./../../public/images/icons/sketchup.png";
import vscode from "./../../public/images/icons/vscode.png";
import wordpress from "./../../public/images/icons/wordpress.png";

import { indie } from "./../fonts";

export const metadata = {
  title: "About Fred",
  description: "This is the about page from Frederico's Web",
  keywords: [
    "Resume",
    "Portfolio",
    "Graphic Design",
    "Industrial Design",
    "Web Design",
    "Web Development",
  ],
};

export default function About() {
  return (
    <main className={styles.about}>
      <Image
        className={styles.about__transition}
        src={transition}
        alt="transition image"
      />
      <section className={styles.about__title_wrap}>
        <h1 className={`${styles.about__title} ${indie.className}`}>
          About, Skills & Experience
        </h1>
      </section>
      <p className={`${styles.about__paragraphTop} ${styles.about__firstP}`}>
        Drawing inspiration from a cross-cultural existence in both Canada and
        Brazil, I bring a unique worldview to my endeavors. Grateful for the
        enriching experiences of studying, working and living in both countries,
        I am excited about the unfolding future of the web and design. I
        envision a harmonious convergence of technology and art, shaping a
        brighter world for us all.
      </p>
      <section className={styles.about__info}>
        <section className={styles.about__section_wrap}>
          <section className={styles.about__section}>
            <section className={styles.about__section}>
              <p
                className={`${styles.about__firstP} ${styles.about__paragraph}`}
              >
                Besides enjoyment and hard work in the activities that I engage
                in. These are some of the tools I have been continuously
                learning and working with.
              </p>
            </section>
            <section className={styles.about__section}>
              <section className={styles.about__skill}>
                <ul className={styles.about__skill_list}>
                  <li className={styles.about__skill_list_item}>
                    <Image
                      className={styles.about__imgsIcon}
                      src={photoshop}
                      alt="photoshop"
                    />
                  </li>
                  <li className={styles.about__skill_list_item}>
                    <Image
                      className={styles.about__imgsIcon}
                      src={ilustrator}
                      alt="ilustrator"
                    />
                  </li>
                  <li className={styles.about__skill_list_item}>
                    <Image
                      className={styles.about__imgsIcon}
                      src={indesign}
                      alt="indesign"
                    />
                  </li>
                  <li className={styles.about__skill_list_item}>
                    <Image
                      className={styles.about__imgsIcon}
                      src={premiere}
                      alt="premiere"
                    />
                  </li>
                  <li className={styles.about__skill_list_item}>
                    <Image
                      className={styles.about__imgsIcon}
                      src={aftereffects}
                      alt="aftereffects"
                    />
                  </li>
                  <li className={styles.about__skill_list_item}>
                    <Image
                      className={styles.about__imgsIcon}
                      src={corel}
                      alt="corel"
                    />
                  </li>
                  <li className={styles.about__skill_list_item}>
                    <Image
                      className={styles.about__imgsIcon}
                      src={sketchup}
                      alt="sketchup"
                    />
                  </li>
                  <li className={styles.about__skill_list_item}>
                    <Image
                      className={styles.about__imgsIcon}
                      src={canva}
                      alt="canva"
                    />
                  </li>
                  <li className={styles.about__skill_list_item}>
                    <Image
                      className={styles.about__imgsIcon}
                      src={figma}
                      alt="figma"
                    />
                  </li>
                  <li className={styles.about__skill_list_item}>
                    <Image
                      className={styles.about__imgsIcon}
                      src={css}
                      alt="css"
                    />
                  </li>
                  <li className={styles.about__skill_list_item}>
                    <Image
                      className={styles.about__imgsIcon}
                      src={html}
                      alt="html"
                    />
                  </li>
                  <li className={styles.about__skill_list_item}>
                    <Image
                      className={styles.about__imgsIcon}
                      src={javascript}
                      alt="javascript"
                    />
                  </li>
                  <li className={styles.about__skill_list_item}>
                    <Image
                      className={styles.about__imgsIcon}
                      src={react}
                      alt="react"
                    />
                  </li>
                  <li className={styles.about__skill_list_item}>
                    <Image
                      className={styles.about__imgsIcon}
                      src={next}
                      alt="next"
                    />
                  </li>
                  <li className={styles.about__skill_list_item}>
                    <Image
                      className={styles.about__imgsIcon}
                      src={wordpress}
                      alt="wordpress"
                    />
                  </li>
                  <li className={styles.about__skill_list_item}>
                    <Image
                      className={styles.about__imgsIcon}
                      src={vscode}
                      alt="vscode"
                    />
                  </li>
                  <li className={styles.about__skill_list_item}>
                    <Image
                      className={styles.about__imgsIcon}
                      src={github}
                      alt="github"
                    />
                  </li>
                  <li className={styles.about__skill_list_item}>
                    <Image
                      className={styles.about__imgsIcon}
                      src={googleadds}
                      alt="googleadds"
                    />
                  </li>
                  <li className={styles.about__skill_list_item}>
                    <Image
                      className={styles.about__imgsIcon}
                      src={facebookads}
                      alt="facebookads"
                    />
                  </li>
                  <li className={styles.about__skill_list_item}>
                    <Image
                      className={styles.about__imgsIcon}
                      src={seo}
                      alt="seo"
                    />
                  </li>
                </ul>
              </section>
              <section className={styles.about__section}>
                <p
                  className={`${styles.about__paragraph} ${styles.about__firstP} ${styles.about__paragraphLast}`}
                >
                  Meeting with prospects, art directors, graphic designer,
                  ilustrators, and business owners to determine the
                  project&apos;s scope and how and when it would be delivered is
                  a big part of my daily routine. I find these interactions to
                  be incredibly valuable as they help me understand the
                  client&apos;s needs and ensure a successful project outcome.
                </p>
              </section>
            </section>
            <Image
              className={styles.about__bill}
              src={postNoBill}
              alt="post no bill"
              width={"auto"}
              height={"auto"}
            ></Image>
          </section>
          <section
            className={`${styles.about__section} ${styles.about__section1}`}
          >
            <h3 className={`${styles.about__skill_color}`}>Tools</h3>
            <p className={styles.about__paragraph}>
              In my daily activities, I heavily rely on photo, vector, layout
              editing skills and tools, imposing pages and building magazines,
              and scheduling plan software. These tools are essential in my
              work, and I constantly dedicate time to improve my skills and
              master them. I&apos;m always on the lookout for new techniques and
              features that can enhance my productivity and creativity.
            </p>
            <h3
              className={`${styles.about__skill_list_item} ${styles.about__skill_color}`}
            >
              Enjoy
            </h3>
            <p className={styles.about__paragraph}>
              I really enjoy creating visual elements and graphic pieces such as
              logos, flyers, posters, magazines, and newspapers. Designing
              layouts and carefully selecting colors, images, and typefaces is a
              creative process that I value a lot. With the advent of the web, I
              have found a new playground to explore and experiment with fresh
              ideas.
            </p>
            <h3
              className={`${styles.about__skill_list_item} ${styles.about__skill_color}`}
            >
              Collaborate
            </h3>
            <p className={styles.about__paragraph}>
              Collaboration is key to my work, and I actively seek opportunities
              to collaborate with designers, web designers, developers, and
              professionals from various fields. Each collaboration brings new
              challenges and learning opportunities, helping me expand my skills
              and broaden my horizons.
            </p>
            <h3
              className={`${styles.about__skill_list_item1} ${styles.about__skill_color}`}
            >
              Be Confident
            </h3>
            <p className={styles.about__paragraph}>
              I am passionate about what I do, and I am committed to delivering
              exceptional work to the people I get involved professionaly. By
              embracing new challenges, sharpening my skills, and maintaining a
              collaborative mindset, I am confident in my ability to succeed in
              this ever_evolving field.
            </p>
          </section>
        </section>
      </section>
      <Workplace />
      <Education />
    </main>
  );
}
