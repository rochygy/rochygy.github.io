/*
let varOne=10, varTwo=20; // definiálom a két változót

function changeValues(one, two) {  // létrehozok egy függvényt, ami megváltoztatja két paraméter értékét
  one=100;
  two=200;
  console.log("From function: " ,one, two); // kiíratom a két függvénnyel módosított paraméter értékékét
}
changeValues(varOne, varTwo); // lefuttatom a függvényt, ekkor hajtja végre a módosításokat és a kiírást
console.log(varOne, varTwo); // kiíratom az eredeti paramétereket, amik nem változtak
*/

function callByRef(arr) {
  arr[1]=200;
  console.log("From function: " ,arr);
}
let fruits = ["Pear", "Avocado", "Apple"];
callByRef(fruits);
console.log(fruits);

for (let i = 0; i < fruits.length; i++) {
  console.log( fruits[i] );
}