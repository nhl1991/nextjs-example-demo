"use client";

import Code from "@/src/components/javscript/Code";
import Closure from "@/src/components/javscript/components/Closure";
import Const from "@/src/components/javscript/components/Const";
import Hoisting from "@/src/components/javscript/components/Hoisting";
import Scope from "@/src/components/javscript/components/Scope";
import ScopeChain from "@/src/components/javscript/components/ScopeChain";
import ChevronDown from "@/src/components/javscript/icon/ChevronDown";
import Details from "@/src/components/javscript/ui/Details";
import Summary from "@/src/components/javscript/ui/Summary";
import { useEffect, useState } from "react";

export default function Page() {
  return (
    <section className="w-screen min-h-screen flex flex-col gap-4 items-center ">
      <div>
        <h1 className="text-3xl font-bold">Variable</h1>
      </div>
      <div>
        <ul className="flex gap-2">
          <li>Scope</li>
          <li>Hoisting</li>
        </ul>
      </div>
      <div className="w-[48rem]">
        <ul className="list-disc flex flex-col gap-2 p-2">
          <li>
            <Scope />
          </li>
          <li>
            <Hoisting />
          </li>
          <li>
            <Const />
          </li>
          <li>
            <ScopeChain />
          </li>
          <li>
            <Closure />
          </li>
        </ul>
      </div>
    </section>
  );
}





