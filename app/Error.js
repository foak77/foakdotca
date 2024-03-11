"use client";

export default function Error({ error }) {
  return (
    <main className="error">
      <h1>An Error Occurred!</h1>
      <p>Fail to fetch data. Please try again later</p>
    </main>
  );
}
