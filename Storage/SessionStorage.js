sessionStorage.setItem('FirstName','Suvro');
sessionStorage.setItem('LastName','Dey');
sessionStorage.setItem('Designation','Developer')

console.log(sessionStorage);
/**
 * Syntax : setItem(key: string, value: string)
 */

 console.log(sessionStorage.length);
/**
 * gives the length of the keys stored
 */ 

const userName=sessionStorage.getItem('Designation');
/**
 * Syntax : getItem(key: string)
 * return value : returns the object stored in session storage with the specified key.
 */
console.log(userName);

sessionStorage.removeItem('LastName');
/**
 * Syntax : removeItem(key: string)
 * return value : undefined
 */

// sessionStorage.clear();
/**
 * Removes all key/value pairs, if there are any.
 */