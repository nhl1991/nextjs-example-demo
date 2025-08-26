import ClientComponent1 from "@/src/components/device-detection-demo/ClientComponent_1";
import ClientComponent2 from "@/src/components/device-detection-demo/ClientComponent_2";
import ClientComponent3 from "@/src/components/device-detection-demo/ClientComponent_3";
import ServerComponent from "@/src/components/device-detection-demo/ServerComponent";
import { Suspense } from "react";

export default function Page(){


  return (
    <div className="w-full h-full flex-col items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <p className="md:text-base text-xs text-center font-bold">
        Open the browser development tool and swap the viewport.
      </p>
      <Suspense fallback={<p>Loading...</p>}>
      <div className="max-w-full p-4"><ClientComponent1 /></div>
      <div className="max-w-full p-4"><ClientComponent2 /></div>
      <div className="max-w-full p-4"><ClientComponent3 /></div>
      <div className="max-w-full p-4"><ServerComponent /></div>
      </Suspense>
      
    </div>
  );
}
