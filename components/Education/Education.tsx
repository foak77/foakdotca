import styles from "./Education.module.scss";
import { FaGraduationCap } from "react-icons/fa6";
import Image from "next/image";
import toprip from "./../../public/images/transition-y.png";
import bottomrip from "./../../public/images/transition2.png";

import { indie } from "../../app/fonts";

function Education() {
  return (
    <section className={styles.education}>
      <Image className={styles.education__toprip} src={toprip} alt="hero" />
      <h2 className={`${styles.education__title} ${indie.className}`}>
        Education
      </h2>
      <section className={styles.education__education_wrap}>
        <section className={styles.education__frame}>
          <section className={styles.education__schoolcard}>
            <h5 className={styles.education__schoolname}>
              Udemy - Online Courses
              <FaGraduationCap className={styles.education__schooltag} />
            </h5>
            <p className={styles.education__schooltype}>Certificate</p>
            <p className={styles.education__schoolcourse}>
              THE COMPLETE DIGITAL MARKETING GUIDE
            </p>
            <p className={styles.education__schoolyear}>October 2023</p>
          </section>
        </section>
        <section className={styles.education__frame}>
          <section className={styles.education__schoolcard}>
            <h5 className={styles.education__schoolname}>
              Udemy - Online Courses
              <FaGraduationCap className={styles.education__schooltag} />
            </h5>
            <p className={styles.education__schooltype}>Certificate</p>
            <p className={styles.education__schoolcourse}>
              ADOBE PREMIERE PRO CC MASTERCLASS & AFTER EFFECTS CC MASTERS
            </p>
            <p className={styles.education__schoolyear}>March & April 2023</p>
          </section>
        </section>
        <section className={styles.education__frame}>
          <section className={styles.education__schoolcard}>
            <h5 className={styles.education__schoolname}>
              BrainStation Bootcamp
              <FaGraduationCap className={styles.education__schooltag} />
            </h5>
            <p className={styles.education__schooltype}>Diploma</p>
            <p className={styles.education__schoolcourse}>WEB DEVELOPMENT</p>
            <p className={styles.education__schoolyear}>April - June 2020.</p>
          </section>
        </section>
        <section className={styles.education__frame}>
          <section className={styles.education__schoolcard}>
            <h5 className={styles.education__schoolname}>
              George Brown College
              <FaGraduationCap className={styles.education__schooltag} />
            </h5>
            <p className={styles.education__schooltype}>
              Continuing Ed. Certificate
            </p>
            <p className={styles.education__schoolcourse}>WEB DEVELOPMENT</p>
            <p className={styles.education__schoolyear}>2018</p>
          </section>
        </section>
        <section className={styles.education__frame}>
          <section className={styles.education__schoolcard}>
            <h5 className={styles.education__schoolname}>
              George Brown College
              <FaGraduationCap className={styles.education__schooltag} />
            </h5>
            <p className={styles.education__schooltype}>
              Continuing Ed. Certificate
            </p>
            <p className={styles.education__schoolcourse}>WEB DESIGN</p>
            <p className={styles.education__schoolyear}>2017</p>
          </section>
        </section>
        <section className={styles.education__frame}>
          <section className={styles.education__schoolcard}>
            <h5 className={styles.education__schoolname}>
              Pontifical Catholic University of Parana
              <FaGraduationCap className={styles.education__schooltag} />
            </h5>
            <p className={styles.education__schooltype}>
              B.A in Industrial Design
            </p>
            <p className={styles.education__schoolcourse}>
              VISUAL COMMUNICATION
            </p>
            <p className={styles.education__schoolyear}>1999</p>
          </section>
        </section>
      </section>
      <Image
        className={styles.education__bottomrip}
        src={bottomrip}
        alt="hero"
      />
    </section>
  );
}

export default Education;
