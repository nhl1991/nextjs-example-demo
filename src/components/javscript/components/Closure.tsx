"use client";

import Code from "../Code";
import ChevronDown from "../icon/ChevronDown";
import Details from "../ui/Details";
import Summary from "../ui/Summary";

export default function Closure() {
  return (
    <Details>
        <Summary>{`クロージャ`}</Summary>
      <div className="flex flex-col gap-4">
        <div>
          <p>
            Closureはレキシカルスコープによって決定されたスコープを記憶し、実行時にはスコープチェーンによって変数を参照できるようにします。
          </p>
          <p>
            通常、関数の実行が終了するとGCがメモリから変数を回収しますが、JavaScriptの関数はクロージャを生成することで、GCによって回収されず、実行終了後でも変数を参照できます。
          </p>
        </div>
        <Code>
          {`function makeCounter() {
  let count = 0;   
  return function() {
    count++;       
    return count;
  };
}

const counter = makeCounter();

console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3`}
        </Code>
      </div>
      <div>
        <p>
          この場合、通常であれば count
          変数は各実行後に回収されるはずですが、クロージャによって回収されず、値を保持し続けています。
        </p>
      </div>
      <Code>
        {`function A(){

}


//Closure
function B() {
  const name = 'text';
  function C() {
    console.log(name);
  }
  return C;   // 戻り値が関数
}

const fn = B();
fn(); // "text"`}
      </Code>
      <div>
        <p>
          この場合、Aは回収されますが、Bは実行後でもC関数がnameを参照しているので、回収させません。
        </p>
      </div>
      <Code>
        {`
          function A(){}
          A()
        `}
      </Code>
      <div>
        <p>この関数は外部に戻り値や保存をしないから回収されます。</p>
      </div>
      <Code>
        {`
          function A(){}
          const fn = A()
        `}
      </Code>
    </Details>
  );
}
