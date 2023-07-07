//Create a js function to count the sum of a range of numbers recursively

function sumRange(num){
  if(num===1) return 1;
  return num + sumRange(num-1);        //reduces the num by 1 and keeps adding them by the previous num value by calling the sumrange function within the same function
}
