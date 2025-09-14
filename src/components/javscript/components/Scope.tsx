import { useEffect, useState } from "react";
import Details from "../ui/Details";
import Summary from "../ui/Summary";
import Code from "../Code";

export default function Scope() {
  const [code, setCode] = useState("");

  useEffect(() => {
    fetch("/script/scope.js")
      .then((res) => res.text())
      .then(setCode);
  }, []);

  return (
    <Details>
      <Summary>Scope</Summary>
      <Code>{code}</Code>
    </Details>
  );
}