import { MockData } from "./MockData.js";

/**
 * Syntax :
 *          arrayName.forEach(callBackFn,thisArg);
 *
 *          callBackFn:(currentValue, index, arr)=>{}
 *
 * currentValue : currentValue gives you the current object value (reqd param)
 * index : index gives you the current object index in the array (notReqd param)
 * arr : arr gives you entire array (notReqd param)
 * thisArg: optional object to pass
 *
 * return Value: undefined
 *
 * it does not return anything
 */

/** case 1: with all params */
MockData.forEach((currentValue, index, arr) => {
  console.log(currentValue);
  console.log(index);
  console.log(arr);
});

/** case 2: with iterative object  */
MockData.forEach((element) => {
  console.log(element.id);
  console.log(element.name);
  console.log(element.designation);
});

/** case3: foreach return value is undefined */
const forEachReturnValue = MockData.forEach((element) => {
  console.log(element.id);
  console.log(element.name);
  console.log(element.designation);
});
console.log("Return value in forEach is ", forEachReturnValue);

/**case4: with thisArg */
const obj = { name: "Suvro" };
function forEachFn(element) {
  if (this.name !== element.name) {
    console.log(element.id, element.name, element.designation);
  }
}
MockData.forEach(forEachFn, obj);
