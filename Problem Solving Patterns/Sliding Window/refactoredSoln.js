//Sliding window creates a loop to caculate the sum of first n integers.
// then creates another loop to subtract the first element from that sum and add the next element of the array to the sum
//this keeps the window sliding

//find the maximum sum of n consecutive numbers
function maxSubArray(arr, n){
  let maxSum = 0;
  let tempSum = 0;
  if(arr.length<num) return null;
  for(let i=0; i<num; i++){
    maxSum+= arr[i];
  }
  tempSum = maxSum;
  for(let i = num; i<arr.length; i++){
    tempSum = tempSum - arr[i-num] + arr[i]; //subtracts the first element and adds the next element of the array
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}
