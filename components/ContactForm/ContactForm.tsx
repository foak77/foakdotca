"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import styles from "./../ContactForm/ContactForm.module.scss";
// images
import toprip from "./../../public/images/transition1.png";
import bottomrip from "./../../public/images/transition2.png";
// icons
import { RiUser3Fill } from "react-icons/ri";
import { FaEnvelopeOpenText } from "react-icons/fa";
import { MdFormatQuote } from "react-icons/md";
import { SiGooglemessages } from "react-icons/si";

import { indie } from "../../app/fonts";

export default function Contact({}) {
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const contact: Record<string, string> = {};
    const elements = Array.from(e.currentTarget.elements) as HTMLInputElement[];

    elements.forEach((field) => {
      if (!field.name) return;
      contact[field.name] = field.value;
    });

    try {
      const res = await fetch("/api/email", {
        method: "POST",
        body: JSON.stringify({ contact }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (res.ok) {
        router.push("/thank-you");
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <main className={styles.contactForm}>
      <Image
        className={styles.contactForm__toprip}
        src={toprip}
        alt="hero top rip"
      />
      <h1 className={`${styles.contactForm__title} ${indie.className}`}>
        Contact
      </h1>
      <section className={styles.contactForm__wrap}>
        <section className={styles.contactForm__left}>
          <form
            onSubmit={handleSubmit}
            className={styles.contactForm__form}
            method="post"
          >
            <section className={styles.contactForm__name}>
              <label>
                <RiUser3Fill className={styles.contactForm__icons} />
              </label>
              <input
                type="text"
                name="name"
                className={styles.contactForm__name_input}
                placeholder="Your Name"
                required
              />
            </section>
            <section className={styles.contactForm__email}>
              <label>
                <FaEnvelopeOpenText className={styles.contactForm__icons} />
              </label>
              <input
                type="text"
                name="email"
                className={styles.contactForm__email_input}
                placeholder="Your Email"
                required
              />
            </section>
            <section className={styles.contactForm__subject}>
              <label>
                <MdFormatQuote className={styles.contactForm__icons} />
              </label>
              <input
                type="text"
                name="subject"
                className={styles.contactForm__subject_input}
                placeholder="Subject"
                required
              />
            </section>
            <section className={styles.contactForm__message}>
              <label>
                <SiGooglemessages className={styles.contactForm__icons} />
              </label>
              <textarea
                name="message"
                placeholder="Your message"
                className={styles.contactForm__message_input}
                required
              ></textarea>
            </section>
            <section className={styles.contactForm__button}>
              <button
                className={`${styles.contactForm__btn} ${indie.className}`}
                type="submit"
                value="Send"
              >
                SEND
              </button>
            </section>
          </form>
        </section>

        <section className={styles.contactForm__right}>
          <section className={`${styles.contactForm__text} ${indie.className}`}>
            Thank You for taking the time and the interest in contacting me.
            There are some additional links in the footer pointing to my
            LinkedIn, GitHub Account, and a Resume for download.
          </section>
        </section>
      </section>
      <Image
        className={styles.contactForm__bottomrip}
        src={bottomrip}
        alt="bottom transition image"
      />
    </main>
  );
}
