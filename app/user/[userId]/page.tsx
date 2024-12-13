"use client";
import Link from "next/link";
import styles from "./curUser.module.scss";
import { useState } from "react";
import { useStore } from "../../../global-store/globalStore";
import { useRouter } from "next/navigation";
import Image from "next/image";
import toprip from "./../../../public/images/transition1.png";
import bottomrip from "./../../../public/images/transition2.png";

export default function UserId({ params }) {
  const userId = params.userId;
  const router = useRouter();

  //LOCAL STATE
  const [message, setMessage] = useState("");

  //GLOBAL STATE
  const userName = useStore((state) => state.userName);

  //STATE FUNCTIONS
  const updateAppConnection = useStore((state) => state.updateAppConnection);
  const updateUserId = useStore((state) => state.updateUserId);
  const updateUserName = useStore((state) => state.updateUserName);

  const logOut = async (e) => {
    e.preventDefault();
    let logOutData;
    try {
      const response = await fetch("/api/sign-out");

      logOutData = await response.json();

      if (logOutData.error) {
        setMessage("💥 FAILED TO LOGOUT");
        return;
      }

      // UPDATE THE STATES FROM STORE
      setMessage(logOutData.message);
      await updateAppConnection(false);
      await updateUserId("");
      await updateUserName("");
      false;
      // REFRESH
      router.push("/sign-in");
    } catch (Error) {
      console.log(Error);
      setMessage("💥 FAILED TO LOGOUT");
    }
    return;
  };

  return (
    <main className={styles.curUser}>
      <Image className={styles.curUser__toprip} src={toprip} alt="top rip" />
      <section className={styles.curUser__wrapper}>
        <section className={styles.curUser__twrap}>
          <h3 className={styles.curUser__user}>{userName}</h3>
          <p className={styles.curUser__message}>{message}</p>
        </section>
        <Link href={`/name-update/${userId}`}>
          <button className={styles.curUser__button}>Update Name</button>
        </Link>
        <Link href={`/pw-update/${userId}`}>
          <button className={styles.curUser__button}>Change Password</button>
        </Link>
        <Link href={`/delete-acc/${userId}`}>
          <button className={styles.curUser__button}>Delete Account</button>
        </Link>
        <button
          onClick={logOut}
          className={`${styles.curUser__button} ${styles.curUser__green}`}
        >
          Log Out
        </button>
      </section>
      <Image
        className={styles.curUser__bottomrip}
        src={bottomrip}
        alt="bottom transition image"
      />
    </main>
  );
}
