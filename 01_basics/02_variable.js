
const accountId = 14232
let accoutEmail = "rudra@googl.com"
var accountPassword = "rudra@" 
//prefer not to use var because of block and functional scope(global scope variable)
accountCity = "Bhopal"
// this is also a way to declare but should not be used 

let accountState
// to check a state of a variable if it is used or not, we can keep it undeclared


console.table([accountId, accoutEmail, accountPassword, accountCity, accountState])