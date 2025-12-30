'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LinkContainer({ link }: { link: string }) {
  return (
    <div className="rounded-xl relative">
      
      <div className="relative p-1 rounded-xl border-gradient">
        <Link
          className="bg-white dark:bg-black rounded-lg px-4 py-1"
          href={link}
        >
          {link}
        </Link>
      </div>
    </div>
  );
}
