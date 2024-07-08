import Link from "next/link";

export default async function Admin() {
  return (
    <main className="pt-40 max-w-[1300px] mx-auto">
      <h1>Admin</h1>
      <Link href="/admin/posts">Blog</Link>
    </main>
  );
}
