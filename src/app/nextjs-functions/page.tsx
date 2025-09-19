'use client'
import LinkContainer from "@/src/components/ui/LinkContainer";
import { usePathname } from "next/navigation";

export default function Page() {
    const pathname = usePathname();
  return (
    <main className="w-screen h-screen flex flex-col items-center justify-center">
      <div>
        <h1>Next.js Functions</h1>
      </div>
      <div className="">
        <ul>
          <li>
            <LinkContainer link={`${pathname}/after`} />
          </li>
        </ul>
      </div>
    </main>
  );
}
