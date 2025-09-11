"use client";

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
        <ul className="list-disc">
          <li>
            <Scope />
          </li>
          <li>
            <Hoisting />
          </li>
          <li>
            <Const />
          </li>
        </ul>
      </div>
    </section>
  );
}

function Scope() {
  const [code, setCode] = useState("");

  useEffect(() => {
    fetch("/script/scope.js")
      .then((res) => res.text())
      .then(setCode);
  }, []);

  return (
    <details className="group">
      <summary className="flex items-center">
        <h1 className="text-3xl font-bold">Scope</h1>
        <span className="transition-all group-open:rotate-180  hover:opacity-50">
          <ChevronDown />
        </span>
      </summary>
      <div className="w-[48rem] whitespace-pre-wrap bg-black dark:bg-white rounded-2xl text-green-300 px-8 py-2">
        <code>{code}</code>
      </div>
    </details>
  );
}

function Hoisting() {
  const [code, setCode] = useState("");

  useEffect(() => {
    fetch("/script/hoisting.js")
      .then((res) => res.text())
      .then(setCode);
  }, []);

  return (
    <details className="group">
      <summary className="flex">
        <h1 className="text-3xl font-bold">Hoisting</h1>
        <span className="transition-all group-open:rotate-180  hover:opacity-50">
          <ChevronDown />
        </span>
      </summary>
      <div className="w-[48rem] whitespace-pre-wrap bg-black dark:bg-white rounded-2xl text-green-300 px-8 py-2">
        <code>{code}</code>
      </div>
    </details>
  );
}

function Const() {
  const [code, setCode] = useState("");

  useEffect(() => {
    fetch("/script/const.js")
      .then((res) => res.text())
      .then(setCode);
  }, []);

  return (
    <details className="group">
      <summary className="flex">
        <h1 className="text-3xl font-bold">{`[const]と[不変性]の違い`}</h1>
        <span className="transition-all group-open:rotate-180  hover:opacity-50">
          <ChevronDown />
        </span>
      </summary>
      <div className="w-[48rem] whitespace-pre-wrap bg-black dark:bg-white rounded-2xl text-green-300 px-8 py-2">
        <code>{code}</code>
      </div>
    </details>
  );
}
function ChevronDown() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="currentColor"
      className="w-8"
    >
      <path
        fillRule="evenodd"
        d="M7.47 12.78a.75.75 0 0 0 1.06 0l3.25-3.25a.75.75 0 0 0-1.06-1.06L8 11.19 5.28 8.47a.75.75 0 0 0-1.06 1.06l3.25 3.25ZM4.22 4.53l3.25 3.25a.75.75 0 0 0 1.06 0l3.25-3.25a.75.75 0 0 0-1.06-1.06L8 6.19 5.28 3.47a.75.75 0 0 0-1.06 1.06Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
