const { act } = require("react");

// console.log('Thor');
const accountId = 788912;
let accountEmail ="kal34@gmail.com";
var accountPassword = "022032";
accountCity = "Junagadh";
let accountState = "";

// accountId = 2354; // not allowed

accountEmail = "Atr0321@gmail.com";
accountPassword = "900978";
accountCity = "Rajkot";
/*
Prefer not to use var because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);