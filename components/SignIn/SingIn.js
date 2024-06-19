"use client";
import Link from "next/link";
import styles from "./SignIn.module.scss";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { useStore } from "./../../global-store/globalStore";
import { MdAlternateEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import Image from "next/image";
import toprip from "./../../public/images/transition1.png";
import bottomrip from "./../../public/images/transition2.png";

export default function SignIn() {
  const router = useRouter();

  // LOCAL STATE
  const [message, setMessage] = useState("");

  // STATE FUNCTIONS
  const updateAppConnection = useStore((state) => state.updateAppConnection);
  const updateUserId = useStore((state) => state.updateUserId);
  const updateUserName = useStore((state) => state.updateUserName);

  // REFS FROM INPUT
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const signin = async (event) => {
    event.preventDefault();
    let data;
    const email = emailInputRef.current.value;
    const password = passwordInputRef.current.value;

    const userBody = {
      email: email,
      password: password,
    };

    try {
      const response = await fetch("/api/signin", {
        method: "POST",
        body: JSON.stringify(userBody),
        headers: {
          "Content-Type": "application/json",
        },
      });

      data = await response.json();

      if (data.error) {
        setMessage(data.message);
        updateAppConnection(false);
        return;
      }

      // LOCAL STATE UPDATE
      setMessage(data.message);

      // UPDATING GLOBAL STATE
      updateAppConnection(true);
      updateUserId(data.user._id);
      updateUserName(data.user.name);
      router.push(`/user/${data.user._id}`);
    } catch (error) {
      console.log(error || "💥💥💥 FALIED TO LOGIN");
    }
    return data;
  };

  return (
    <main className={styles.signin}>
      <Image className={styles.signin__toprip} src={toprip} alt="top rip" />
      <div className={styles.signin__wrapper}>
        {/* <p className={`${styles.signin__text} ${indie.className}`}>
          As part of my portfolio, I have added this CRUD - CREATE, READ,
          UPDATE, and DELETE - operation, developed in NextJS in my website. I
          have also integrated Authentication and Authorization techniques for
          added security. When you are logged in, this module will create a
          Cookie Session and a JWT token, ensuring a smoother and safer browsing
          experience. Stay tuned for updates and more services!
        </p> */}
        <div className={styles.signin__wrap}>
          <div className={styles.signin__twrap}>
            <h2 className={styles.signin__title}>SIGN IN & SIGN UP</h2>
          </div>
          <p className={styles.signin__message}>{message}</p>

          <div>
            <form className={styles.signin__form} onSubmit={signin}>
              <section className={styles.signin__email}>
                <label>
                  <MdAlternateEmail className={styles.signin__icons} />
                </label>

                <input
                  className={styles.signin__input}
                  type="text"
                  name="email"
                  placeholder="Type Your Email Here"
                  ref={emailInputRef}
                  required
                />
              </section>
              <section className={styles.signin__password}>
                <label>
                  <RiLockPasswordLine
                    className={styles.signin__icons}
                  ></RiLockPasswordLine>
                </label>
                <input
                  className={styles.signin__input}
                  type="password"
                  name="password"
                  placeholder="Type Your Password Here"
                  ref={passwordInputRef}
                  required
                />
              </section>
              <button type="submit" className={styles.signin__button}>
                SIGN IN
              </button>
            </form>
            <Link href={"/forgot-pwd"} className={styles.signin__link}>
              <button className={styles.signin__button}>FORGOT PASSWORD</button>
            </Link>
            <Link href={"/sign-up"} className={styles.signin__link}>
              <button
                className={`${styles.signin__button} ${styles.signin__green}`}
              >
                CREATE ACCOUNT
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Image
        className={styles.signin__bottomrip}
        src={bottomrip}
        alt="bottom transition image"
      />
    </main>
  );
}
