"use client";
import { useEffect, useState } from "react";

type FetchState<T> =
  | {
      state: "loading";
    }
  | {
      state: "fulfilled";
      data: T;
    }
  | {
      state: "rejected";
      error: unknown;
    };

export default function Page() {
  const [fetchState, setFetchState] = useState<FetchState<number>>({
    state: "loading",
  });

  useEffect(() => {
    if (fetchState.state !== "loading") return;

    const controller = new AbortController();
    fetch("https://pokeapi.co/api/v2/pokemon?limit=20&offset=10", {
      signal: controller.signal,
      method: "GET",
    })
      .then((res) => {
        if (!res.ok) throw new Error("エラー（今回はエラー処理は適当）");
        return res.json();
      })
      .then((data) => {
        setFetchState({
          state: "fulfilled",
          data: data.number,
        });
      })
      .catch((error) => {
        setFetchState({
          state: "rejected",
          error,
        });
      });

    return () => {
      controller.abort();
    };
  }, [fetchState]);

  // ...

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <p className="text-4xl">{fetchState.state}</p>

      <footer>
        <p className="text-xl">Reference : https://qiita.com/uhyo/items/dec319ced85fc1b83f86</p>
      </footer>
    </div>
  );
}
