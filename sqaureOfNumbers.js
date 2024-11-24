//Find a square of a number. but you can only use addition or subtraction but no multiplication or division.
function _squareOfNum(num){
    let squareNum = 0;
    console.log("xxx")
    for(let i=1;i<=num;i++){
        squareNum = num + squareNum;
    }
    return squareNum;
}
const x = _squareOfNum(1000);
console.log(x,"x")