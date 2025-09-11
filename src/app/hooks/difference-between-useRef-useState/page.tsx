"use client";

import { useEffect, useRef, useState } from "react";

export default function Page() {
  const [count, setCount] = useState(0);
  const countRef = useRef<number>(0);

  useEffect(() => {
    console.log("Rendered.");
  });

  return (
    <div className="w-screen min-h-screen flex flex-col items-center gap-4">
      <div className="flex flex-col items-center justify-center">
        <p>count : {count}</p>
        <button
          className="px-3 py-1 bg-blue-500 text-white rounded"
          onClick={() => setCount((prev) => prev + 1)}
        >
          ADD
        </button>
      </div>
      <div className="flex flex-col items-center justify-center">
        <p>countRef : {countRef.current}</p>
        <button
          className="px-3 py-1 bg-green-500 text-white rounded"
          onClick={() => {
            countRef.current += 1;
            console.log("countRef:", countRef.current);
          }}
        >
          ADD
        </button>
      </div>
      <div>
        <h1>DevTools </h1>
        <p>Window: Ctrl + Shift + I</p>
        <p>Mac: ⌘ + Option + I</p>
      </div>
      <div className="flex flex-col items-center w-full justify-evenly">
        <div>
          <h1 className="font-bold text-3xl">useRef</h1>
          <ul className="w-[32rem]">
            <li>
              <details className=" group p-2">
                <summary className="font-bold text-xl flex ">
                  <h2>매개변수</h2>
                  <span className="transition-transform group-open:rotate-180">
                    <ChevronDown />
                  </span>
                </summary>
                <p>
                  initialValue: ref 객체의 current프로퍼티 초기 설정값입니다.
                  여기에는 어떤 유형의 값이든 지정할 수 있습니다. 이 인자는 초기
                  렌더링 이후부터는 무시됩니다.
                </p>
              </details>
            </li>
            <li>
              <details className="group rounded-lg p-2">
                <summary className="font-bold text-xl flex ">
                  <h2>반환값</h2>
                  <span className="transition-transform group-open:rotate-180">
                    <ChevronDown />
                  </span>
                </summary>
                <p>
                  useRef는 단일 프로퍼티를 가진 객체를 반환합니다: current:
                  처음에는 전달한 initialValue로 설정됩니다. 나중에 다른 값으로
                  바꿀 수 있습니다. ref 객체를 JSX 노드의 ref어트리뷰트로
                  React에 전달하면 React는 current프로퍼티를 설정합니다. 다음
                  렌더링에서 useRef는 동일한 객체를 반환합니다.
                </p>
              </details>
            </li>
            <li>
              <details className="group rounded-lg p-2">
                <summary className="font-bold text-xl flex ">
                  <h2 className="font-bold text-xl">주의 사항</h2>
                  <span className="transition-transform group-open:rotate-90">
                    <ChevronDown />
                  </span>
                </summary>
                <ul className="px-2 list-disc">
                  <li>
                    <p>
                      ref.current 프로퍼티는 state와 달리 변이할 수 있습니다.
                      그러나 렌더링에 사용되는 객체(예: state의 일부)를 포함하는
                      경우 해당 객체를 변이해서는 안 됩니다.
                    </p>
                  </li>
                  <li>
                    <p>
                      ref.current 프로퍼티를 변경해도 React는 컴포넌트를 다시
                      렌더링하지 않습니다. ref는 일반 JavaScript 객체이기 때문에
                      React는 사용자가 언제 변경했는지 알지 못합니다.
                    </p>
                  </li>
                  <li>
                    <p>
                      초기화를 제외하고는 렌더링 중에 ref.current를 쓰거나 읽지
                      마세요. 이렇게 하면 컴포넌트의 동작을 예측할 수 없게
                      됩니다.
                    </p>
                  </li>
                  <li>
                    <p>
                      Strict Mode에서 React는 컴포넌트 함수를 두 번 호출하여
                      의도하지 않은 변경을 찾을 수 있도록 돕습니다. 이는 개발
                      환경 전용 동작이며 Production 환경에는 영향을 미치지
                      않습니다. 각 ref 객체는 두 번 생성되고 그중 하나는
                      버려집니다. 컴포넌트 함수가 순수하다면(그래야만 합니다),
                      컴포넌트의 로직에 영향을 미치지 않습니다.
                    </p>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
        <div>
          <h1 className="font-bold text-3xl">useState</h1>
          <ul className="w-[32rem]">
            <li>
              <details className="group rounded-lg p-2">
                <summary className="font-bold text-xl flex ">
                  <h2>매개변수</h2>
                  <span className="transition-transform group-open:rotate-180">
                    <ChevronDown />
                  </span>
                </summary>
                <p>
                  initialState: state의 초기 설정값입니다. 어떤 유형의 값이든
                  지정할 수 있지만 함수에 대해서는 특별한 동작이 있습니다. 이
                  인수는 초기 렌더링 이후에는 무시됩니다. 함수를 initialState로
                  전달하면 이를 초기화 함수로 취급합니다. 이 함수는 순수해야
                  하고 인수를 받지 않아야 하며 반드시 어떤 값을 반환해야 합니다.
                  React는 컴포넌트를 초기화할 때 초기화 함수를 호출하고, 그
                  반환값을 초기 state로 저장합니다. 아래 예시를 참고하세요.
                </p>
              </details>
            </li>
            <li>
              <details className="group rounded-lg p-2">
                <summary className="font-bold text-xl flex ">
                  <h2>반환값</h2>
                  <span className="transition-transform group-open:rotate-180">
                    <ChevronDown />
                  </span>
                </summary>
                <p>
                  useState는 정확히 두 개의 값을 가진 배열을 반환합니다. 현재
                  state입니다.
                </p>
                <p>첫 번째 렌더링 중에는 전달한 initialState와 일치합니다.</p>
                <p>
                  state를 다른 값으로 업데이트하고 리렌더링을 촉발할 수 있는 set
                  함수입니다.
                </p>
              </details>
            </li>
            <li>
              <details className="group rounded-lg p-2">
                <summary className="font-bold text-xl flex ">
                  <h2 className="font-bold text-xl">주의 사항</h2>
                  <span className="transition-transform group-open:rotate-90">
                    <ChevronDown />
                  </span>
                </summary>
                <ul className="px-2 list-disc">
                  <li>
                    <p>
                      useState는 Hook이므로 컴포넌트의 최상위 레벨이나 직접 만든
                      Hook에서만 호출할 수 있습니다. 반복문이나 조건문 안에서는
                      호출할 수 없습니다. 필요한 경우 새 컴포넌트를 추출하고
                      state를 그 안으로 옮기세요.
                    </p>
                  </li>
                  <li>
                    <p>
                      Strict Mode에서 React는 의도치 않은 불순물을 찾기 위해
                      초기화 함수를 두 번 호출합니다. 이는 개발 환경 전용
                      동작이며 프로덕션 환경에는 영향을 미치지 않습니다. 초기화
                      함수가 순수하다면(그래야 합니다) 동작에 영향을 미치지
                      않습니다. 호출 중 하나의 결과는 무시됩니다.
                    </p>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
      <div></div>
    </div>
  );
}

function ChevronDown() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="currentColor"
      className="w-6"
    >
      <path
        fillRule="evenodd"
        d="M7.47 12.78a.75.75 0 0 0 1.06 0l3.25-3.25a.75.75 0 0 0-1.06-1.06L8 11.19 5.28 8.47a.75.75 0 0 0-1.06 1.06l3.25 3.25ZM4.22 4.53l3.25 3.25a.75.75 0 0 0 1.06 0l3.25-3.25a.75.75 0 0 0-1.06-1.06L8 6.19 5.28 3.47a.75.75 0 0 0-1.06 1.06Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
