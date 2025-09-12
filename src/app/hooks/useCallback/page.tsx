'use client'
import React, { useEffect } from "react";
import { useCallback, useState } from "react";


const Child = React.memo(ChildComponent);

export default function Page() {

    const [count, setCount] = useState(0);
    const [other, setOther] = useState(0);

    // 1. 그냥 함수 (렌더링마다 새로 만들어짐)
    const normalFn = () => console.log("normal function");

    // 2. useCallback (deps 안 바뀌면 같은 함수 유지됨)
    const memoFn = useCallback(() => console.log("memoized function"), []);
    console.log('After UseEffect', new Date(Date.now()).toISOString())
    useEffect(()=>{
        console.log('Parent Rendered.', new Date(Date.now()).toISOString());
    })

    return (
        <div className="p-4 space-y-4">
            <p>count: {count}</p>
            <button onClick={() => setCount((c) => c + 1)}>count +1</button>
            <button onClick={() => setOther((o) => o + 1)}>other +1</button>

            {/* 자식 컴포넌트 두 개 */}
            <Child onClick={normalFn} label="Normal Fn Child" />
            <Child onClick={memoFn} label="Memoized Fn Child" />
        </div>
    );
}

function ChildComponent({ onClick, label }: { onClick: () => void; label: string }) {
  console.log(`👶 Child rendered: ${label}`);
  return <button onClick={onClick}>{label}</button>;
}