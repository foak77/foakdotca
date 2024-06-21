"use client";
import styles from "./forgotPwd.module.scss";
import Link from "next/link";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { MdAlternateEmail } from "react-icons/md";
import Image from "next/image";
import toprip from "./../../public/images/transition1.png";
import bottomrip from "./../../public/images/transition2.png";

type forgotType = {
  message: string;
  error: boolean;
  status: number;
};

type bodyType = {
  code: string;
  email: string;
  password: string;
  passwordConfirm: string;
};

export default function ForgotPw() {
  const router = useRouter();

  // LOCAL STATE
  const [message, setMesssage] = useState("");
  const [codeInput, setCodeInput] = useState(false);

  //REFS FROM INPUTS
  let codeInputRef = useRef<HTMLInputElement | null>(null);
  let emailInputRef = useRef<HTMLInputElement | null>(null);
  let passwordInputRef = useRef<HTMLInputElement | null>(null);
  let passwordConfirmInputRef = useRef<HTMLInputElement | null>(null);

  //SEND EMAIL FOR VERIFICATION
  const verifyEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let data: forgotType;
    const email: string = emailInputRef.current.value;

    try {
      const response = await fetch("/api/find-by-email", {
        method: "POST",
        body: JSON.stringify({ email: email }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      data = await response.json();

      if (data.error) {
        setMesssage(data.message);
        return null;
      }
      setMesssage(data.message);
      setCodeInput(true);
    } catch (error) {
      console.log(error);
    }
  };

  // AFTER RECEIVING THE CODE REDO THE PASSWORD
  const pwRedo = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let data: forgotType;
    let code: string = codeInputRef.current.value;
    let email: string = emailInputRef.current.value;
    let password: string = passwordInputRef.current.value;
    let passwordConfirm: string = passwordConfirmInputRef.current.value;

    let userBody: bodyType = {
      code: code,
      email: email,
      password: password,
      passwordConfirm: passwordConfirm,
    };

    try {
      const response = await fetch("/api/forgot-pwd", {
        method: "POST",
        body: JSON.stringify(userBody),
        headers: {
          "Content-Type": "application/json",
        },
      });

      data = await response.json();

      if (data.error) {
        setMesssage(data.message);
        return null;
      }
      setMesssage(data.message);
      router.push("/sign-in");
    } catch (error) {
      console.log(error);
    }
    return data;
  };
  return (
    <main className={styles.forgotpwd}>
      <Image className={styles.forgotpwd__toprip} src={toprip} alt="top rip" />
      <section className={styles.forgotpwd__wrapper}>
        <div className={styles.forgotpwd__wrap}>
          <div className={styles.forgotpwd__twrap}>
            <h3 className={styles.forgotpwd__title}>FORGOT YOUR PASSWORD?</h3>
          </div>
          <p className={styles.forgotpwd__message}>{message}</p>
          {!codeInput && (
            <>
              <p className={styles.forgotpwd__text}>
                Provide your email used in your Account.
              </p>
              <form className={styles.forgotpwd__form} onSubmit={verifyEmail}>
                <section className={styles.forgotpwd__email}>
                  <label>
                    <MdAlternateEmail className={styles.forgotpwd__icons} />
                  </label>
                  <input
                    className={styles.forgotpwd__input}
                    type="text"
                    name="email"
                    ref={emailInputRef}
                    placeholder="Place Your Account Email Here"
                    required
                  />
                </section>
                <button type="submit" className={styles.forgotpwd__button}>
                  SEND INFORMATION
                </button>
              </form>
            </>
          )}

          {codeInput && (
            <form className={styles.forgotpwd__form} onSubmit={pwRedo}>
              <label className={styles.forgotpwd__label}>
                <span className={styles.forgotpwd__red}>COPY the CODE </span>
                received in e-mail
              </label>
              <input
                className={styles.forgotpwd__input}
                type="text"
                name="code"
                ref={codeInputRef}
                placeholder="PASTE the CODE Here"
                required
              />
              <label className={styles.forgotpwd__label}>
                Confirm your{" "}
                <span className={styles.forgotpwd__red}>E-mail</span>
              </label>
              <input
                className={styles.forgotpwd__input}
                type="text"
                ref={emailInputRef}
                name="email"
                required
              />
              <label className={styles.forgotpwd__label}>
                <span className={styles.forgotpwd__red}>NEW</span> Password (8
                or more letters)
              </label>
              <input
                className={styles.forgotpwd__input}
                ref={passwordInputRef}
                type="password"
                name="password"
                required
              />

              <label className={styles.forgotpwd__label}>
                <span className={styles.forgotpwd__red}>Confirm NEW</span>{" "}
                Password
              </label>
              <input
                className={styles.forgotpwd__input}
                ref={passwordConfirmInputRef}
                type="password"
                name="passwordConfirm"
                required
              />
              <button className={styles.forgotpwd__button} type="submit">
                SET NEW PASSWORD
              </button>
            </form>
          )}

          <Link href={"/sign-in"}>
            <button className={styles.forgotpwd__button}>
              BACK TO SIGN IN
            </button>
          </Link>
        </div>
      </section>
      <Image
        className={styles.forgotpwd__bottomrip}
        src={bottomrip}
        alt="bottom transition image"
      />
    </main>
  );
}
