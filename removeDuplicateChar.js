//remove duplicate char and return that duplicate char(sensitive)

function _removeDuplicateChar(str){
    return str.split('')
              .filter((char, index, arr) => 
                char !== undefined && char.trim() !== '' && arr.filter(c => c === char).length > 1 )
              .join('')
}

const x = _removeDuplicateChar("Learn more javascript dude");
console.log(x)


//remove duplicate char and return remaining  char(sensitive)
