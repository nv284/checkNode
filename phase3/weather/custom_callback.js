function process(message , callback){
    console.log("running function :"+ message);
    if(typeof callback !== "function")
    callback();
}
process("Hello Callback" , function callFun() {
    console.log("this is  callback function ")
});

/*
function myDisplayer(some) {
    document.getElementById("demo").innerHTML = some;
  }
  
  function myCalculator(num1, num2 , callback) {
    let sum = num1 + num2;
    callback(sum);
    //return sum;
   //myDisplayer(sum);
  }
  
  let result = myCalculator(5, 5);
myDisplayer(result);*/