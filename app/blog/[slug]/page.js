import Link from "next/link";

export default function BlogPostPage({ params }) {
  return (
    <main>
      <h1>Blog Post Page</h1>
      <p>{params.slug}</p>
      <p>
        <Link href={"/blog"}>Blog Page</Link>
      </p>
      <p>
        <Link href={"/"}>Home</Link>
      </p>
    </main>
  );
}
