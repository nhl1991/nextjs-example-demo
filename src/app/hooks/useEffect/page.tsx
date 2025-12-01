"use client";
import LinkContainer from "@/src/components/ui/LinkContainer";
import {
  Dispatch,
  SetStateAction,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";

export default function Page() {
  const [text, setText] = useState("");
  const [hasCounter, setHasCounter] = useState(true);
  //   useLayoutEffect(() => {
  //     window.alert("👈 useLayoutEffect 실행");
  //     console.log("Component Mounted but browser does not painted it.");
  //   }, []);
  useEffect(() => {
    console.log("Page Rendered.");
  }, []);

  return (
    <section className="w-screen h-screen flex flex-col items-center justify-center">
      {hasCounter ? <Counter setText={setText} /> : null}
      <p>{text}</p>

      <button
        className="rounded-xl px-4 py-2 bg-sky-500 hover:bg-sky-700"
        onClick={() => setHasCounter(!hasCounter)}
      >
        COUNTER {hasCounter ? "OFF" : "ON"}
      </button>


      <nav>
        <ul className="flex gap-4 p-2">
          <li>
            <LinkContainer link="/example-fetch" />
          </li>

          <li>
            <LinkContainer link="/fetch-with-useEffect-best-practice" />
          </li>
        </ul>
      </nav>
    </section>
  );
}

function Counter({ setText }: { setText: Dispatch<SetStateAction<string>> }) {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    window.alert(
      "Counter componet effect is executed before Browser paint the component on Browser"
    );
    setText("Rendered from Counter");

    return () => setText("Clean up from Counter");
  }, []);

  return (
    <div className="flex items-center justify-center p-2">
      
      <div className="flex gap-2">
        <p>{counter}</p>
        <button onClick={() => setCounter((prev) => prev + 1)}>ADD</button>
        <button onClick={() => setCounter((prev) => prev - 1)}>SUBTRACT</button>
      </div>
    </div>
  );
}
