"use client";
import { useParams } from "next/navigation";

export default function DynamicSegmentClient() {
  const params = useParams<{ pathname: string }>();
  const pathname = params.pathname;

  return <div>
    You can get the segment using useParams, when CSR.
    <p>useParams() : {pathname}</p></div>;
}
