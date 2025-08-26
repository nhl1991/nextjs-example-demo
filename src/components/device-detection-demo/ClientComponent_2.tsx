"use client";

import { useEffect, useState } from "react";
import Wrapper from "./ui/Wrapper";
import ComponentName from "./ui/ComponentName";

export default function ClientComponent2() {
  const [userAgent, setUserAgent] = useState<boolean>(false);
  const [width, setWidth] = useState<boolean>(false);
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    const isMobile =
      /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        window.navigator.userAgent
      );
    setUserAgent(isMobile || width);

    console.log("value changed.");

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [width]);

  return (
    <Wrapper>
      <ComponentName>CLIENT-COMPONENT 2</ComponentName>
      <p className="text-sm">
        Use the <b>&apos;resize&apos; event listener</b> and{" "}
        <b>window.navigator</b>.
      </p>

      <p className="p-2 font-bold">{width ? "width < 768" : "width > 768"} </p>
      <div className="flex items-center justify-center p-2">
        <p className="p-2">{userAgent ? "MOBILE" : "DESKTOP"} </p>
        <div
          className={`w-4 h-4 rounded-full ${
            userAgent ? `bg-green-500` : `bg-red-500`
          }`}
        ></div>
      </div>
    </Wrapper>
  );
}
