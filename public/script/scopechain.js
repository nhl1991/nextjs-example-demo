

//  LexicalScopeは関数が宣言する時点の親SCOPEは何かのを決まります。
//　下の関数の中にいるPrint()の親 scopeはなんですか？
// 正解はPrintName()が親 scopeになります。
var name = "Toyota";

function PrintName() {
  var name = "Nissan";
  function Print() {
    // この時点でnameはどこで宣言された変数を意味するかのを探索することが「Scope Chain」です。
    console.log(name); 
    //　この関数の中にはnameという変数がないから外の関数の中で探索し決まります。
  }

  Print();
}
//　クロージャは「関数が自分が定義した親SCOPEを覚えてその変数を利用できることです。
PrintName();

//　上の例と同じ機能の関数ですが、この場合、Print()の中の変数nameは上位スコープ、つまり、グローバルスコープname（Toyota)を覚えています。
var name = "Toyota";

function PrintName() {
  var name = "Nissan";
  Print();
}

function Print() {
  console.log(name);
}

PrintName();

// こういう一連の仮定がLexicalScopeです。


//normally collected by GC
function A(){

}


//Closure
function B() {
  const name = 'text';
  function C() {
    console.log(name);
  }
  return C;   // 내부 함수를 반환
}

const fn = B();
fn(); // "text"