/**
 * Promise
 */

//JavaScriptは基本的に同期的に実行されますが、ブラウザAPIなどは非同期でPromiseを返します。

//fetchを通してあるデータを持ち込んだと仮定しよう。
// const data = fetch('api-url');

//Javacriptは動機的に作動するから「data」は値を持っていると期待できるが、結果は「undefined」になる。
// console.log('result : ', data);

//なぜ？　fetchはブラウザのAPIで、非同期処理としてPromiseを返します。
//JavaScriptの非同期処理の代表的な扱い方はコールバックとPromise（およびasync/await）です。

//まず、「コールバック」を調べてみましょう。
//ある関数に引数として渡され、後で呼び出される関数
function doStep1(init, callback) {
  const result = init + 1;
  callback(result);
}

function doStep2(init, callback) {
  const result = init + 2;
  callback(result);
}

function doStep3(init, callback) {
  const result = init + 3;
  callback(result);
}

function doOperation() {
  doStep1(0, (result1) => {
    doStep2(result1, (result2) => {
      doStep3(result2, (result3) => {
        console.log(`result: ${result3}`);
      });
    });
  });
}

doOperation();

// このようにコールバックを繰り返しながら呼び出すことを「コールバック地獄」と呼びます。
// この問題を解決するために「Promise」が導入されました。
// MDNでは「Promise」を次のように定義しています。
// 「Promiseは非同期処理の最終的な成功または失敗を表すオブジェクトです。」

//  Promiseは3つの状態を保持します。
//      fulfilled　処理が成功して完了したことを意味します。
//      pending 初期状態。　成功も失敗もしていません。
//      rejected　処理が失敗したことを意味します。

const myPromise = new Promise((resolve, reject)=>{
    // PromiseはJavaScriptによって生成されるオブジェクトであり、コンストラクタの引数として渡される関数（resolve と reject）を受け取ります。
    // 処理が成功した場合は resolve を、失敗した場合は reject を呼び出します。
    // その結果、Promiseの状態が pending から fulfilled または rejected に変化します。
    const isFailed = true;
    if(isFailed) reject('Error') //この場合、Promiseの状態は「rejected」
    else resolve('Promiseから出た値') // この場合、Promiseの状態は「Fullfilled」
})

//then()は

myPromise.then( data => console.log(data), err => console.log('Error : ',err)).catch( err => console.log(err));


