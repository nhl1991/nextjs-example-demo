"use client";
import Intro from "@/src/components/lp-practice/intro";
import ItemContainer from "@/src/components/lp-practice/itemContainer";
import Image from "next/image";

export default function Page() {
  return (
    <main className="w-screen h-screen">
      <figure className="w-screen h-screen fixed -z-10">
        <Image
          src="/resource/background/bg-img.JPEG"
          className="relative object-cover"
          fill
          sizes="(max-width: 768px) 50vw, 100vw"
          alt="background image"
        />
      </figure>
      <Intro />
      <ItemContainer />
    </main>
  );
}
