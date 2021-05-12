// #### Number Square
// * Write a function which will return Square of given number
function squareNumber(number){
    return Math.pow(number,2)
}


  console.log(squareNumber(7));  
  console.log(squareNumber(78));  
  console.log(squareNumber(978));  
  console.log(squareNumber(2)); 
  //it prints :
//   49
// 6084
// 956484
// 4 
 

// * Write a function which will return Square of every number in array

const array = [1, 2, 3, 4, 5, 6];


function square(array, func) {
    const squaredArray = [];
    array.forEach(element => {
        squaredArray.push(func(element))
    });
    console.log(squaredArray);
}

square(array,squareNumber)  // returns [1, 4, 9, 16, 25, 36]

//or like this, array function with map simplified !!

function square1(array,func) {
   return  array.map(func);

}
const newArray = square1(array, squareNumber);
console.log(newArray);