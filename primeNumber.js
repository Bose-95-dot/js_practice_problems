//Write a JavaScript function to check if a given number is prime.

//@method 1 (iterative approch)
//  function findPrimeNumber(num){
//     let isPrimeNumber = true
//     if(num === 1 || num === 0){
//         isPrimeNumber = false;
//     }else{
//         for (let index = 2; index < num; index++) {
//             if(num % index === 0){
//                 isPrimeNumber = false;
//                 break;
//             }

//         }
//     }

//     isPrimeNumber?console.log(num + " is Prime Number"):console.log(num + " is Not Prime Number")
//  }
//  findPrimeNumber(6)

//method 2 (efficient way)
// function findPrimeNumber(num){

//     if(num <= 1){return false};
//     if(num === 2){return true};
//     for(let i = 2;i<=Math.sqrt(num);i++){
//         if(num % i === 0){
//             return false;
//         }
//     }
//     return true;
// }
// let x = findPrimeNumber(6);
// if(x === true){
//     console.log("Prime NUmber")
// }else{
//     console.log("Not Prime NUmber")

// }