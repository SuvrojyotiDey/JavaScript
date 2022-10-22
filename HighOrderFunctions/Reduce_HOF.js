import { MockData } from "./Mockdata.js";

/**
 * Syntax:
 *          arrayName.reduce(function(total, currentValue, currentIndex, arr), initialValue);
 *
 * total is the accumulator
 *  current is the current value in the array
 *  index is the current index in the array
 *  arr represent the entire array
 *  initial value is the value that needs to be set on the total
 *
 *  returnValue : single value that is returned by the function
 */

// case 1: to find the total of the id values using forEach , note: forEach does not return anything

let total = 0;
MockData.forEach((current, index, arr) => {
  total = total + current.id;
});
console.log(total);

// case 2: to find the total of id values using reduce , note: 0 is the initializer for both the cases

const reduceFunction = MockData.reduce((sumTotal, current, index) => {
  console.log(sumTotal, " sumTotal inside reduce Function");
  return sumTotal + current.id;
}, 0);
console.log(reduceFunction);
