// 1 Write a JavaScript program to find the maximum number in an array.

// function findMaxNumber(arr){
//     return Math.max(...arr)
// }
// let data = findMaxNumber([2,3,4,5,223,5345,3])
// console.log(data)

// 2 Write a JavaScript function to check if a given string is a palindrome

//@method 1
// const str ="MAgafaAM"
// const length = str.length;
// const loopCount = length/2;
// let isPalindrom = false;
// for (let index = 0; index <= loopCount; index++) {
//     if(str.charAt(index) === str.charAt(length -(index+1))){
//         isPalindrom = true
//     }else{
//         isPalindrom = false;
//         break;
//     }
// }

// isPalindrom? console.log("Palindrom"):console.log("non palindrom")

//@method 2
// function palindromStringFinder(str){
//     const isPalindrom = str === str.split("").reverse().join("");
//     isPalindrom? console.log("Palindrom"):console.log("non palindrom")

// }
// palindromStringFinder("MadAm");


// 3. Write a JavaScript program to reverse a given string.

// function reverseString(str){
//     const reversed_string = str.split("").reverse().join("");
//     console.log(reversed_string)
// }
// reverseString("RTFTTT")

//4. Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers.
//@method 1
// const arr = [2,5,64,2,6,7,3];

// let newArr = [];
// arr.forEach(element => {
//     if(element%2 == 0){
//         newArr.push(element)
//     }
// });
// console.log(newArr)

//@method 2
// function filterEvenNumber(arr){
//     let filteredEvenArr =  arr.filter(num=> num%2 === 0);
//     return filteredEvenArr;
// }
// const x = filterEvenNumber([2,5,64,2,6,7,3]);
// console.log(x,"x")

// 5. Write a JavaScript program to calculate the factorial of a given number.
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

//6. Write a JavaScript function to check if a given number is prime.
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

//7. Write a JavaScript program to find the largest element in a nested array.
  // const x = [2,4,[6,8,[3,6,33,[76,6,65],6]],10,11,[0,8]]

//@method 1(short cut ... I love it)
//  let res= x.join()
//  let newArray =  res.split(',').map(Number).sort((a,b)=>b-a)[0]
//  console.log(newArray)

//@method 2
//  function _sortNumber(arr,length){

//     if(length === 1){
//         return arr[0];
//     }

//     return Math.min(arr[length - 1],
//             _sortNumber(arr,length -1))

//  }
//  function findLargestNumber(arr){
//      let res= x.join()
//     const newArr = res.split(',').map(Number)
//     let length = arr.length;
//     console_sortNumber(newArr,length);
//     console.log(result)
//  }
//  findLargestNumber(x)

//8. How could you find all prime factors of a number?
// function PrimeFactor(num){
//     let factors = [];
//     let divisor =2;
//     while (num>2) {
//         if(num % divisor == 0){
//             factors.push(divisor);
//             divisor = num/divisor;
//             if(factors.includes(divisor)){
//                 return factors;
//             }
//         }else{
//             divisor++;
//         }

//     }
//     return factors;

// }
// let x = PrimeFactor(24)
// consoletle.log(x,"x")

// 9. You are given an integer ‘N’, your task is to find and return the N’th Fibonacci number.
// function fibonacci(n){
// //base cases
// if(n === 0){return 0}
// if(n === 1){ return 1}

// let prev1 = 0 //F(0);
// let prev2 = 1 //F(1);
// let current;
// for(let i =2;i<=10;i++){
//   current = prev1 + prev2; //F(n) = F(n-1)+F(n-2);
//   prev1 = prev2;
//   prev2 = current;
// }
// return current
// }
// const N = 10;
// const x = fibonacci(N)
// console.log(x)



//10.remove duplicate char(insensitive)

// function _removeDuplicateChar(tempString){
//     for (let index = 0; index < tempString.length; index++) {
//             for (let j = 1; j < tempString.length; j++) {
//                 if((tempString[j].toLowerCase()=== tempString[index])||(tempString[j].toUpperCase()=== tempString[index])){
//                     let str1 = tempString[index].toLowerCase();
//                     let str2 = tempString[index].toUpperCase();
//                     tempString = tempString.replaceAll(new RegExp(`${str1}`,"gi"),"")
//                     tempString = tempString.replaceAll(new RegExp(`${str2}`,"gi"),"")
//                 }
//             }
//     }
//     return tempString;

// }
// function _removeDuplicateChar(str){
//     return str.split('')
//               .filter((char, index, arr) => 
//             arr.filter(c => c.toLowerCase() === char.toLowerCase()).length === 1)
//               .join('');
//     // console.log(str.split(''))
// }

// const x = _removeDuplicateChar("Practice Javascript more");
// console.log(x)
//11.remove duplicate char(sensitive)

// function _removeDuplicateChar(str){
//     return str.split('')
//               .filter((char, index, arr) => 
//                 char !== undefined && char.trim() !== '' && arr.filter(c => c === char).length !== 1 )
//               .join('')

// }

// const x = _removeDuplicateChar("Learn more javascript dude");
// console.log(x)

//12. check palindrome

// function _checkPalindrome(str) {
//     let arr = str.split('')
//     let isPalindrome = false;
//     const length = arr.length / 2;
//     for (let index = 0; index < length; index++) {
//         if (arr[index] !== arr[arr.length - (index + 1)]) {
//             isPalindrome = false;
//             break;
//         } else {
//             isPalindrome = true;
//         }

//     }
//     if(isPalindrome){
//         return true;
//     }else{
//         return false
//     }
// }

// const x = _checkPalindrome("toyota")
// if (x === false) {
//     console.log("Not pallindome")
// }
// else {
//     console.log(" pallindome")

// }

// function checkPalindrom(str) {
//     return str == str.split('').reverse().join('');
// }
// const x = checkPalindrom("madam")
// console.log(x)

// 13. reverse in word;

// function _reverseWord(str){
//     return str.split(' ').reverse().join(' ').split('').reverse('').join('')
// }
// const x = _reverseWord("I am  a good boy")
// console.log(x)

//14. swap number without temp

//15. How would you find the greatest common divisor of two numbers?
//16. If you have a function that generate random number between 1 to 5 how could u generate random number 1 to 7 by using that function?
//17. from a unsorted array of numbers 1 to 100 excluding one number, how will you find that number.
//18.From a unsorted array, check whether there are any two numbers that will sum up to a given number?
//19.How would you find the largest sum of any two elements?
//20.  Count Total number of zeros from 1 upto n?
//21.How can you match substring of a string?
//22. Find a square of a number. but you can only use addition or subtraction but no multiplication or division.
//23. Write a function that reverses the order of words in a sentence without using the built-in reverse() method.
//24.How would you find the greatest common divisor of two numbers?
// function _gcd(...numbers){
//  if(numbers.length !== 0){
//   return;
//  }
//  for (let index = 0; index <= numbers.length; index++) {
//   let a = numbers[index];
//   let b = numbers[index +1]
  
//  }


// }
// const x = _gcd(24,32)
// console.log(x)

