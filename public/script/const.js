/**
 * [const]と[不変性]の違い
 *
 * - JavaScriptには「プリミティブ型」と「参照型」がある。
 * - プリミティブ型は値そのものをコピーするため不変（immutable）。
 * - 参照型はアドレスを共有するため可変（mutable）。
 *
 * → const は「再代入できない」を意味し、不変性そのものを保証しない。
 * → 配列やオブジェクトを不変にしたい場合は Object.freeze() を利用。
 *    ただし freeze はシャロー（浅い）なので、ネストには deepFreeze が必要。
 */

// const は宣言時に必ず値を代入する必要がある
// const a; // SyntaxError: Missing initializer in const declaration
const b = 0;

// 基本的には const で宣言した変数は再代入できない（プリミティブは不変）
const c_string = 'string';
const c_int = 0;
const c_bool = false;

// c_string = 'Where is char?'; // TypeError
// c_int = 20;                   // X
// c_bool = true;                // X

// オブジェクトや配列は「参照」は固定だが、中身（プロパティ/要素）は変更できる
const c_arr = [1, 2, 3, 4, 5];
c_arr.push(10);
c_arr.pop();
console.log(c_arr); // [1, 2, 3, 4, 5]

const c_obj = { name: 'Nissan GT-R', status: 'In production' };
c_obj.status = 'Discontinued';
console.log(c_obj); // { name: 'Nissan GT-R', status: 'Discontinued' }

// freeze は浅い（shallow）
// ネストしたオブジェクトの中身はそのままだと変更できてしまう
const frozen = Object.freeze([{ x: 1 }, { y: 2 }]);
frozen[0].x = 99; // ✅ ここは変更されてしまう（浅い凍結のため）
console.log(frozen[0].x); // 99

// 簡易 deepFreeze（学習用）
function deepFreeze(obj) {
  if (obj && typeof obj === 'object') {
    Object.freeze(obj);
    Object.getOwnPropertyNames(obj).forEach((k) => deepFreeze(obj[k]));
  }
  return obj;
}
const deeplyFrozen = deepFreeze([{ x: 1 }, { y: { z: 2 } }]);
deeplyFrozen[1].y.z = 999; // 無効
console.log(deeplyFrozen[1].y.z); // 2
