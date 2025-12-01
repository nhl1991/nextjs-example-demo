import Error from "next/error";
import Link from "next/link";

export default function NotFound({ error }: { error: Error }) {
  return (
    <section className="w-screen h-screen flex flex-col gap-8 items-center justify-center">
      <p className="text-6xl font-bold animate-pulse">404 - Page Not Found</p>
      <p>This page does not exist.</p>
      <Link className="px-4 py-2 hover:bg-sky-400 rounded-xl hover:text-white" href="/">戻る</Link>
    </section>
  );
}
