//write a fn taking 2 arrays and return true if freq of every value is same and every value of 2nd array is square value of the 1st array

function freqCounterSame(arr1, arr2){
  if(arr1.length!==arr2.length) return false;
  
  let freqCounter1 = {};
  let freqCounter2 = {};
  //blank objects created as freq counters
  
  for(let val of arr1){
    freqCounter1[val] = (freqCounter1[val] || 0) + 1; 
    // val is a placeholder variable for value in the arr1. This either adds 1 to the existing count or initializes it with 1
  }
  for(let val of arr2){
    freqCounter2[val] = (ferqCounter2[val] || 0) + 1;
  }
  
  //two seperate loops are always better than a nested loop
  
  for(let key in freqCounter1){
    if(!(key**2 in freqCounter2)) return false;
    
    //here key is every value in object, so this checks if the value squared exists in the other object or not
    
    if(freqCounter2[key**2]!== freqCounter1[key]) return false;
    //this checks for the count of times the value exists in the other object
  }
  
