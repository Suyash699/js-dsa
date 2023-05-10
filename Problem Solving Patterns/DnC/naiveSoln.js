//In a sorted array, find the index of the given value

function findIndex(arr, n){
  for(let i = 0; i<arr.length; i++){
    if(arr[i] === n) return i;
  }
    return -1;
}
