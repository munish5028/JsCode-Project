// add two numbers
function sum(a, b) {
    return a + b
  }
  
  // multiply two numbers
  function mul(a, b) {
    return a * b
  }
  
  //operate with a higher-order function
  function calculate(operation, numsArray) {
    if (numsArray.length <= 2) {
      let a = numsArray[0]
      let b = numsArray[1]
  
    
      return operation(a, b)
    }
  }
  

//   console.log(calculate(sum, [5, 6]))

//   console.log(calculate(mul, [10, 3])) 

  document.getElementById("demo").innerHTML = (calculate(sum, [5, 6]));
  document.getElementById("demo1").innerHTML = (calculate(mul, [10, 3]));