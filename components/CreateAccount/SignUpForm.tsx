"use client";
import styles from "./SignUpForm.module.scss";
import Link from "next/link";
import { useRef, useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { useStore } from "../../global-store/globalStore";
import { RiUser3Fill } from "react-icons/ri";
import { MdAlternateEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import Image from "next/image";
import toprip from "./../../public/images/transition1.png";
import bottomrip from "./../../public/images/transition2.png";

type SignUpResponse = {
  message: string;
  error: boolean;
  user?: {
    _id: string;
    name: string;
  };
};

export default function SignUp() {
  const router = useRouter();

  //LOCAL STATE
  const [message, setMesssage] = useState<string>("");

  // REFS FROM INPUTS
  const nameInputRef = useRef<HTMLInputElement | null>(null);
  const emailInputRef = useRef<HTMLInputElement | null>(null);
  const passwordInputRef = useRef<HTMLInputElement | null>(null);
  const passwordConfirmInputRef = useRef<HTMLInputElement | null>(null);

  //STATE FUNCTIONS
  const updateAppConnection = useStore((state) => state.updateAppConnection);
  const updateUserId = useStore((state) => state.updateUserId);
  const updateUserName = useStore((state) => state.updateUserName);

  const create = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const name = nameInputRef.current?.value || "";
    const email = emailInputRef.current?.value || "";
    const password = passwordInputRef.current?.value || "";
    const passwordConfirm = passwordConfirmInputRef.current?.value || "";

    const userBody = {
      name: name,
      email: email,
      password: password,
      passwordConfirm: passwordConfirm,
    };

    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        body: JSON.stringify(userBody),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data: SignUpResponse = await response.json();

      if (data.error) {
        setMesssage(data.message);
        return null;
      }

      // LOCAL STATE
      setMesssage(data.message);

      // UPDATING GLOBAL STATE
      updateAppConnection(true);
      updateUserId(data.user._id);
      updateUserName(data.user.name);

      // PUSH TO PROFILE
      router.push(`/user/${data.user._id}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className={styles.signup}>
      <Image className={styles.signup__toprip} src={toprip} alt="top rip" />
      <section className={styles.signup__wrapper}>
        <section className={styles.signup__wrap}>
          <section className={styles.signup__twrap}>
            <h2 className={styles.signup__title}>CREATE ACCOUNT</h2>
          </section>
          <p className={styles.signup__message}>{message}</p>
          <form className={styles.signup__form} onSubmit={create}>
            <section className={styles.signup__name}>
              <label className={styles.signup__label} htmlFor="name">
                <RiUser3Fill className={styles.signup__icons} />
              </label>
              <input
                className={styles.signup__input}
                type="text"
                name="name"
                id="name"
                ref={nameInputRef}
                placeholder="Place Your Name Here"
                required
              />
            </section>
            <section className={styles.signup__email}>
              <label className={styles.signup__label} htmlFor="email">
                <MdAlternateEmail className={styles.signup__icons} />
              </label>
              <input
                className={styles.signup__input}
                type="text"
                name="email"
                id="email"
                ref={emailInputRef}
                placeholder="Place Your Email Here"
                required
              />
            </section>
            <section className={styles.signup__password}>
              <label className={styles.signup__label} htmlFor="password">
                <RiLockPasswordLine className={styles.signup__icons} />
              </label>
              <input
                className={styles.signup__input}
                type="password"
                name="password"
                id="password"
                ref={passwordInputRef}
                placeholder="Password with Min. 8 letters"
                required
              />
            </section>
            <section className={styles.signup__passwordConfirm}>
              <label className={styles.signup__label} htmlFor="passwordConfirm">
                <RiLockPasswordLine className={styles.signup__icons} />
              </label>
              <input
                className={styles.signup__input}
                type="password"
                name="passwordConfirm"
                id="passwordConfirm"
                ref={passwordConfirmInputRef}
                placeholder="Confirm Your Password"
                required
              />
            </section>
            <button
              type="submit"
              className={styles.signup__button}
              value="SIGN UP"
            >
              CREATE ACCOUNT
            </button>
          </form>

          <Link href={"/sign-in"}>
            <button className={styles.signup__button}>BACK TO SIGN IN</button>
          </Link>
        </section>
      </section>
      <Image
        className={styles.signup__bottomrip}
        src={bottomrip}
        alt="bottom transition image"
      />
    </main>
  );
}
