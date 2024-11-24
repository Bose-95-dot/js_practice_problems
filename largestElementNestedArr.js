//Write a JavaScript program to find the largest element in a nested array.


//@method 1(short cut)
 const x = [2,4,[6,8,[3,6,33,[76,6,65],6]],10,11,[0,8]]

 let res= x.join()
 let newArray =  res.split(',').map(Number).sort((a,b)=>b-a)[0]
 console.log(newArray)


 //@method 2
//  function _sortNumber(arr,length){

//     if(length === 1){
//         return arr[0];
//     }

//     return Math.min(arr[length - 1],
//             _sortNumber(arr,length -1))

//  }
//  function findLargestNumber(arr){
//      let res= x.join()
//     const newArr = res.split(',').map(Number)
//     let length = arr.length;
//     console_sortNumber(newArr,length);
//     console.log(result)
//  }
//  findLargestNumber(x)