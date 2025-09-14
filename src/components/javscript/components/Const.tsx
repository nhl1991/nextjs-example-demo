'use client'
import { useEffect, useState } from "react";
import Details from "../ui/Details";
import Summary from "../ui/Summary";
import Code from "../Code";

export default function Const() {
  const [code, setCode] = useState("");

  useEffect(() => {
    fetch("/script/const.js")
      .then((res) => res.text())
      .then(setCode);
  }, []);

  return (
    <Details>
      <Summary>{`[const]と[不変性]の違い`}</Summary>
      <Code>{code}</Code>
    </Details>
  );
}