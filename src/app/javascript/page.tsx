'use client'
import LinkContainer from "@/src/components/ui/LinkContainer";
import { usePathname } from "next/navigation";

export default function Page() {
    const pathname = usePathname();
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="flex flex-wrap gap-4">
        <LinkContainer link={pathname + `/variable`} />
      </div>
    </div>
  );
}
