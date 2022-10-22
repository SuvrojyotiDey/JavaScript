localStorage.setItem('FirstName','Suvro');
localStorage.setItem('LastName','Dey');
localStorage.setItem('Designation','Developer')

console.log(localStorage);
/**
 * Syntax : setItem(key: string, value: string)
 */

 console.log(localStorage.length);
/**
 * gives the length of the keys stored
 */ 

const userName=localStorage.getItem('Designation');
/**
 * Syntax : getItem(key: string)
 * return value : returns the object stored in local storage with the specified key.
 */
console.log(userName);

localStorage.removeItem('LastName');
/**
 * Syntax : removeItem(key: string)
 * return value : undefined
 */

localStorage.clear();
/**
 * Removes all key/value pairs, if there are any.
 */