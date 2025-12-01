"use client";
import Image from "next/image";
import Link from "next/link";

export default function ItemCard({
  city,
}: {
  city: { name: {jp: string, en:string}; src: string; external_url: string };
}) {
  return (
    <article className="relative w-72 h-80 flex-shrink-0 rounded-xl overflow-hidden hover:scale-105 transition-all duration-100 border-2 border-transparent hover:border-zinc-100 ">
      <Image
        src={city.src}
        alt="item image"
        fill
        className="object-cover object-bottom"
        sizes="(max-width: 768px) 33vw, 50vw"
      />

      <div className="relative z-10 w-full h-full flex flex-col justify-between items-center gap-y-8 py-8">
        <div className="flex flex-col items-center text-white">
        <h1 className="text-6xl font-extrabold ">{city.name.jp}</h1>
        <h2>{city.name.en}</h2>
        </div>

        <div className="h-8">
          <Link
            href={city.external_url}
            className="px-3 py-1.5 rounded-xl bg-black text-white font-bold cursor-pointer"
          >
            詳しく見る
          </Link>
        </div>
      </div>
    </article>
  );
}
