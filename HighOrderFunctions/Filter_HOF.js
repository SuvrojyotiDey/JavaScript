import { MockData } from "./MockData.js";

/**
 * syntax :
 *          arrayName.filter((currentValue, index, arr)=> return (condition) ;);
 * currentValue : currentValue gives you the current object value (reqd param)
 * index : index gives you the current object index in the array (notReqd param)
 * arr : arr gives you entire array (notReqd param)
 *
 * returnValue : 'Array'
 *
 * it contains only elements that meet the 'condition' in the array .
 * else return's empty array.
 *
 */

const filterFunction = MockData.filter((element, index, arr) => {
  return element.designation === "Developer";
});

console.log(filterFunction);

console.log(
  MockData.filter((element) => {
    return element.designation === "Developer" && element.name === "Suvro";
  })
);
