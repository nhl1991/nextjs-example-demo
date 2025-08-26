"use client";
import ComponentName from "@/src/components/device-detection-demo/ui/ComponentName";
import Wrapper from "@/src/components/device-detection-demo/ui/Wrapper";
import UseSearchParams from "@/src/components/hooks/useSearchParams/SearchParamsComponent";
import { Suspense } from "react";

export default function Page() {

  return (
    <Wrapper>
      <div className="w-96">
        <ComponentName>useSearchParams</ComponentName>
        <p className="px-4 py-1">
          useSearchParams is a Client Component hook that lets you read the
          current URL&apos;s query string. useSearchParams returns a read-only
          version of the URLSearchParams interface.
        </p>
        <Suspense fallback={<p>Loading...</p>}>
          <UseSearchParams />
        </Suspense>
      </div>
    </Wrapper>
  );
}
