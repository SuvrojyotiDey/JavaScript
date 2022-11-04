/**
 * Optional Chaining and array props
 */

// Case 1: If an array is empty
const arr1 = [];
console.log(arr1.length, "arr1.length");

//case 2 : If an array is set to undefined and is asked for length
const arr2 = [1, 2, 3, 4, 5];
console.log(arr2, "arr2");
console.log(arr2.length, "arr2.length");
// arr2=undefined;
// ^ assignment error as arr2 is const and cant be reinitialized
// What if? arr2 is let instead const
let arr3 = [1, 2, 3, 4, 5];
console.log(arr3, "arr3");
console.log(arr3.length, "arr3.length");
arr3 = undefined;
console.log(arr3, "arr3");
// console.log(arr3.length,'arr3.length');
// ^ this will throw an error as length property does not exist in undefined
// solution:
console.log(arr3 && arr3.length, "arr3 && arr3.length");
// or
console.log(arr3?.arr3.length, "arr3?.arr3.length");
// the above will check if arr3 exists or is undefined then return undefined
// else continue and check for the property

// case 3: Optional Chaining
const arr4 = [{ id: "id1", key: "123" }];
console.log(arr4?.[0],'arr4?.[0]');
console.log(arr4?.[0]?.id,'arr4?.[0]?.id')
console.log(arr4?.[1],'arr4?.[1]')

// case 4: to check if a variable is array or not
const arr5='qwer';
console.log(arr5.length,'arr5.length')
console.log(arr5&&arr5.length,'arr5 && arr5.length')
// the above will return true as length property exists for string type 
// to counter such a possibility we use the below method
console.log(Array.isArray(arr5));
