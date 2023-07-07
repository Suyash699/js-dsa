function bubbleSort(arr){
  for(i=arr.length; i>0; i--){       //this is done so that the last elements are cemented in their place and are never compared with again.
    for(j=0; j<i-1; j++){
      if(a[j]>a[j+1]){
        let temp = a[j];
        a[j] = a[j+1];
        a[j+1] = temp;
      }
    }
    return arr;
  }
