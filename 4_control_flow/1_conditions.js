/*-----------------------------------------------chai or code video 26if Statement: Syntax: if(){}*/
 let laptop = "hp"
// if (laptop == "dell"){
//     console.log(`${laptop} is made in`)
// }
let userLoggedIn = true
let debitCard = true
if(userLoggedIn && debitCard){
    console.log(`Allow buy Course`)
}
// if (laptop == "dell") console.log(`${laptop} is made in`);
/* i write the if as above not tht only 1 .lof is perform if i add more than one log add , end
of 1st log but this way is not a good practice it's node clean code. it is execute without 
error cause it is implicit scope 

/*---------------------------------if else-----------------------------*/
if(laptop == "dell"){
    // console.log(`${laptop} is made in`)

}else{
    // console.log(`${laptop} is made in .........`)

}

/*-------------------------------------nested if else---------------------------------------*/

// if(){}else 
//     if(){}else if(){
// }else{}

/*-------------------------Terniary Operator : condition ? true : false ---------------------------*/  
let phone = "Samsung";
phone == "Oppo"  ? console.log(`prediction is true`) : console.log(`prediction is false`)


/*--------------------------------switch---------------------------------------------------
syntax: 
switch(key){
    case value:
.....................

        break;
    default:
        break;
        key=which value i have to check. why to use break? if the match case is true and after
        the match case another case exists then  it return all after the match case except default*/

// let month = 3
// switch (month){
//     case 1:
//         console.log(`January`)
//         break;
//     case 2:
//         console.log(`February`)
//         break;
//     case 3:
//         console.log(`March`)
//         break;
//     case 4:
//         console.log(`April`);
//         break; 
//     default:
//         console.log(`no match found`);
//         break;          
// }

/*-------------truthy : assume that it is always true or falsy : opposite to truthy---------------------*/
let username = "j@gmail.com"
if(username){
    // console.log(`Got User email`);
} else{
    // console.log(`Don't have user email`);
} 

/* Hear I am not check any Condition variable==something,variable>=,!= no any of condition check
after that execute without error. so it is called truthy value.
list of falsy Value: false(it it also call as falsy),0, ,0n(BigInt),""->(Empty string),Nan,
null, undefined
Truthy : true
"0"       String ke Under hai
" "       String With Some Space
"hello"   // non-empty string
42        // any non-zero number
[]        // empty array
{}        // empty object
function(){}  // any function */

// username = [];
// if(username.length === 0){
//     console.log(`Array Is Empty`);
// }

// let emptyObj = {}
// if(Object.keys(emptyObj).length === 0){
//     console.log(`Object Is Empty`)
// }
/*-----------------------Nullish Coalescing Operator (??) : null undefined.. for database  use-----------------*/
let val1;
// val1 = 10 ?? 52
// val1 = null ?? 52
// val1 = undefined ?? 52
// val1 = null ?? undefined ?? 52
// console.log(val1)
