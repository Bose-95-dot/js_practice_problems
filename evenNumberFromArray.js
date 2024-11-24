// Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers

function _evenNumberArray(arr){
let tempArr = arr.filter((data)=> {if (data%2 === 0){return data}})
return tempArr;
}
const x = _evenNumberArray([3,55,22,8,6,2]);
console.log(x)