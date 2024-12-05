const accountId = 144553 // const cannot be changed
let accountEmail =  "pratik@google.com"
var accountPassword = "12345"
accountCity =  "Jaipur"
let state;

accountEmail = "shah@google.com"
accountPassword = "456789"
accountCity = "Bengaluru"

/*
Prefer not to use var
becauase of issue in block scope and funtional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, state]);