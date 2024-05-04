"use client";
import styles from "./PasswordUpdate.module.scss";
import { useState, useRef } from "react";
import { useStore } from "./../../global-store/globalStore";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { RiLockPasswordLine } from "react-icons/ri";
import Image from "next/image";
import toprip from "./../../public/images/transition1.png";
import bottomrip from "./../../public/images/transition2.png";

export default function PasswordUpdate(userId) {
  let data;
  let updateUserBody;
  const router = useRouter();

  // LOCAL STATE
  const [message, setMessage] = useState("");

  // INPUT REF
  const passwordInputRef = useRef();
  const newPasswordInputRef = useRef();
  const newPasswordConfirmInputRef = useRef();

  // GLOBAL STATE
  const userName = useStore((state) => state.userName);

  // STATE FUNCTIONS
  const updateAppConnection = useStore((state) => state.updateAppConnection);

  const updatePw = async (event) => {
    event.preventDefault();

    updateUserBody = {
      user_id: userId.userId,
      password: passwordInputRef.current.value,
      newPassword: newPasswordInputRef.current.value,
      newPasswordConfirm: newPasswordConfirmInputRef.current.value,
    };

    try {
      const resp = await fetch(`/api/pw-update/${userId.userId}`, {
        method: "POST",
        body: JSON.stringify(updateUserBody),
        headers: {
          "Content-type": "application/json",
        },
      });
      data = await resp.json();

      if (data.error) {
        setMessage(data.message);
        return;
      }

      setMessage(data.message);
      // router.push(`/user/${userId.userId}`);
    } catch (error) {
      console.log(error);
      await updateAppConnection(false);
      alert("SESSION EXPIRED");
      router.push("/sign-in");
    }
    return;
  };

  return (
    <main className={styles.pwUpdate}>
      <Image className={styles.pwUpdate__toprip} src={toprip} alt="top rip" />
      <section className={styles.pwUpdate__wrapper}>
        <div className={styles.pwUpdate__wrap}>
          <div className={styles.pwUpdate__twrap}>
            <h2 className={styles.pwUpdate__title}>MODIFY YOUR PASSWORD</h2>
          </div>
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
          <Link href={`/user/${userId.userId}`}>
            <button className={styles.pwUpdate__button}>BACK TO USER</button>
          </Link>
        </div>
      </section>
      <Image
        className={styles.pwUpdate__bottomrip}
        src={bottomrip}
        alt="bottom transition image"
      />
    </main>
  );
}
