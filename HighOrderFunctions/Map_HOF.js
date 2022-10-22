import { MockData } from "./Mockdata.js";

/**
 * syntax :
 *
 * arrayName.Map((currentValue, index, arr)=> return (condition) ;);
 * currentValue : currentValue gives you the current object value (reqd param)
 * index : index gives you the current object index in the array (notReqd param)
 * arr : arr gives you entire array (notReqd param)
 *
 * returnValue : 'Array'
 *
 * the entire length of the array will be returned
 */

const mapFunction = MockData.map((current, index) => {
  console.log(current);
  if (index > 1) return current.designation === "Developer";
});

console.log(mapFunction);
