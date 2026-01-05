import React, { Suspense } from "react";
import Skeleton from "./_skeleton/Skeleton";

export default function ParellerLayout({
  children,
  A,
  B,
}: {
  children: React.ReactNode;
  A: React.ReactNode;
  B: React.ReactNode;
}) {
  return (
    <main className="w-screen h-screen flex flex-col items-center justify-center gap-y-2">
      <div className="flex gap-x-8">
        <h1 className="text-3xl">Parallel Routes</h1>
      </div>
      <div className="flex gap-2">
        <div>
          <h2>Children</h2>
          <Suspense fallback={<Skeleton />}>{children}</Suspense>
        </div>
        <div>
          <h2>Slot A will be loaded after 5 seconds.</h2>
          <Suspense fallback={<Skeleton />}>{A}</Suspense>

          <h2>Slot B will be loaded after 3 seconds.</h2>
          <Suspense fallback={<Skeleton />}>{B}</Suspense>
        </div>
      </div>
      <p>When refreshing, default.tsx will replace the children & slot B</p>
    </main>
  );
}
