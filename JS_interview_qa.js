//Interview Questions for Beginner JavaScript Developers
//Q1. What will be the output of the below code:
//code
const array = [10, 20, 30, 40];
const result = array.map((num) => num / 2).filter((num) => num >= 15);

// Ans: [15,20]
//explanatinon: 
//The map() method is used to create a new array by applying a function to each element of the original array.
//The filter() method is used to create a new array containing only the elements that pass a certain condition.
//In this case, the map() method is used to divide each element by 2, and the filter() method is used to keep only the elements that are greater than or equal to 15.

//Q2. What will be the output of the below code:
//code
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
  //code
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

//q7. What is the issue in the below code:

const obj = {
  name: "Conner",
  age: 27,
  greet: () => {
	console.log(`Hey, my name is ${this.name}`);
  },
};
obj.greet();

//Ans: 
//method 1
// in console it will show undefined cause arrow function inherits this from surounding context which will be global.
// To solve this we can use regular function instead of arrow.

//method 2
// we can use bind method to bind this to obj object
// obj.greet.bind(obj)();


//q8. What will be the output of the below code?
//code
const object8 = {
    prop1: "value1",
    prop2: {
      prop3: "value3",
    },
  };
   const newObj = { ...object8 };
  newObj.prop2.prop3 = "newValue3";
//   console.log(object8.prop2.prop3);
  //ans: newValue3
  //because of shallow coping of object  newObj and object8 will have same reference, that's why it will show newValue3.solution of this problem
  // will be deep copy using this code const newObj = JSON.parse(JSON.stringify(object8))

  //q9. Will the below code return any error? If yes, what will be the error?

  //code
  class Bird {
    constructor(name) {
      this.name = name;
    }
    speak() {
      console.log(`${this.name} makes a noise.`);
    }
  }
   class Crow extends Bird{
    speak() {
      super.speak();
      console.log(`${this.name} sings.`);
    }
  }
   const crow = new Crow("Tim");
  crow.speak();

  //Ans:
  // it will show "Time makes a noise". and next line it will show  "Time sings".
  //super.speak() correctly calls the speak method from the parent class Bird because Crow inherits from Bird.
  // then Crow's own speak() method is called, which logs "Time sings."

  //q10. Develop a function that throttles another function, allowing it to be called at most once every specified interval (e.g., 300ms). 
  //The throttling function will have two input parameters. One will be the function to be throttled and the second will be the interval in milliseconds. 
  //The throttled function should be called with the same arguments as the original function.



  //q11. What is wrong with the below code?

  //code
  const arr = [1, 2, 3, 4, 5];
const sum = arr.reduce((total, num) => total + num);
console.log(sum / arr.length);

//ans: 3
//it will show 3 because reduce method will return the sum of all elements in the array and then divide by the length of the array.
  