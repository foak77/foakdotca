"use client";
import styles from "./PasswordUpdate.module.scss";
import { useState, useRef } from "react";
import { useStore } from "../../global-store/globalStore";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { RiLockPasswordLine } from "react-icons/ri";
import Image from "next/image";
import toprip from "./../../public/images/transition1.png";
import bottomrip from "./../../public/images/transition2.png";

interface PasswordUpdateProps {
  userId: string; // Adjust the type depending on how the userId is passed
}

export default function PasswordUpdate({ userId }: PasswordUpdateProps) {
  const router = useRouter();
  const [message, setMessage] = useState("");

  // Refs for form inputs
  const passwordInputRef = useRef<HTMLInputElement>(null);
  const newPasswordInputRef = useRef<HTMLInputElement>(null);
  const newPasswordConfirmInputRef = useRef<HTMLInputElement>(null);

  // GLOBAL STATE
  const userName = useStore((state) => state.userName);

  // STATE FUNCTIONS
  const updateAppConnection = useStore((state) => state.updateAppConnection);

  const updatePw = async (event: React.FormEvent) => {
    event.preventDefault();

    // Validate if refs are set
    if (
      !passwordInputRef.current ||
      !newPasswordInputRef.current ||
      !newPasswordConfirmInputRef.current
    ) {
      setMessage("Missing input fields.");
      return;
    }

    const updateUserBody = {
      user_id: userId,
      password: passwordInputRef.current.value,
      newPassword: newPasswordInputRef.current.value,
      newPasswordConfirm: newPasswordConfirmInputRef.current.value,
    };

    try {
      const resp = await fetch(`/api/pw-update/${userId}`, {
        method: "POST",
        body: JSON.stringify(updateUserBody),
        headers: {
          "Content-type": "application/json",
        },
      });

      const data = await resp.json();

      if (data.error) {
        setMessage(data.message);
        return;
      }

      setMessage(data.message);
      // Optionally, redirect after a successful password update
      router.push(`/user/${userId}`);
    } catch (error) {
      console.error(error);
      await updateAppConnection(false);
      alert("SESSION EXPIRED");
      router.push("/sign-in");
    }
  };

  return (
    <main className={styles.pwUpdate}>
      <Image className={styles.pwUpdate__toprip} src={toprip} alt="top rip" />
      <section className={styles.pwUpdate__wrapper}>
        <section className={styles.pwUpdate__wrap}>
          <section className={styles.pwUpdate__twrap}>
            <h2 className={styles.pwUpdate__title}>MODIFY YOUR PASSWORD</h2>
          </section>
          <p className={styles.pwUpdate__userName}>{userName}</p>
          <p className={styles.pwUpdate__message}>{message}</p>
          <form className={styles.pwUpdate__form} onSubmit={updatePw}>
            <section className={styles.pwUpdate__password}>
              <label className={styles.pwUpdate__label}>
                <RiLockPasswordLine className={styles.pwUpdate__icons} />
              </label>
              <input
                className={styles.pwUpdate__input}
                type="password"
                name="currentPwd"
                ref={passwordInputRef}
                placeholder="Confirm your CURRENT
              Password"
                required
              />
            </section>

            <section className={styles.pwUpdate__password}>
              <label className={styles.pwUpdate__label}>
                <RiLockPasswordLine className={styles.pwUpdate__icons} />
              </label>
              <input
                className={styles.pwUpdate__input}
                type="password"
                name="newPassword"
                ref={newPasswordInputRef}
                placeholder="NEW Password (min. 8
                letters)"
                required
              />
            </section>

            <section className={styles.pwUpdate__password}>
              <label className={styles.signup__label}>
                <RiLockPasswordLine className={styles.pwUpdate__icons} />
              </label>
              <input
                className={styles.pwUpdate__input}
                type="password"
                name="newPasswordConfirm"
                ref={newPasswordConfirmInputRef}
                placeholder="Confirm NEW Password"
                required
              />
            </section>

            <button
              className={styles.pwUpdate__button}
              type="submit"
              value="CHANGE PASSWORD"
            >
              CHANGE PASSWORD
            </button>
          </form>
          <Link href={`/user/${userId}`}>
            <button className={styles.pwUpdate__button}>BACK TO USER</button>
          </Link>
        </section>
      </section>
      <Image
        className={styles.pwUpdate__bottomrip}
        src={bottomrip}
        alt="bottom transition image"
      />
    </main>
  );
}
