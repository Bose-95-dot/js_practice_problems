//find the prime factors of a number
function PrimeFactor(num){
        let factors = [];
        let divisor =2;
        while (num>2) {
            if(num % divisor == 0){
                factors.push(divisor);
                divisor = num/divisor;
                if(factors.includes(divisor)){
                    return factors;
                }
            }else{
                divisor++;
            }
    
        }
        return factors;
    
    }
    let x = PrimeFactor(24)
    console.log(x,"x")
