function factorial(num){
  if(num<1){
    console.log("done");
    return;
  }
  return num*factorial(num-1);
}
