function indexOf(arr, num){
  for (let i=0; i<arr.length; i++){      //loops through the entire array elements one by one
    if(arr[i]===num){
      return i;
    }
    return -1;
  }
}
