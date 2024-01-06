const accountId= 12345
let accountEmail= "example@domain.com"
var accountPassword="xyz123"
accountCity= "ABC"

/* 
Prefer not to use var
because of issue in block scope and functional scope
*/
accountEmail="perfect@domain.com"
accountPassword="abc456"
accountCity="Lahore"
console.table([accountId,accountEmail,accountPassword,accountCity])