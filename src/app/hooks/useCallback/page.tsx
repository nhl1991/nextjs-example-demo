"use client";

import { useCallback, useEffect, useState } from "react";

export default function Page() {
  const [mode, setMode] = useState(false);
  const [count, setCount] = useState(0);

  const handleOnClick = useCallback(() => {

    console.log({mode});
    if (mode) {
      setCount((prev) => prev + 1);
    } else {
      setCount((prev) => prev - 1);
    }
  },[mode]); // この依存性配列の中を空けましょう
  //의존성 배열에 mode를 추가하지 않으면, mode를 바꿔 더하기 모드로 바꿔도 제대로 작동하지않음 => 이를 통해 캐시하는 걸 확인
  // 의존성 배열에 mode를 추가 하면 mode가 바뀔 때마다 useCallback이 함수를 다시 캐시해서 반환함.
        
        
  useEffect(()=>{
    console.log('Rerendered.')
  })

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
        <div><button onClick={()=>setMode(!mode)}>{mode ? 'Change to subtract' : 'Change to Add'}</button></div>
      <div>
        <p>{count}</p>
        <button onClick={handleOnClick}>Button</button>
      </div>
    </div>
  );
}

// 'use client'
// import React, { useEffect } from "react";
// import { useCallback, useState } from "react";

// const Child = React.memo(ChildComponent);

// export default function Page() {

//     const [count, setCount] = useState(0);
//     const [other, setOther] = useState(0);

//     // 1. 그냥 함수 (렌더링마다 새로 만들어짐)
//     const normalFn = () => console.log("normal function");

//     // 2. useCallback (deps 안 바뀌면 같은 함수 유지됨)
//     const memoFn = useCallback(() => console.log("memoized function"), []);

//     return (
//         <div className="p-4 space-y-4">
//             <p>count: {count}</p>
//             <button onClick={() => setCount((c) => c + 1)}>count +1</button>
//             <button onClick={() => setOther((o) => o + 1)}>other +1</button>

//             {/* 자식 컴포넌트 두 개 */}
//             <Child onClick={normalFn} label="Normal Fn Child" />
//             <Child onClick={memoFn} label="Memoized Fn Child" />
//         </div>
//     );
// }

// function ChildComponent({ onClick, label }: { onClick: () => void; label: string }) {
//   console.log(`👶 Child rendered: ${label}`);
//   return <button onClick={onClick}>{label}</button>;
// }
