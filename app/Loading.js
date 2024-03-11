import styles from "./Loading.module.scss";

export default function Loading() {
  return (
    <main className={`${styles.loading}`}>
      <p className={styles.loading_text}>Loading...</p>;
    </main>
  );
}
