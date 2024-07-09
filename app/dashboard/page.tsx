import Link from "next/link";

export default async function Dashboard() {
  return (
    <main className="pt-10 max-w-[1300px] mx-auto">
      <h1>Dashboard</h1>
      <Link href="/dashboard/posts">Blog</Link>
    </main>
  );
}
