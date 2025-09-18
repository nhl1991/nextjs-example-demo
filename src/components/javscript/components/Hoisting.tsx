"use client";
import { useEffect, useState } from "react";
import Details from "../ui/Details";
import Summary from "../ui/Summary";
import Code from "../Code";
import Text from "../ui/Text";

export default function Hoisting() {
  const [code, setCode] = useState("");

  useEffect(() => {
    fetch("/script/hoisting.js")
      .then((res) => res.text())
      .then(setCode);
  }, []);

  return (
    <Details>
      <Summary>Hoisting</Summary>
      <Text>
        Hoistingとは、変数宣言が関数スコープの先頭に引き上げられる仕組みを指す。
        そのため、宣言より前にアクセスできるように見える。
      </Text>
      <Code>
        {`console.log(hoisting_var); // undefined 
      var hoisting_var = 0;`}
      </Code>
      <Text>
        ただし、var・let・const、すべてHoistingされるが、
        let、constはTDZ(Temporal Dead Zone)の間は参照できない。
      </Text>
      <Code>{`console.log(hoisting_let);
let hoisting_let = 'This will return Reference Error'; 
`}</Code>
      <Text>
        結果: ReferenceError: Cannot access 'hoisting_let' before initialization
      </Text>
      <Code>{`console.log(hoisting_const);
const hoisting_const = 'This will return Reference Error'; `}</Code>
      <Text>
        結果: ReferenceError: Cannot access 'hoisting_const' before
        initialization
      </Text>
      <Text>関数のHositing</Text>
      <Text>
        関数宣言
        はホイスティングされるため、宣言より前でも呼び出すことができます。
      </Text>
      <Code>{`
      foo()
      function foo(){
        //This function willbe hoisted.
      }
      `}</Code>
      <Text>
        でも、関数式（function
        expression）は変数に代入される形になるため、ホイスティングはされますが、宣言前に呼び出すとエラーになります。
      </Text>
      <Code>{`
        bar(); // ✅ OK (but undefined, not a function)
        var bar = () => {
        console.log("hello");
        };
      `}</Code>
    </Details>
  );
}
