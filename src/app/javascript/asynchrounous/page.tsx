"use client";

export default function Page() {
  return (
    <section className="w-screen min-h-screen flex flex-col gap-4 items-center ">
      <article>
        <h1>Javascriptの非同期処理</h1>
        <p>
          {`JavaScriptは基本的に同期的に実行されますが、ブラウザAPIなどは非同期でPromiseを返します。
            fetchを通してあるデータを持ち込んだと仮定しよう。
            const data = fetch('api-url');

            Javacriptは動機的に作動するから「data」は値を持っていると期待できるが、結果は「undefined」になる。
             console.log('result : ', data);

            なぜ？　fetchはブラウザのAPIで、非同期処理としてPromiseを返します。
            JavaScriptの非同期処理の代表的な扱い方はコールバックとPromise（およびasync/await）です。`}
        </p>
      </article>
    </section>
  );
}
