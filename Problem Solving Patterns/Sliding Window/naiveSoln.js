//Given n and sum are two variables given, find the sum of n consecutive numbers in an array

function maxSumArray(arr, n){
  if(num>arr.length) return null;
  
  var max =-infinity;
  
  for(let i=0; i<arr.length-num+1; i++){
    let temp =0;
    for(let j=0; j<num; j++){
      temp+= arr[i+j];
    }
    if(max<temp){
      max=temp;
    }
    console.log(temp, max):
  }
  return max;
}
