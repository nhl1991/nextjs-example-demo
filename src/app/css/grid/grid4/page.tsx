'use client'

import { useEffect, useRef, useState } from "react";

export default function Page() {
  const [count, setCount] = useState(6); // 초기 항목 개수
  const loaderRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCount(prev => prev + 16); 
        }
      },
      {
        threshold: 1.0,
      }
    );

    const el = loaderRef.current;
    if (el) observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, []);

  return (
    <div className="w-screen h-screen bg-black p-10 flex items-center justify-center">
      <div className="w-full h-full max-w-[2560px] max-h-[1440px] overflow-auto grid grid-cols-[repeat(3,minmax(160px,1fr))] grid-rows-[repeat(2,minmax(240px,1fr))] auto-rows-[minmax(240px,1fr)] gap-2">
        {
          Array.from({ length: count }).map((_, i) => (
            <div key={i} className="w-full h-full rounded-2xl p-4">
              <div className="w-full h-full bg-neutral-900 rounded-2xl flex items-center justify-center">
                <p className="text-6xl text-white">{i}</p>
              </div>
            </div>
          ))
        }

        {/* 감시 대상 (화면 하단에 감지됨) */}
        <div ref={loaderRef} className="h-10 col-span-full" />
      </div>
    </div>
  );
}
