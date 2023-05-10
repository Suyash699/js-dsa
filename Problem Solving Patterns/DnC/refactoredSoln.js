function findIndex(arr, n){
  min = 0;
  max = arr.length -1;
  while(min<max){
    middle=  Math.floor((min+max)/2);
    if(n<middle){
      max = middle-1;
    } else if(n>middle){
      min = middle+1;
    } else{
      return middle:
    }
  }
  return -1;
}

    
