function count(num){
  if(n<=0) return null;
  console.log(num);
  num--;
  count(num)   // calls itself again till num reaches the condition
}
