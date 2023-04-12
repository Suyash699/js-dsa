//write a fn taking 2 arrays and return true if freq of every value is same and every value of 2nd array is square value of the 1st array

function same(arr1, arr2){
  if(arr1.length!==arr2.length) return false; //checks length and returns false if length of both are not the same
  
  for(let i=0; i<arr1.length; i++){
    let correctIndex = arr2.indexOf(arr[i]**2); //checks the index of every element of arr1 squared in the arr2
    
    if(correctIndex === -1) return false; //if it does not find the index, it returns -1
    
    arr2.splice(correctIndex,1) // edge case: you need to remove the value from the arr2 as the value can get repeated for another comparison
  }
  return true;
}
