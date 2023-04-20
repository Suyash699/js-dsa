//new file
//Wtite a function called sumZero which accepts a sorted array of integers.
//The function should find the first pair where sum is zero. Return the array that includes both values that sum to zero or undefined if pair does not exist

function sumZero(){
  for(let i=0; i<arr.length; i++){
    for(let j=i+1; j<arr.length; j++){
      if(arr[i] + arr[j] === 0){
        return [arr[i], arr[j]];
      }
    }
  }
}

sumZero([-4, -3, -2, -1, 0, 1, 2, 5])
