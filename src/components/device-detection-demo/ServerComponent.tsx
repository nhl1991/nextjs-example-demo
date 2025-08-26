"use server";

import { cookies, headers } from "next/headers";
import Wrapper from "./ui/Wrapper";
import ComponentName from "./ui/ComponentName";

export default async function ServerComponent() {
  const cookieStore = await cookies();
  const userAgent = cookieStore.get("x-is-mobile")?.value;
  console.log(userAgent);
  return (
    <Wrapper>
      <ComponentName>SERVER-COMPONENT</ComponentName>
      <p className="text-sm">
        Retrieve x-is-mobile from the cookie previously set by the middleware.
      </p>
      <div className="flex items-center justify-center p-2">
        <p className="p-2">{userAgent === "true" ? "MOBILE" : "DESKTOP"}</p>
        <div
          className={`w-4 h-4 rounded-full ${
            userAgent === "true" ? `bg-green-500` : `bg-red-500`
          }`}
        ></div>
      </div>
    </Wrapper>
  );
}
