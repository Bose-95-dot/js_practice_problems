// Count the number of vowels in a string 
//using match keyword
// function countVowels(string) {
//     const noInput = !string;
//     return noInput ? "Please enter a string" : (string.match(/[aeiou]/gi) || []).length;
// }
// console.log(countVowels("jhbhujbhj"))
// without using match keyword

function countVowels(string) {
    const noInput = !string;
    let count = 0;
    for(let i = 0; i < string?.length; i++){
        if(string[i] === "a" || string[i] === "e" || string[i] === "i" || string[i] === "o" || string[i] === "u"){
            count++;
        }
    }
    return noInput ? "Please enter a string" : count;
}
console.log(countVowels())