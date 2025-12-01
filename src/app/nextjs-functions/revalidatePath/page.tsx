"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page() {
    const pathname = usePathname();
  async function handleClick() {
    await fetch("/api/revalidatePath", {
      method: "POST",
      body: JSON.stringify({ path: pathname }),
    });
  }

  useEffect(() => {
    console.log("Rendered.");
  });

  return (
    <div className="flex flex-col gap-4">
      <ul className="flex flex-col gap-2">
        <li>
          <h1>revalidatePath()</h1>
        </li>

        <li>
          <p>
            revalidatePath()は<b>Cached Data</b>を要請時点で無効化します。
          </p>
        </li>
        <li>
          <p>
            revalidatePath()は<b>Server function</b>や<b>Route Handler</b>
            で使います。
          </p>
        </li>
        <li>
          <p>
            revalidatePath()は<b>Client Component</b>や
            <b>Proxy(旧:middleware)</b>では使えません。
          </p>
        </li>
      </ul>
      <button className="button-hover" type="submit" onClick={handleClick}>
        Revalidate
      </button>
    </div>
  );
}
