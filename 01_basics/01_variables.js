const accountId =14453
let accountEmail="akash@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

//accountId =2// not allowed

accountEmail= "hc@hdc.com"
accountPassword= "12345432"
accountCity="Bengaluru"

console.log(accountId);

/*
Prefer not to use var
beacause of issues in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])