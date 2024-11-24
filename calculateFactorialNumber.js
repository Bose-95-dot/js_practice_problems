//Write a JavaScript program to calculate the factorial of a given number

//@method 1 (iterative)
//  function calculateFactorialNumber(number){
//     let factorial = 1;
//     for (let index = 0; index < number; index++) {
//         factorial = factorial * (number - index);

//     }
//     return factorial;
//  }
//  const result = calculateFactorialNumber(5)
//  console.log(result)

//@method 2 (recursive)
//   function calculateFactorialNumber(number){
//    if(number === 1){
//     return 1;
//    }else{

//     return number * calculateFactorialNumber(number - 1)
//    }
//  }
//  const result = calculateFactorialNumber(5)
//  console.log(result)