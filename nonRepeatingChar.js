//Find the First Non-Repeated Character

function _nonRepeatingChar(str){
    const length = str.length;
    for (let index = 0; index <=length; index++) {
        let repeatedCharCount = 0;
      for(let j = 0; j <= length;j++){
        if(str[j] === str[index] && index !== j){
            repeatedCharCount = 1
            continue;
        }
        if(j === length-1 && repeatedCharCount === 0){
            return index;
        }
      }
        
    }
}
const nonRepeatedChar = _nonRepeatingChar("abcabbxy");
console.log(nonRepeatedChar,"nonRepeatedChar")