"use client";
import React from "react";
import Link from "next/link";
import styles from "./SignIn.module.scss";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { useStore } from "../../global-store/globalStore";
import { MdAlternateEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import Image from "next/image";
import toprip from "./../../public/images/transition1.png";
import bottomrip from "./../../public/images/transition2.png";

// Reusable InputField component defined before usage
interface InputFieldProps {
  label: string;
  type: string;
  placeholder: string;
  ref: React.RefObject<HTMLInputElement>;
}

const InputField = React.forwardRef<HTMLInputElement, InputFieldProps>(
  ({ label, type, placeholder }, ref) => (
    <section className={styles.signin__field}>
      <label className={styles.signin__label}>{label}</label>
      <input
        className={styles.signin__input}
        type={type}
        placeholder={placeholder}
        ref={ref}
        required
      />
    </section>
  )
);

InputField.displayName = "InputField"; // Needed for forwardRef to work

export default function SignIn() {
  const router = useRouter();

  // LOCAL STATE
  const [message, setMessage] = useState<string>("");

  // STATE FUNCTIONS
  const updateAppConnection = useStore((state) => state.updateAppConnection);
  const updateUserId = useStore((state) => state.updateUserId);
  const updateUserName = useStore((state) => state.updateUserName);

  // REFS FOR INPUTS
  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);

  const signin = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!emailInputRef.current || !passwordInputRef.current) return;

    const email = emailInputRef.current.value;
    const password = passwordInputRef.current.value;

    const userBody = {
      email,
      password,
    };

    try {
      const response = await fetch("/api/signin", {
        method: "POST",
        body: JSON.stringify(userBody),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      if (data.error) {
        setMessage(data.message);
        updateAppConnection(false);
        return;
      }

      setMessage(data.message);
      updateAppConnection(true);
      updateUserId(data.user._id);
      updateUserName(data.user.name);
      router.push(`/user/${data.user._id}`);
    } catch (error) {
      console.log(error || "💥💥💥 FALIED TO LOGIN");
      setMessage("An error occurred. Please try again.");
    }
  };

  return (
    <main className={styles.signin}>
      <Image className={styles.signin__toprip} src={toprip} alt="top rip" />
      <section className={styles.signin__wrapper}>
        <section className={styles.signin__wrap}>
          <section className={styles.signin__twrap}>
            <h2 className={styles.signin__title}>SIGN IN & SIGN UP</h2>
          </section>
          {message && <p className={styles.signin__message}>{message}</p>}

          <form className={styles.signin__form} onSubmit={signin}>
            <InputField
              label="Email"
              type="email"
              placeholder="Type Your Email Here"
              ref={emailInputRef}
            />
            <InputField
              label="Password"
              type="password"
              placeholder="Type Your Password Here"
              ref={passwordInputRef}
            />
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
        </section>
      </section>
      <Image
        className={styles.signin__bottomrip}
        src={bottomrip}
        alt="bottom transition image"
      />
    </main>
  );
}
