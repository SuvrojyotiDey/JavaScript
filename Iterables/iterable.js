/** case1: Array iterable */
const arr = [1, 2, 3, 4, 5];
console.log("for of loop");
for (const num of arr) {
  console.log(num);
}
console.log("for in loop");
for (const num in arr) {
  console.log(arr[num]);
}
/** case2: String iterable */
const str = "hello";
console.log("for of loop");
for (const char of str) {
  console.log(char);
}
console.log("for in loop");
for (const char in str) {
  console.log(str[char]);
}
/** case3: Map iterable */
const map = new Map();
map.set("IN", "India");
map.set("USA", "United states of America");
map.set("FR", "France");
map.set("IN", "India");
console.log("for of Map");
for (const [key, value] of map) {
  console.log(key, "->", value);
}
/** case4: Object Iterable */
const obj = {
  js: "javascript",
  cpp: "c++",
  py: "python",
};
console.log("for in loop");
for (const key in obj) {
  console.log(key, "->", obj[key]);
}
