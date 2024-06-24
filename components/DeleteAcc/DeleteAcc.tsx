"use client";
import styles from "./deleteUser.module.scss";
import Link from "next/link";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { useStore } from "./../../global-store/globalStore";
import Image from "next/image";
import toprip from "./../../public/images/transition1.png";
import bottomrip from "./../../public/images/transition2.png";

type dataType = {
  message: string;
  error: boolean;
  status: number;
};

type utbdType = {
  userId: string;
};

export default function DeleteUser(userIdToBeDeleted: utbdType) {
  console.log("DELETE USER NUMBER", userIdToBeDeleted.userId);
  const router = useRouter();

  // LOCAL STATE
  const [message, setMesssage] = useState("");

  //GLOBAL STATE
  let userName: string = useStore((state) => state.userName);

  //STATE FUNCTIONS
  const updateAppConnection = useStore((state) => state.updateAppConnection);
  const updateUserId = useStore((state) => state.updateUserId);
  const updateUserName = useStore((state) => state.updateUserName);

  //REFS FROM INPUT
  const passwordInputRef = useRef<HTMLInputElement | null>(null);

  const deleteAcc = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let data: dataType;
    const password: string = passwordInputRef.current.value;

    const userPassword = {
      password: password,
      userId: userIdToBeDeleted.userId,
    };

    try {
      const response = await fetch(
        `/api/delete-acc/${userIdToBeDeleted.userId}`,
        {
          method: "PATCH",
          body: JSON.stringify(userPassword),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      data = await response.json();

      if (data.error) {
        setMesssage(`${data.message}`);
        return;
      }

      // UPDATING GLOBAL STATE
      setMesssage(data.message);
      await updateAppConnection(false);
      await updateUserId("");
      await updateUserName("");
      router.push("/");
    } catch (error) {
      console.log(error);
      await updateAppConnection(false);
      alert("SESSION EXPIRED");
      router.push("/sign-in");
    }
    return;
  };
  return (
    <main className={styles.deleteUser}>
      <Image className={styles.deleteUser__toprip} src={toprip} alt="top rip" />
      <div className={styles.deleteUser__wrapper}>
        <div className={styles.deleteUser__wrap}>
          <div className={styles.deleteUser__twrap}>
            <h2 className={styles.deleteUser__title}>DELETE ACCOUNT</h2>
          </div>
          <p className={styles.deleteUser__message}>{message}</p>
          <div>
            <p className={styles.deleteUser__question}>
              Dear{" "}
              <span className={styles.deleteUser__red}>
                <strong>{userName}</strong>
              </span>
              , Are You Sure?
            </p>
            <form className={styles.deleteUser__form} onSubmit={deleteAcc}>
              <label className={styles.deleteUser__label}>
                Confirm your
                <span className={styles.deleteUser__red}>
                  <strong> password </strong>
                </span>
                and{" "}
                <span className={styles.deleteUser__red}>
                  <strong>click on YES.</strong>
                </span>
              </label>
              <input
                className={styles.deleteUser__input}
                ref={passwordInputRef}
                type="password"
                name="password"
                placeholder="Place Your Password Here"
                required
              />
              <button
                className={`${styles.deleteUser__button} ${styles.deleteUser__redb}`}
                type="submit"
              >
                YES - DELETE
              </button>
            </form>

            <Link href={`/user/${userIdToBeDeleted.userId}`}>
              <button className={styles.deleteUser__button}>
                BACK TO PROFILE
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Image
        className={styles.deleteUser__bottomrip}
        src={bottomrip}
        alt="bottom transition image"
      />
    </main>
  );
}
