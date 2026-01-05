import Link from "next/link";

export default async function Slot() {
  await new Promise((r) => setTimeout(r, 5000));
  return <div className="w-90 h-48 rounded-xl border-2 border-lime-200 shadow-xl flex flex-col items-center justify-center">Loaded Component A
  <Link className="rounded-xl px-3 py-1 bg-sky-400 text-white" href={'/parellel-routes/extra'}>Extra route</Link>
  </div>;
}
