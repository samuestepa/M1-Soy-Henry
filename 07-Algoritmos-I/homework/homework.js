'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:

}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  for(let i = 0; i < array.length; i++){
    //let bandera = true;
    //while(bandera){ 
      //bandera = false;
      for(let j = 0; j < array.length - i; j++){ 
         if(array[j] > array[j + 1]){ 
          let aux = array[j]; 
          array[j] = array[j + 1];
          array[j + 1] = aux;
      //    bandera = true;
         }
       }
      }
      return array;
}


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for(let i = 1; i < array.length; i++){
    let j = i - 1;
    let aux = array[i];
    while(j >= 0 && aux < array[j]){
      let aux = array[j+1];
      array[j + 1] = array[j];
      array[j] = aux;
      j--
    }
 }
return array
}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for(let i = 0; i < array.length; i++){
    let minimo = i; //posicion 2
      for(let j = i + 1; j < array.length; j++){
        if(array[j] < array[minimo]){
          minimo = j;
        }
      }
      if(i !== minimo){
      let aux = array[i]; //8
      array[i] = array[minimo]; //3
        array[minimo] = aux;  
      }
    }
    return array;
 } 
//         j
//1, 5, 3, 8, 7
//         m
//      i


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
