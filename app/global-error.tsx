"use client";

import Link from "next/link";

export default function GlobalError({
  error,
}: {
  error: Error & { digest?: string };
}) {
  return (
    <main className="error">
      <h1>An Error Occurred!</h1>
      <p>Fail to fetch data. Please try again later</p>
      <Link href="/home">Back to Home</Link>
    </main>
  );
}
