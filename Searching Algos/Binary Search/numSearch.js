function numSearch(arr, e){
  let start=0;
  let end = arr.length -1;
  let middle = Math.floor((start+end)/2);
  while(arr[middle] !== e && start<=end){
    if(e<arr[middle]) end = middle-1;
    else start= middle+1;
    middle=Math.floor((start+end)/2);
  }
  return arr[middle] === e? middle: 1;
