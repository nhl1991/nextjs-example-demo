"use client";

import { useState } from "react";

export default function Page() {
  const [arr, setArr] = useState(["A", "B", "C", "D"]);

  function Insert() {
    // B 바로 뒤에 X 삽입
    setArr((prev) => {
      const copy = [...prev];
      copy.splice(1, 0, "X");
      return copy;
    });
  }

  function Remove() {
    // 첫 번째 요소 삭제
    setArr((prev) => {
      const copy = [...prev];
      copy.splice(0, 1);
      return copy;
    });
  }

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center gap-4">
      <div className="flex gap-4">
        {arr.map((item, index) => (
          <div
            key={index} // 👈 index를 key로 사용 (문제 상황 유발)
            className="w-24 h-24 border-2 border-black rounded-2xl flex flex-col items-center justify-center"
          >
            <p>{index}</p>
            <input defaultValue={item} className="w-full text-center" />
          </div>
        ))}
      </div>
      <div className="flex gap-x-4 gap-y-2">
        <button className="button-hover" onClick={Insert}>Insert X</button>
        <button className="button-hover" onClick={Remove}>Remove First</button>
      </div>
      <Demo />
    </div>
  );
}

function Demo() {
  const [arr, setArr] = useState(["A", "B", "C", "D"]);

  return (
    <div>
      <button onClick={() => setArr(a => { const c=[...a]; c.splice(1,0,"X"); return c; })}>
        Insert X after B
      </button>
      <button onClick={() => setArr(a => { const c=[...a]; c.splice(0,1); return c; })}>
        Remove First
      </button>

      <div style={{ display: "flex", gap: 8 }}>
        {arr.map((item, index) => (
          <div key={index} style={{ border: "1px solid #000", padding: 8 }}>
            <input defaultValue={item} />
          </div>
        ))}
      </div>
    </div>
  );
}
