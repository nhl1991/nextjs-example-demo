'use client'
import LinkContainer from "@/src/components/ui/LinkContainer";
import { usePathname } from "next/navigation";

export default function Page() {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="flex flex-wrap gap-4">
        <LinkContainer link={`/useSearchParams`} />
        <LinkContainer link={`/usePathname`} />
        <LinkContainer link={`/useSWR`} />
        <LinkContainer link={`/useEffect`} />
        <LinkContainer link={`/difference-between-useRef-useState`} />
      </div>
    </div>
  );
}
