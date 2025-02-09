//Reverse the word;
//@method1 (shortcut)
// function _reverseWord(str){
//     return str.split("").reverse().join("");
// }

// const x = _reverseWord("Hello World")
// console.log(x)


//@method 2


// function _reverseWord(str) {
//     // Step 1: Find the length of the string manually
//     let length = 0;
//     while (str[length] !== undefined) {
//         length++;
//     }

//     // Step 2: Reverse the string manually
//     let reversed = "";
//     for (let i = length - 1; i >= 0; i--) {
//         if (str[i] !== ",") {
//             reversed += str[i]; // Add each non-comma character
//         }
//     }

//     return reversed;
// }

// const x = _reverseWord("Hello, World");
// console.log(x); // Output: "dlroW olleH"

