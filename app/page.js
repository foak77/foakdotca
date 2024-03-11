import styles from "./page.module.scss";
import Image from "next/image";
import Link from "next/link";
// components
import HomeHero from "@/components/Hero/HomeHero";
//images
import sample_work_1_M from "./../public/images/sample_work_1_M.png";
import sample_work_1_L from "./../public/images/sample_work_1_L.png";
import bottomrip from "./../public/images/transition2.png";
import toprip from "./../public/images/transition1.png";
//files
import pdf_logo from "./../public/images/pdf_logo.png";

import { indie } from "./fonts";

export default function Home() {
  return (
    <main className={`${styles.main}`}>
      <HomeHero />
      <section className={`${styles.main__wrapperTop}`}>
        <section className={styles.main__paragraphBlockWrap}>
          <p
            className={`${styles.main__firstP} ${styles.main__paragraphBlockWrapLeft}`}
          >
            Greetings, I&apos;m Frederico Carvalho, also known as Fred, and I
            welcome you to my website. Rigged with a Bachelor&apos;s degree in
            Visual Communication, my journey as an Industrial Designer has been
            a dynamic blend of creativity and production.
          </p>
          <p className={`${styles.main__paragraphBlockWrapRight}`}>
            My professional narrative encompasses a mix of graphic design
            projects, printing industry, social media asset creation, photo and
            video editing, and recently, the intricacies of web design,
            seamlessly intertwined with the strategic realm of Search Engine
            Optimization (SEO).
          </p>
        </section>
        <Link href={"/portfolio"}>
          <Image
            src={sample_work_1_M}
            className={`${styles.main__sampleWork_M}`}
            alt="sample work"
          />
          <Image
            src={sample_work_1_L}
            className={`${styles.main__sampleWork_L}`}
            alt="sample work"
          />
        </Link>
      </section>
      <Image
        className={`${styles.main__transition}`}
        src={toprip}
        alt="bottom transition image"
      />
      <section className={`${styles.main__wrapperMid}`}>
        <p className={`${styles.main__firstP} ${styles.main__paragraph}`}>
          Embracing challenges with enthusiasm, I am perpetually on the lookout
          for opportunities to expand my knowledge and apply my evolving skill
          set.
        </p>
        <p className={`${styles.main__paragraph}`}>
          I am motivated to assist individuals and businesses in achieving their
          aspirations. Whether it&apos;s amplifying market presence, launching
          innovative products, supporting their communities, or solving problems
          in innovative ways, I am dedicated to making a positive impact through
          my work.
        </p>
        <section className={`${styles.main__paragraphBlock_B}`}>
          <div className={`${styles.main__dropShadow}`}>
            <h2 className={`${styles.main__title_list} ${indie.className}`}>
              Summary of Qualifications
            </h2>
          </div>
          <div className={`${styles.main__dropShadow1}`}>
            <div
              className={`${styles.main__paragraph} ${styles.main__list_paragraph1} ${indie.className}`}
            >
              Several years of Graphic Designer experience combined with
              Customer Relations, Production and Office environment experience.
            </div>
          </div>

          <div className={`${styles.main__dropShadow2} ${indie.className}`}>
            <div
              className={`${styles.main__paragraph} ${styles.main__list_paragraph2}`}
            >
              Online Marketting Certification, Web development diploma from
              BrainStation, Web Development and Design certificates from George
              Brown College, and a B.A in Industrial Design.
            </div>
          </div>

          <div className={`${styles.main__dropShadow3}`}>
            <div
              className={`${styles.main__paragraph} ${styles.main__list_paragraph3} ${indie.className}`}
            >
              Good verbal communication, ability to easily connect with people
              and establish professional relationships, good listening skills,
              and empathy.
            </div>
          </div>

          <div className={`${styles.main__dropShadow4}`}>
            <div
              className={`${styles.main__paragraph} ${styles.main__list_paragraph4} ${indie.className}`}
            >
              Ability to prioritize responsibilities, identify problems in need
              of decision-making, excellent attention to detail, and adapt to
              various working environments (office, plant).
            </div>
          </div>

          <div className={`${styles.main__dropShadow5}`}>
            <div
              className={`${styles.main__paragraph} ${styles.main__list_paragraph5} ${indie.className}`}
            >
              Ability to work with minimum supervision, self-motivated,
              inquisitive and relentless, comfortable working with technology
              and arts, and autodidact.
            </div>
          </div>
        </section>
        <p className={`${styles.main__firstP} ${styles.main__paragraph}`}>
          Having honed my skills in the printing industry, I firmly believe that
          staying abreast of cutting-edge trends and technologies is paramount
          in the ever-evolving landscape of design and production. My curiosity
          extends to uncharted territories, with a keen interest in delving into
          areas like packaging design and the fascinating world of 3D printing.
        </p>
      </section>
      <Image
        className={`${styles.main__transition}`}
        src={toprip}
        alt="bottom transition image"
      />
      <section className={`${styles.main__wrapperBottom}`}>
        <Link
          href="/resume/frederico_carvalho_resume.pdf"
          target="_blank"
          rel="noreferrer"
          title="Dowload Resume"
        >
          <Image
            src={pdf_logo}
            className={`${styles.main__dLoad}`}
            alt="pdf logo"
          />
        </Link>
        <section className={`${styles.main__paragraphBlock_C}`}>
          <p className={`${styles.main__paragraphIndie} ${indie.className}`}>
            &ldquo; Curious about who is behind the scenes? Dive into the
            captivating narratives of the
            <Link className={`${styles.main__pageLink}`} href={"/about"}>
              &nbsp;&ldquo;ABOUT&ldquo;&nbsp;
            </Link>
            and
            <Link className={`${styles.main__pageLink}`} href={"/portfolio"}>
              &nbsp;&ldquo;PORTFOLIO&ldquo;&nbsp;
            </Link>
            section, where you&apos;ll learn more about the essence of my
            professional journey, and the driving force behind my work.
          </p>
          <p className={`${styles.main__paragraphIndie} ${indie.className}`}>
            Let&apos;s create something extraordinary together. I can&apos;t
            wait to connect with you! &ldquo;
          </p>
        </section>
      </section>
      <Image
        className={`${styles.main__bottomrip}`}
        src={bottomrip}
        alt="bottom transition image"
      />
    </main>
  );
}
