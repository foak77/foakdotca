"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import styles from "./NameUpdate.module.scss";
import { useStore } from "../../global-store/globalStore";
import Link from "next/link";
import Image from "next/image";
import toprip from "./../../public/images/transition1.png";
import bottomrip from "./../../public/images/transition2.png";

export default function UserUpdate(userId) {
  const router = useRouter();
  let data;

  //LOCAL STATE
  const [message, setMessage] = useState("");
  const [newName, setNewName] = useState("");

  //GLOBAL STATE
  const userName = useStore((state) => state.userName);

  //STATE FUNCTIONS
  const updateUserName = useStore((state) => state.updateUserName);
  const updateAppConnection = useStore((state) => state.updateAppConnection);

  // TO UPDATE THE USER
  const handleSubmit = async (e) => {
    e.preventDefault();

    const updateUserBody = {
      id: userId.userId,
      name: newName,
    };

    try {
      const response = await fetch(`/api/name-update/${userId.userId}`, {
        method: "PUT",
        body: JSON.stringify(updateUserBody),
        headers: {
          "Content-type": "application/json",
        },
      });
      data = await response.json();
      setMessage(`${data.message}`);
      await updateUserName(data.user.name);
      router.push(`/user/${data.user._id}`);
    } catch (error) {
      console.log(error);
      await updateAppConnection(false);
      alert("SESSION EXPIRED");
      router.push("/sign-in");
    }
    return;
  };
  return (
    <main className={styles.userUpdate}>
      <Image className={styles.userUpdate__toprip} src={toprip} alt="top rip" />
      <section className={styles.userUpdate__wrapper}>
        <div className={styles.userUpdate__wrap}>
          <div className={styles.userUpdate__twrap}>
            <h2 className={styles.userUpdate__title}>UPDATE NAME</h2>
          </div>

          <p className={styles.userUpdate__message}>{message}</p>

          <form onSubmit={handleSubmit}>
            <h3 className={styles.userUpdate__userName}>
              Name in the System:{" "}
              <span className={styles.userUpdate__red}>{userName}</span>
            </h3>
            <input
              className={styles.userUpdate__input}
              onChange={(e) => setNewName(e.target.value)}
              value={newName}
              type="text"
              placeholder={`Update your name ${userName}`}
            />
            <button className={styles.userUpdate__button} type="submit">
              UPDATE NAME
            </button>
          </form>
          <Link href={`/user/${userId.userId}`}>
            <button className={styles.userUpdate__button}>
              BACK TO PROFILE
            </button>
          </Link>
        </div>
      </section>
      <Image
        className={styles.userUpdate__bottomrip}
        src={bottomrip}
        alt="bottom transition image"
      />
    </main>
  );
}
