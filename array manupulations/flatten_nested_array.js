
// flatten nested array
const nested = [1, [2, [3, [],[[4]]]]];
console.log(nested.flat(Infinity)); // [1, 2, 3, 4]

//explation:
//The flat() method is a new array method that returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
//In this example, we have a nested array [1, [2, [3, [4]]]] and we want to flatten it to [1, 2, 3, 4].