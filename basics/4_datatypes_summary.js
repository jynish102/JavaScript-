// console.log(21 > 10);
// console.log(21 < 10);
// console.log(21 >= 10);
// console.log(21 == 10);
// console.log(21 != 10);
// console.log("21" > 12);
// console.log("020" > 12);
// console.log(null > 0);
// console.log(null == 0);
// console.log(null != 0);
// console.log(undefined == 0);
// console.log("21" === 21); // strictly check with datatypes

//------------------------------ datatype summary ----------------------------
// Primitive :7 Types : String, Number, Boolean, null, Undefined, symbol, Bigint
// Referance(non-Primitive) : Array, Object, Function
// const score = 56;
// const height = 20.56
// let isvaid = false;
// let username;
// const id = Symbol('589');
// const id2 = Symbol('589');
// const bigint = 7826n
// let heroes = ["IronMan" , "Hulk" , "CaptionAmerica" , "BlackWiddow", "Wanda", "Dr.Strenge"]
// let obj = {
//     2009 : 'Twillight',
//     2010 : 'newmoon',
//     2011 :'eclip'
// }


// let abc = function () {
//     console.log("Vempayer From Twilight")
    
// }
// abc() call the function

// console.log(typeof heroes);

//--------------------------Memory----------------------------------
// Stack( Primitive),Heap(Referance)
// let User = "Amita Parmar" ;
// let User2 = User;
// User2 = "Anjali Jadav";
// console.log(User);
// console.log(User2); copy of variable so that no change in User rather change with user 2

let User = {
    email : "user23@gmail.com",
    designation :"Hr"
}

let user2 = User
user2.email ="rt342gmail.com"

 console.log(User);
 console.log(user2);
