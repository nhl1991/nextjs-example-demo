


/**
 * BLOCK SCOPE
 * JavaScriptには3種類の変数宣言「var・let・const」がある。
 *
 * - var  : 関数スコープ (function scope)
 * - let・const : ブロックスコープ (block scope)
 *
 * 「SCOPE」とは「範囲」という意味。
 * → BLOCK SCOPE = {} 内が変数の有効範囲
 * → FUNCTION SCOPE = function 内が変数の有効範囲
 *
 * ポイント：
 * - ブロック内で宣言した変数は外から参照できない。
 * - 逆にブロック外で宣言した変数は中でも使える。
 *
 * Global Scope
 * │
 * ├─ Function Scope
 * │   ├─ Block Scope (if, for, while, try...catch, { } など)
 * │   └─ Nested Function Scope
 * │
 * └─ Block Scope (Global直下の { } )
 */

var out_VAR = 0;
let out_LET = 1;
const out_CONST = 2;

if (true) {
  console.log(out_VAR, out_LET, out_CONST); //可能。
  var block_VAR = 9;
  let block_LET = 0;
  const block_CONST = 1;
}


console.log(block_VAR); //「var」は関数スコープに従うため、ブロックの外からでも参照可能である。
console.log(block_LET, block_CONST); //ReferenceError



function VariableExample() {
  var func_VAR = 0;
  let func_LET = 1;
  const func_CONST = 2;
}

console.log(func_VAR, func_LET, func_CONST); //ReferenceError


