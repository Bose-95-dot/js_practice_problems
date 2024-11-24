//Write a JavaScript function to check if a given string is a palindrome

//@method 1
const str ="MAgafaAM"
const length = str.length;
const loopCount = length/2;
let isPalindrom = false;
for (let index = 0; index <= loopCount; index++) {
    if(str.charAt(index) === str.charAt(length -(index+1))){
        isPalindrom = true
    }else{
        isPalindrom = false;
        break;
    }
}

isPalindrom? console.log("Palindrom"):console.log("non palindrom")

//@method 2
function palindromStringFinder(str){
    const isPalindrom = str === str.split("").reverse().join("");
    isPalindrom? console.log("Palindrom"):console.log("non palindrom")

}
palindromStringFinder("MadAm");