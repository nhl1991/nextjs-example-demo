import Code from "../Code";
import Details from "../ui/Details";
import Summary from "../ui/Summary";
import P from "../ui/Text";

export default function AsyncAwait() {
  return (
    <Details>
      <Summary>Async / Await</Summary>
      <P>
        JavaScriptのfunction宣言で作った関数は、Functionクラスのインスタンスです。
      </P>
      <P>
        {"async function(){}"}
        」で作った関数は、AsyncFunctionクラスのインスタンスです。
      </P>
        <Code>{`
        function foo (){
            return 42;
        }
        console.log(Object.getPrototypeOf(foo).constructor.name)`}</Code>

      <Code>
        {`async function foo() {
        return 42;
            }
        console.log('foo :' ,Object.getPrototypeOf(foo).constructor.name)
        const bar = async () => 42;
        console.log('bar :', Object.getPrototypeOf(bar).constructor.name)`}
      </Code>
    </Details>
  );
}
