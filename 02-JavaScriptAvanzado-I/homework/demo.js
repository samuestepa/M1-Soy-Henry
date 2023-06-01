x = 1; 
var a = 5; 
var b = 10;
var c = function (a, b, c) {
   var x = 10;
   console.log(x); // 10
   console.log(a);// 8
   var f = function (a, b, c) {
      b = a;
      console.log(b); //8
      b = c;
      var x = 5;
   };
   f(a, b, c);
   console.log(b); //10
};
c(8, 9, 10);
console.log(b);//10
console.log(x);//1
console.log(bar);//undefined
//console.log(baz);//undefined
foo();
function foo() {
   console.log('Hola!');//'Hola!'
}
var bar = 1;
baz = 2;
var instructor = 'Tony';
if (true) {
   var instructor = 'Franco';
}
console.log(instructor);//'Tony'
var instructor = 'Tony';
console.log(instructor);//'Tony'
(function () {
   if (true) {
      var instructor = 'Franco';
      console.log(instructor); //'Franco'
   }
})();
console.log(instructor);//'Tony'
var instructor = 'Tony';
let pm = 'Franco';
if (true) {
   var instructor = 'The Flash';
   let pm = 'Reverse Flash';
   console.log(instructor);//'The Flash'
   console.log(pm);//'Reverse Flash'
}
console.log(instructor);//'Tony'
console.log(pm);//'Franco'
//Coerción de Datos
//¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

console.log(6 / "3"); //2
console.log("2" * "3");//6
console.log(4 + 5 + "px");//9px
console.log("$" + 4 + 5);//$45
console.log("4" - 2);//2
console.log("4px" - 2);//false
console.log(7 / 0);//Nan
console.log({}[0])//true
console.log(parseInt("09"));//9
console.log(5 && 2);//2
console.log(2 && 5);//5
console.log(5 || 0);//5
console.log(0 || 5);//0
console.log([3]+[3]-[10]);//23
console.log(3>2>1);//0
console.log([] == ![]);//true
//Si te quedó alguna duda repasá con este artículo.

//Hoisting
//¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

function test() {
   console.log(a);//1
   console.log(foo());//2

   var a = 1;
   function foo() {
      return 2;
   }
}

test();
//Y el de este código? :

var snack = 'Meow Mix';

function getFood(food) {
   if (food) {
      var snack = 'Friskies';
      return snack;
   }
   return snack;
}

getFood(false);
//This
//¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function () {
         return this.fullname;
      },
   },
};

console.log(obj.prop.getFullname());//'Aurelio De Rosa'

var test = obj.prop.getFullname;

console.log(test());//'Aurelio De Rosa'
//Event loop
//Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

function printing() {
   console.log(1); //1
   setTimeout(function () {
      console.log(2);//2
   }, 1000);
   setTimeout(function () {
      console.log(3);//3
   }, 0);
   console.log(4);//4
}

printing();