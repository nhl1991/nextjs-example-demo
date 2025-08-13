"use client";
import ComponentName from "@/src/components/device-detection-demo/ui/ComponentName";
import Wrapper from "@/src/components/device-detection-demo/ui/Wrapper";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useRef, useState } from "react";

export default function Page() {
  const searchParams = useSearchParams();
  const inputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState<string>();
  function handleOnChange() {
    if (!inputRef.current) return;
    const el = inputRef.current;
    setQuery(el.value);
  }

  return (
    <Wrapper>
      <div className="w-96">
        <ComponentName>useSearchParams</ComponentName>
        <p className="px-4 py-1">
          useSearchParams is a Client Component hook that lets you read the
          current URL's query string. useSearchParams returns a read-only
          version of the URLSearchParams interface.
        </p>
        <div className="w-full">
          <p className="text-center py-2">
            /hooks/useSearchParams?query={searchParams.get("query")}
          </p>
          <input
            className="w-full h-max rounded-2xl border-2 border-white px-4"
            type="text"
            ref={inputRef}
            placeholder="Enter the query you want."
            onChange={handleOnChange}
          />
          <div className="p-2 px-2 w-full flex items-center justify-center">
            <Link className="px-4 py-0.5 hover:opacity-80 rounded-2xl border-1 border-white" href={`/hooks/useSearchParams?query=${query}`}>Show Result</Link>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
