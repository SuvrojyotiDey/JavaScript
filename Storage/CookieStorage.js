/**
 * Syntax :  document.cookie="NAME=VALUE; expires=DATE; path=PATH; domain=DOMAIN; secure";
 * 
 * domain:
 * Some websites have lots of domains. The purpose of the 'domain' is to allow cookies to other subdomains.
 * 
 * path:
 * If a page sets a cookie then all the pages in that directory and its subdirectories will be able to read the cookie.
 * 
 * secure:
 * Includes the Secure attribute in the cookie to set whether the cookie is transmitted only over an encrypted connection.
 * 
 * 
 * expires:
 * Includes the Expires attribute in the cookie to set the cookie expiration date.
 */

document.cookie = "firstName=Suvro; secure";
/**
 * cookies are added in the above form as key value pairs
 */

const expiryDate = new Date();
/**
 * new Date() - will give current dat
 */

expiryDate.setMonth(expiryDate.getMonth() + 3);

document.cookie = "lastName=Dey; expires="+ expiryDate.toUTCString()+";";
console.log(document.cookie);

/**
 * new Date(year, month, day, hours, minutes, seconds, milliseconds)
 * Note: JavaScript counts months from 0 to 11:
 *      January = 0.
 *      December = 11.
 */

document.cookie ="designation=Developer; expires=Sat, 31 Dec 2022 12:00:00 UTC";
