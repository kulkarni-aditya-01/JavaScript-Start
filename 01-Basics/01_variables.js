//Make the account information 
const accountId = 12311597 ;
let accountEmail = "aditya@google.com" ;
var accountName = "Vijaywada" ;
accountType = "Savings" ;

// accountId = 12311598 ;
// console.log(accountId);  error due to the change in the const varibel is not permitted

console.table([accountId,accountEmail,accountName,accountType]);


/*
dont use the var due the problem of the 
it has problem with the scope and function resolution 
*/