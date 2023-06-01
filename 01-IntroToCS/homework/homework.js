"use strict";

function BinarioADecimal(num) {
  let array = num.split("").reverse();
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i] * Math.pow(2, i);
  }
  return sum;
}
console.log(BinarioADecimal("1010"));

function DecimalABinario(num) {
   let binario = [];
   while(num > 0){
      binario.unshift(num % 2);
      num = Math.floor(num / 2);
    }
   return binario.join("").toString();
}
console.log(DecimalABinario("10"));

module.exports = {
  BinarioADecimal,
  DecimalABinario,
};
