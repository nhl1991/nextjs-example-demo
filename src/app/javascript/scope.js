
/** Hoisting
 * Hoistingとは、変数宣言が関数スコープの先頭に引き上げられる仕組みを指す。
 * そのため、宣言より前にアクセスできるように見える。
 *
 * ただし、「var」「let」「const」すべてHoistingされるが、
 * 「let」「const」はTDZ(Temporal Dead Zone)の間は参照できない。
 */

console.log(hoisting_var);
var hoisting_var = 0;

console.log(hoisting_let);
let hoisting_let = 'This will return Reference Error'; //ReferenceError: Cannot access 'hoisting_let' before initialization

console.log(hoisting_const);
const hoisting_const = 'This will return Reference Error'; //ReferenceError: Cannot access 'hoisting_const' before initialization