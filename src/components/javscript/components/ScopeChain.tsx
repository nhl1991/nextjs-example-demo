"use client";

import Details from "../ui/Details";
import Summary from "../ui/Summary";
import Code from "../Code";

export default function ScopeChain() {

  return (
    <Details>
      <Summary>{`スコープチェーン`}</Summary>
      <div className="flex flex-col gap-4">
        <div className="p-2">
          <p className="">
            スコープチェーンは、実行時にどの変数を参照するかを決定します。
            例えば、下のコードのPrint関数の中のnameはどうのnameを参照するか？
          </p>
        </div>
        <Code>
          {`var name = "Toyota";
function PrintName() {
  var name = "Nissan";
  function Print() {
    console.log(name); // これの出力結果はなんですか？
  }
  Print();
}
PrintName();`}
        </Code>
        <div>
          <p>正解は「Nissan」です。</p>
          <p>
            スコープチェーンは現在のスコープ、親スコープ、グローバルスコープ順で探索します。
          </p>
          <p>
            この時点でスコープチェーンがどうのような順番で探索するかのを決めることが「Lexical
            scope」です。
          </p>
        </div>
        <div>
          <p>LexicalScopeは定義時点で関数の親スコープを決定します。</p>
          <p>下のコードではPrint関数の親スコープはPrintNameです。</p>
        </div>
        <Code>
          {`var name = "Toyota";
function PrintName() {
  var name = "Nissan";
  function Print() {
    console.log(name); // これの出力結果はなんですか？
  }
  Print();
}
PrintName();`}
        </Code>
        <div>
          <p>この場合はPrintの親スコープはグローバルです。</p>
        </div>
        <Code>
          {`var name = "Toyota";
function PrintName() {
  var name = "Nissan";
  Print();
}
function Print() {
  console.log(name);
}
PrintName();`}
        </Code>
      </div>
    </Details>
  );
}
