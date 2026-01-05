"use client";

import Link from "next/link";
import { ChangeEvent, useState } from "react";
import Image from "next/image";

export default function Page() {
  const [segment, setSegment] = useState<string>("");

  return (
    <div className="w-screen h-screen flex gap-y-4 flex-col items-center justify-center">
        <h1 className="text-2xl">Dynamic Segment</h1>
      <input
        type="text"
        placeholder="Segment"
        className="border-b-2 border-b-slate-500 hover:border-b-sky-500 outline-none"
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setSegment(e.currentTarget.value)
        }
      />
      {segment ? <div className="flex items-center justify-center gap-x-4">
        <figure className="w-10 h-10 relative rounded-full overflow-hidden">
          <Image
            src="/resource/going-dynamic.jpg"
            className="object-cover"
            fill
            alt="Image of Going dynamic"
            sizes="(max-width: 768px) 10vw, 5vw"
          />
        </figure>
        <Link href={`/dynamic-segment/${segment}`} className="font-serif italic rounded-xl bg-sky-400 hover:bg-sky-800 px-3 py-1">"GOING DYNAMIC"</Link>
      </div>:<div className="h-10"></div>}
    </div>
  );
}
