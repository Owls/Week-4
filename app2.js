/**
 * Here, we prompt the user to input a number, which we store in the variable, "num1".
 * CHECK: Functioning as intended.
 */
var num1 = prompt('Please enter a number:');

/**
 * Second verse, same as the first. 
 */
var num2 = prompt('Please enter another number:');


/**
 * This will use the Math functionality to calculate the previous Variables (var1 & var2).
 * The numbers input earlier will be used to calculate a new result, namely, num1 to the power of num2.
 * CHECK: Functioning as intended. 
 */
console.log('POWERS EXPONENT');
console.log(Math.pow(num1,num2));

/** Uses the Math functionality to rendomly generate a number between 1 & 3 
 * CHECK: Functioning as intended.
*/
console.log('RANDOM 1 & 3');
console.log(Math.floor(Math.random() * 3) + 1); 


/**
 * Creates an Array
 */
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f'];

/**
 * Using the .pop method, we can remove the last element of an Array.
 * CHECK: Functioning as intended.
 */
alphabet.pop();
console.log(alphabet);

/**
 * Using the .push method, we can add an element to the end of an Array. 
 * CHECK: Functioning as intended.
 */
alphabet.push("g");
console.log(alphabet);

/**
 * Using the .shift method, we can remove an element from the beginning of an Array.
 * CHECK: Functioning as intended.
 */
alphabet.shift();
console.log(alphabet);

/**
 * Using the .unshift method, we can add elements to the beginning of an Array.
 * CHECK: Functioning as intended. 
 */
alphabet.unshift("1");
console.log(alphabet);



