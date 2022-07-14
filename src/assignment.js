// ========================
// DO NOT EDIT THIS BLOCK
const assignment = {};
// ========================

 /* Challenge - 1
 */

function sumOfNumbers(arrayOfNumbers) {
  sum = 0;
  for (let a = 0; a <= arrayOfNumbers.length - 1; a++) {
    sum+= arrayOfNumbers[a];
  }
    return sum;
}


assignment.sumOfNumbers = sumOfNumbers;

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

      
assignment.countEvenNumbers = countEvenNumbers;



/**
 * Challenge - 3
 * 
 * Given an array of numbers representing temperatures in Celsius,
 * convert each number to Fahrenheit and return a new array containing the converted
 * temperatures in Fahrenheit. Decimal figures in the converted values in Fahrenheit should be removed.
 * E.g 51.21 should just be 51 (hint: Math.trunc(...) function)
 * If you did Challenge - 3, remove the comment in the line just after this function
 * 
 * See https://www.thoughtco.com/celcius-to-farenheit-formula-609227 for the conversion formula
 * 
 * @param {Array} arrayOfNumbers the array containing temperatures in Celsius to be converted
 * @returns Array the converted temperatures in Fahrenheit
 */
//function celsiusToFahrenheit(arrayOfNumbers) {

//}  return arrayOfNumber


// assignment.celsiusToFahrenheit = celsiusToFahrenheit;


// ========================
// DO NOT EDIT THIS BLOCK
module.exports = assignment;
// ========================

