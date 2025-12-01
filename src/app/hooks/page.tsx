"use client";
import LinkContainer from "@/src/components/ui/LinkContainer";
import { usePathname } from "next/navigation";

export default function Page() {
  const pathname = usePathname();
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="flex flex-col flex-wrap gap-4">
        <article className="flex flex-col gap-4">
          <h2>REACT</h2>

          <LinkContainer
            link={pathname + `/useEffect`}
          />

          <LinkContainer
            link={pathname + `/useCallback`}
          />
          <LinkContainer
            link={pathname + `/difference-between-useRef-useState`}
          />
        </article>
        <article className="flex flex-col gap-4">
          <h2>Next.js</h2>
          <LinkContainer link={pathname + `/useSearchParams`} />
          <LinkContainer link={pathname + `/usePathname`} />
          <LinkContainer link={pathname + `/useSWR`} />
        </article>
      </div>
    </div>
  );
}
