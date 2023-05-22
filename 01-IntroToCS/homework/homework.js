'use strict';

function BinarioADecimal(num) {
   let sum  = 0;
 num.reverse().map((element, index) => {
   sum += element * Math.pow(2, index);
});
   return sum.toString();
}
console.log(BinarioADecimal(101));

function DecimalABinario(num) {}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};

