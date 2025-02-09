//what will be output of the below code?
//code
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1000);
  }

  //output will be 3 3 3
  //explanation: The setTimeout() function is called inside the loop, which means that the value of i will be 3 at the time of execution of the setTimeout() function.

  //fix: we can use let instead of var, that way let will create new block of scope for each iteration of the loop.another way is to use IIFE in  loop . Third way is to pass
  // the value of i to the setTimeout function as an argument

