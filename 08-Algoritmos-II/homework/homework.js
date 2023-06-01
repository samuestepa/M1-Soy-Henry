'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if(array.length <= 1) return array;
    let calcPivote = array[Math.floor(Math.random() * array.length)];
    let pivote = array[calcPivote];
    let right = [];
    let left = []; 
    let equal = [];
    
   for(let i = 0; i < array.length; i++){     
     if(array[i] !== pivote){
      if(pivote < array[i])left.push(array[i]); 
      if(pivote > array[i])right.push(array[i]);
     else equal.push(array[i]);
   }}
    return quickSort(left).concat(equal).concat(quickSort(right)); 
  }

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if(array.length < 2) return array;
  let mitad = Math.floor(array.length / 2);
  let right = array.slice(0, mitad); // slice() saca elementos desde donde hasta donde le declare los indices
  let left = array.slice(mitad); //si no le declaro el final solo le digo desde donde cortar 
  let ar = []; //reutilizando el espacio de memoria pisando el array ya usado

  left = mergeSort(left);
  right = mergeSort(right);
  while(left.length && right.length){
    if(left[0] < right[0]){
      ar.push(left.shift()); //shift( me da el valor que estoy eliminando)
    } else {
      ar.push(right.shift());
    }
  }
  array = ar.concat(left, right);
  return array;
}
// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
