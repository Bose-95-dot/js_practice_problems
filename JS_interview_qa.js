//Interview Questions for Beginner JavaScript Developers
//Q1. What will be the output of the below code:
const array = [10, 20, 30, 40];
const result = array.map((num) => num / 2).filter((num) => num >= 15);

// Ans: [15,20]
//explanatinon: 
//The map() method is used to create a new array by applying a function to each element of the original array.
//The filter() method is used to create a new array containing only the elements that pass a certain condition.
//In this case, the map() method is used to divide each element by 2, and the filter() method is used to keep only the elements that are greater than or equal to 15.

//Q2. What will be the output of the below code:
let counter = 0;
for (var i = 1; i <= 10; i++) {
  counter+= i;
}
// console.log(counter);
// console.log(i)
//formula:use this formula N*(N+1)/2

// Ans: 55, 11
//explanation:
//The for loop iterates from i=1 to i=10, adding each value of i to the counter variable. At the end of the loop, the counter variable contains the sum of all numbers from 1 to 10, which is 55.

//Q3. Analyze the below code. Do you see any issue? If yes, what is that issue?
const object1 = {
    a: 10,
    b: 20,
    c: function () {
      console.log(this.a + this.b);
    },
  };
  const func = object1.c;
  func.call(object1);

  //Ans: 30
  //explanation: 
  //The call() method is used to call a function with a specified this value and additional arguments.
//.call(object1) is a way to tell JavaScript, “When you run this function, use object1 as the context. This means, inside the function, when we say this.a or this.b, use object1’s a and b.”
  //The console.log() function is used to print the sum of a and b, which is 30.

  //Q4. Create a JavaScript function that calculates the tip for a given bill amount and tip percentage. Bill amount and tip percentage will be input parameters while output will be calculated tip value.

  function calculateTip(billAmount, tipPercentage) {
    const tip = (billAmount * tipPercentage) / 100;
    return tip;
  }
  const tip = calculateTip(4000, 2);
//   console.log(tip);
// Ans: 80

  //q5. What will output of the below code?
  function greetHello(name) {
    return `Hello, ${name}!`;
  }
//   console.log(greetHello("Brian"));

  // Ans: Hello, Brian!

  //q6. Will the below code return any error? If yes, identify the error.
  function fetchData(callback) {
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => callback(null, data))
      .catch(error => callback(error));
  }
     fetchData(function (error, data) {
    if (error) {
      console.log('Error:', error);
    } else {
      console.log('Data:', data);
    }
  });
  //Ans: url is not valid that's why it will show fetch failed


