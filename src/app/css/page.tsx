"use client";
import LinkContainer from "@/src/components/ui/LinkContainer";
import { usePathname, useRouter } from "next/navigation";

export default function Page() {
  const pathname = usePathname();
  return (
    <main className="w-screen h-screen p-12 flex flex-col gap-y-8 items-center justify-center">
      <header>
        <h1 className="text-[clamp(4rem,3rem+3vw,10rem)]">このサイトは</h1>
        <p className="text-[clamp(1rem,1.5rem+1vw,4rem)]">
          個人的にリラックスしながら作りたいことを作ってアップロードしています。
        </p>
      </header>

      <div className="max-w-[48rem] flex flex-wrap p-4 gap-2">
            <LinkContainer link={pathname + "/boxsizing"} />
            <LinkContainer link={pathname+"/viewport-unit"} />
            <LinkContainer link={pathname+"/grid"} />
            <LinkContainer link={pathname+"/clamp"} />
            <LinkContainer link={pathname+"/lp-example-01"} />
      </div>
    </main>
  );
}
