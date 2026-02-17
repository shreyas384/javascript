const accountId = 123456;
let accountEmail = "shreyaspawade003@gmail.com";
var accountPassword = "securepassword123";
accountCity = "Pune";
let accountState;
// accountId = 654321; // This will cause an error because accountId is a constant

/* 
do not perfer using var for variable declaration due to its function scope and hoisting behavior.
Use let and const instead.
*/

console.table([ accountState, accountId, accountEmail, accountPassword, accountCity]);