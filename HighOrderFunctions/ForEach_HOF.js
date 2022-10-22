import { MockData } from "./MockData.js";

/**
 * Syntax :
 *          arrayName.forEach((currentValue, index, arr)=>{});
 *
 * currentValue : currentValue gives you the current object value (reqd param)
 * index : index gives you the current object index in the array (notReqd param)
 * arr : arr gives you entire array (notReqd param)
 *
 * return Value: undefined
 *
 * it does not return anything
 */

console.log("---------------------------------------");

/** case 1: with all params */
MockData.forEach((currentValue, index, arr) => {
  console.log(currentValue);
  console.log(index);
  console.log(arr);
});

console.log("---------------------------------------");

/** case 2: with iterative object  */
MockData.forEach((element) => {
  console.log(element.id);
  console.log(element.name);
  console.log(element.designation);
});

console.log("---------------------------------------");

/** case3: foreach return value is undefined */
const forEachReturnValue = MockData.forEach((element) => {
  console.log(element.id);
  console.log(element.name);
  console.log(element.designation);
});
console.log(forEachReturnValue);
