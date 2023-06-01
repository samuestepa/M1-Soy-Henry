function quickSort(array){
    if(array.length <= 1) return array;
    let calcPivote = array[Math.floor(Math.random() * array.length)];
    let pivote = array[calcPivote];
    let right = [];
    let left = []; 
    let equal = []; 
    
    if(pivote < array){
        left.push(array); 
    } else {
        right.push(array);
    }
    
    left = quickSort(left);
    right = quickSort(right);
    
        array = left.concat(pivote, right);
        return array; 
}
let array = [5, 3, 6, 2, 8, 1, 3, 4];
console.log(quickSort(array));