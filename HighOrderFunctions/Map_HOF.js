import { MockData } from "./MockData.js";

/**
 * syntax :
 *        arrayName.Map(callBackFn,thisArg);
 *         callBackFn: (currentValue, index, arr)=> return (condition) ;
 *
 * currentValue : currentValue gives you the current object value (reqd param)
 * index : index gives you the current object index in the array (notReqd param)
 * arr : arr gives you entire array (notReqd param)
 * thisArg: optional object to pass
 *
 * returnValue : 'Array'
 *
 * the entire length of the array will be returned
 */

/** case1: map with arrow function */
const mapFunction = MockData.map((current, index) => {
  return current;
});
console.log(mapFunction);

/** case2: map with this arg */
const obj = { name: "Suvro" };
function mapFn(current) {
  if (this.name === current.name) {
    current.designation = "Senior Developer";
  }
  return current;
}
console.log(MockData.map(mapFn, obj));
