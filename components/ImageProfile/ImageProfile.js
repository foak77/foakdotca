"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import styles from "./ImageProfile.module.scss";
import { useStore } from "./../../global-store/globalStore";
// import Image from "next/image";
import Link from "next/link";
// import { Content } from "next/font/google";

export default function ImageProfile(userId) {
  const router = useRouter();

  //LOCAL STATE
  const [message, setMessage] = useState("");
  const [file, setFile] = useState(undefined);
  let [tempImg, setTempImg] = useState("");
  const [save, setSave] = useState(false);

  //GLOBAL STATE
  // const userImage = useStore((state) => state.userImg);
  // tempImg = userImage;

  //STATE FUNCTIONS
  // const updateUserImage = useStore((state) => state.updateUserImage);
  const updateAppConnection = useStore((state) => state.updateAppConnection);

  // UPDLOAD PROFILE IMAGE
  const handleImgUpload = async (e) => {
    e.preventDefault();

    if (!file) return;

    try {
      const data = new FormData();
      data.append("file", file);

      const resp = await fetch(`/api/profile-img-upload/${userId.userId}`, {
        method: "POST",
        body: data,
      });
      const respData = await resp.json();
      // console.log("IMAGE", respData.url);

      if (respData.error) {
        setMessage(`${respData.message}`);
        return;
      }
      setSave(true);
      setMessage(respData.message);
      // setTempImg(respData.url);
    } catch (error) {
      console.log(error);
    }
  };

  //UPDATE SAVE
  const update = async (e) => {
    e.preventDefault();
    // console.log("TEMP", tempImg);

    try {
      const resp = await fetch(`/api/profile-img-update/${userId.userId}`, {
        method: "POST",
        body: JSON.stringify({ tempImg }),
        headers: { "Content-Type": "application/json" },
      });
      const respData = await resp.json();

      // console.log("UPDATE RESPONSE", respData);

      if (respData.error) {
        setMessage(respData.message);
        return;
      }

      // await updateUserImage(respData.user.profileImg);
      setMessage(respData.message);

      setInterval(() => {
        router.push(`/user/${userId.userId}`);
      }, 2000);
    } catch (error) {
      alert("SESSION EXPIRED");
      await updateAppConnection(false);
      router.push("/sign-in");
      console.log(error);
    }
  };

  return (
    <section className={styles.imgProfile}>
      <div className={styles.imgProfile__wrap}>
        <div className={styles.imgProfile__twrap}>
          <h2 className={styles.imgProfile__title}>UPDATE PROFILE IMAGE</h2>
        </div>

        <p className={styles.imgProfile__message}>{message}</p>

        <form onSubmit={handleImgUpload} encType="multipart/form-data">
          <div className={styles.imgProfile__imgBlock}>
            {/* {tempImg && (
              <Image
                className={styles.imgProfile__pImage}
                src={tempImg}
                width={150}
                height={150}
                alt="Profile Image"
              />
            )} */}

            {/* {tempImg && (
              <img
                src={tempImg}
                className={styles.imgProfile__pImage}
                alt="Profile Image"
              />
            )} */}
            <input
              className={styles.imgProfile__uploadImgButton}
              type="file"
              name="file"
              accept="image/*"
              id="file"
              onChange={(e) => setFile(e.target.files?.[0])}
            ></input>
          </div>

          <button className={styles.imgProfile__button} type="submit">
            PREVIEW IMAGE
          </button>
        </form>
        {save && (
          <button
            className={`${styles.imgProfile__button} ${styles.imgProfile__green}`}
            onClick={update}
          >
            SAVE
          </button>
        )}

        <Link href={`/user/${userId.userId}`}>
          <button className={styles.imgProfile__button}>BACK TO PROFILE</button>
        </Link>
      </div>
    </section>
  );
}
