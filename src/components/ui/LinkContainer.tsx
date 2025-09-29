'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LinkContainer({ link }: { link: string }) {
  const pathname = usePathname()
  console.log(pathname);
  if (link.includes('http') || pathname === '/')
    return (
      <div className=" rounded-2xl dark:border-white border-2 hover:opacity-80 cursor-pointer">
        <Link className="p-1 px-4 w-full h-full" href={link}>{link}</Link>
      </div>
    )
  else
    return (
      <div className="rounded-2xl dark:border-white border-2 hover:opacity-80 cursor-pointer">
        <Link className="px-4 p-1 w-full h-full" href={pathname + link} >{link}</Link>
      </div>
    )
}