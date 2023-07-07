//The problem with naive is that it keeps comparing even if the array is sorted as long as the end is not reached in the loop so we add a noSwaps variable after the i loop & set its value as true inside the j loop in if condition i.e., if the swap is made, set noSwaps as false and at the end of j loop if noSwaps is true, break.
//********************************************************************************


function optimizedSoln(arr){
  for(let i=arr.length; i>0; i--){
    let noSwaps =false;
    for(j=0; J<i-1; j++){
      if(a[j]>a[j+1]){
        let temp = a[j];
        a[j] = a[j+1];
        a[j+1] = temp;
        noSwaps = true;
      }
    }
    return arr;
  }
