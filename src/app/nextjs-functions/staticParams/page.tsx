"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Page() {
  const pathname = usePathname();

  return (
    <section>
      <h1>{`generateStaticParams()`}</h1>
      <h2>概要</h2>
      <p>
        {`generateStaticParams()`}はビルド祭、特定ページを
        <b className="bold-text">静的なページ(static)</b>に生成する関数です。
      </p>
      
      <p>Parameterは</p>

      <ul className="flex gap-4">
        <li className="button-hover">
          <Link href={pathname + "/generate"}>generate</Link>
        </li>
        <li className="button-hover">
          <Link href={pathname + "/static"}>static</Link>
        </li>
        <li className="button-hover">
          <Link href={pathname + "/params"}>params</Link>
        </li>

        <li className="button-hover">
          <Link href={pathname + "/wrong_pathname"}>wrong_pathname</Link>
        </li>
      </ul>
    </section>
  );
}
