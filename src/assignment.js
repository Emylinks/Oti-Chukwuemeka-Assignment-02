// ========================
// DO NOT EDIT THIS BLOCK
const assignment = {};
// ========================

 /* Challenge - 1
 */
const arrayOfNumbers = [1,2,3,4,5,6,7,8,9,10];
function sumOfNumbers(arrayOfNumbers) {
  sum = 0;
  for (let a = 0; a <= arrayOfNumbers.length - 1; a++) {
    sum+= arrayOfNumbers[a];
  }
    return sum;
}
console.log(sumOfNumbers(arrayOfNumbers));

// assignment.sumOfNumbers = sumOfNumbers;

// Challenge - 2


function countEvenNumbers(arrayOfNumbers) {
  count = 0;
  for (let b = 0;  b <= arrayOfNumbers.length -1; b++)
    {
      if (arrayOfNumbers[b] % 2 == 0)
      {
        count+=1 ;
      }
    }
        return count;
      }

  console.log(countEvenNumbers(arrayOfNumbers));
      
// assignment.countEvenNumbers = countEvenNumbers;

/**
 * Challenge - 3
*/

function celsiusToFahrenheit(arrayOfNumbers) 
{
  const arrayOfNumbers2 = [];
  for (let c = 0; c <= arrayOfNumbers.length -1; c++) 
  { 
    arrayOfNumbers2[c] = Math.trunc(arrayOfNumbers[c] * 1.8 + 32)
} 
  return arrayOfNumbers2;
}
     
console.log(celsiusToFahrenheit(arrayOfNumbers));


// assignment.celsiusToFahrenheit = celsiusToFahrenheit;


// ========================
// DO NOT EDIT THIS BLOCK
module.exports = assignment;
// ========================

