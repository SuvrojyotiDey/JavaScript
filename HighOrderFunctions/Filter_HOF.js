import { MockData } from "./MockData.js";

/**
 * syntax :
 *          arrayName.filter(callBackFn,thisArg);
 *
 *          callBackFn: (currentValue,index,arr)=> return condition;
 *
 * currentValue : currentValue gives you the current object value (reqd param)
 * index : index gives you the current object index in the array (notReqd param)
 * arr : arr gives you entire array (notReqd param)
 * thisArg: optional object to pass
 *
 * returnValue : 'Array'
 *
 * it contains only elements that meet the 'condition' in the array .
 * else return's empty array.
 *
 */

/** case 1 : filter with arrow function */
const filterFunction = MockData.filter((element, index, arr) => {
  return element.designation === "Developer";
});
console.log(filterFunction);

console.log(
  MockData.filter((element) => {
    return element.designation === "Developer" && element.name === "Suvro";
  })
);

/** case2: Filter function with thisArg (arrow function does not support `this` keyword ) */
const obj = { name: "Suvro" };
function filterFunc(element) {
  return element.designation === "Developer" && this.name === element.name;
}
console.log(MockData.filter(filterFunc, obj));
