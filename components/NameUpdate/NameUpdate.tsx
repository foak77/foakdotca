"use client";
import { useRouter } from "next/navigation";
import { useState, FormEvent } from "react";
import styles from "./NameUpdate.module.scss";
import { useStore } from "../../global-store/globalStore";
import Link from "next/link";
import Image from "next/image";
import toprip from "./../../public/images/transition1.png";
import bottomrip from "./../../public/images/transition2.png";

// Define the props for the UserUpdate component
interface UserUpdateProps {
  userId: string; // Assuming userId is a string. If it's a number, change this type accordingly.
}

const UserUpdate: React.FC<UserUpdateProps> = ({ userId }) => {
  const router = useRouter();
  let data: any;

  // LOCAL STATE
  const [message, setMessage] = useState<string>("");
  const [newName, setNewName] = useState<string>("");

  //GLOBAL STATE
  const userName = useStore((state) => state.userName);

  // STATE FUNCTIONS
  const updateUserName = useStore((state) => state.updateUserName);
  const updateAppConnection = useStore((state) => state.updateAppConnection);

  // TO UPDATE THE USER
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const updateUserBody = {
      id: userId,
      name: newName,
    };

    try {
      const response = await fetch(`/api/name-update/${userId}`, {
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
        <section className={styles.userUpdate__wrap}>
          <section className={styles.userUpdate__twrap}>
            <h2 className={styles.userUpdate__title}>UPDATE NAME</h2>
          </section>

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
          <Link href={`/user/${userId}`}>
            <button className={styles.userUpdate__button}>
              BACK TO PROFILE
            </button>
          </Link>
        </section>
      </section>
      <Image
        className={styles.userUpdate__bottomrip}
        src={bottomrip}
        alt="bottom transition image"
      />
    </main>
  );
};

export default UserUpdate;
