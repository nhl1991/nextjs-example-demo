"use client";
import Wrapper from "@/src/components/device-detection-demo/ui/Wrapper";
import Image from "next/image";
import { ChangeEvent, useEffect, useRef, useState } from "react";

export default function Page() {
  const [isLoading, setIsLoading] = useState(false);
  const [currentSrc, setCurrentSrc] = useState<string>("");
  const [ viewport, setViewport ] = useState<number>(0);
  const [dpr, setDpr] = useState(1);
  const imageRef = useRef<HTMLImageElement>(null);
  //   if (imageRef.current) {
  //     console.log("sizes=", imageRef?.current.sizes); // 진짜 DOM에 뭐가 들어갔는지
  //     console.log("currentSrc=", imageRef?.current.currentSrc); // 실제 선택 URL
  //     console.log("naturalWidth=", imageRef?.current.naturalWidth);
  //   }
  useEffect(() => {
    if (!window || !imageRef.current) return;
    if(window.visualViewport)
    setViewport(window.visualViewport?.width)
    const img = imageRef.current;

    const updateDPR = () => {
      setDpr(window.devicePixelRatio);
      setCurrentSrc(img.currentSrc);
    };
    updateDPR();

    const onResize = () => updateDPR();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [imageRef.current]);

  return (
    <Wrapper>
      <div className="w-full h-full items-center justify-center">
        <div className="w-full h-full p-4 relative">
          <div className="aspect-[16/9] relative bg-red-700 p-2">
            <Image
              ref={imageRef}
              className="object-contain"
              src="https://bnetcmsus-a.akamaihd.net/cms/content_entry_media/U6GPDHSY9JN01589912855861.jpg"
              alt="image not found"
              fill
              sizes={`20vw`}
              onLoad={() => setIsLoading(true)}
            />
          </div>
          {isLoading ? (
            <div className="absolute top-4 p-2 rounded-2xl bg-gray-300/80">
              <div className="w-minoverflow-scroll">
                
                <div className="flex max-w-full flex-wrap">
                    <p>srcset : </p>
                  {imageRef.current
                    ? imageRef.current.srcset.split(",").map((item, index) => {
                        if (
                          imageRef.current &&
                          imageRef.current.currentSrc.split("&")[1] ===
                            item.split("&")[1]
                        )
                          return (
                            <p
                              className="bg-sky-400 text-white px-2 py-0.5 rounded-xl"
                              key={index}
                            >
                              {item.split("&")[1]}
                            </p>
                          );
                        return (
                          <p key={index} className="px-2 py-0.5">
                            {item.split("&")[1]}
                          </p>
                        );
                      })
                    : "-"} {"(Default srcset provided by next.js)"}
                </div>
              </div>
              <p>
                currentSrc:{" "}
                {imageRef.current ? currentSrc.split("&")[1] : "-"}
              </p>
              <p>Sizes: {imageRef.current ? imageRef.current.sizes : "-"}</p>

              <p>DPR: {dpr}</p>
              <p>viewport : {viewport}</p>
              <p>
                SlotWidth:{" "}
                {viewport * 20 /100}px {"(Viewport * sizes / 100)"}
              </p>
              <p>
                Expected-w:{" "}
                First element that is bigger than {viewport * 20 /100 * dpr}px in srcset.
              </p>
              <p>
                NaturalWidth:{" "}
                {imageRef.current ? imageRef.current.naturalWidth : "-"}
              </p>

              <p>
                ClientWidth:{" "}
                {imageRef.current ? imageRef.current.clientWidth : "-"}
              </p>
              
              <p>
                Effective DPR≈{" "}
                {imageRef.current ? currentSrc.split("&")[1] : "-"};
              </p>
              <div className="px-4">
              <p>{'* slotWidth = viewport * sizes/100 (ex. viewport = 1280px, sizes = 20vw slot-width : 1280px * 20vw / 100 = 256px '}</p>
              <p>{`* slotWidth * DPR =< srcset slot-width is 256px and DPR is 2, 256*2 is 512px. Browser choose the bigger than 512px in srcset. In this example, Result is w640.`}</p>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </Wrapper>
  );
}
