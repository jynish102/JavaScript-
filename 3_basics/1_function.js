// console.log("I")
// console.log("R")
// console.log("o")/* if need this for n times */

function sayMyName(){
     console.log("I")
    console.log("R")
    console.log("o")
}

// sayMyName()

function addNumbers(n1,n2){
    console.log(n1 + n2)
}
// addNumbers(12,12)
// addNumbers(12,"12")
// addNumbers(12,null)

// let result = addNumbers(14,4)
// console.log(`result : ${result}`) //this is undefined for that return use


function addNumbers(n1,n2){
    // let result = n1 + n2
    // return result or
    return n1 + n2
    /* after return not execute any of code*/
}

let result = addNumbers(14,4)
// console.log(`result : ${result}`)


function loginUserMessage(username){ // default value username = "Dr.strange" 
    if(username === undefined){
        console.log("Please Enter a username")
        return
    }
    return `${username} just logged in`
}

loginUserMessage("Thanos") // no out put come only return value for print use console.log
// console.log(loginUserMessage("Thanos"))
// console.log(loginUserMessage())

function calculateCartprice(...num1){
    /* or in (val1, val2, ...num1) */
    return num1
}

// console.log(calculateCartprice(2))//if more than one parameters
console.log(calculateCartprice(200,100,400,780))
/*use rest operator use this 3 dot ... also known as spread operator depend on
use  */ 

//--------------------------------- pass Object to Function------------------------------------------
let laptop = {
    brand : "Dell",
    model : "XPS 15",
    price : 50000,
    ram: "16GB",
    storage: "512GB SSD",
    processor: "Intel i7"
};

function handleObject(anyobject){
    console.log(`laptop brand is ${anyobject.brand} and model is ${anyobject.model}`)
}

// handleObject(laptop) /* in this () pass object */

handleObject({
    brand : "Dell",
    model : "XPS 15",
    price : 50000,
    ram: "16GB",
    storage: "512GB SSD",
    processor: "Intel i7"
})/* or pass direct object to function */

//-------------------------------Pass Array to Function-------------------------
let item = ["Laptop",
        "Smartphone",
        "Tablet",
        "Smartwatch",
        "Headphones"
           ]

function handleArray(anyarray){
     return `${anyarray[0]} ${anyarray[1]}`
}

console.log(handleArray(item))
/* direct array to function call */

//-------------------------------video : 23 Arrow Function-----------------------

let laptop2 = {
    brand : "Dell",
    model : "XPS 15",
    price : 50000,
    ram: "16GB",
    storage: "512GB SSD",
    processor: "Intel i7",
    
    detail :function(){
        console.log(`Laptop brand is ${this.brand} and Model is ${this.model}`)

    }
};

// laptop2.detail()
// laptop2.brand = "hp"
// laptop2.detail() 
/* no any error use this here  */

// function one(){
//     let brand = "dell"
//     // console.log(this) no error
//     console.log(this.brand) \
//     /* undefined in function this not work */
// }
// one()


// let one = function (){
//     let brand = "hp"
//     console.log(this.brand)
// }
// one()

/* same as above i.e  i have not to store function in variable that
case */

// let one = () =>{
//     let brand = "hp"
//     console.log(this.brand);
// }
// one()

//explicit arrow function
// let addTwo = (g1,g4) => {
//     return g1 + g4
// }
// console.log(addTwo(3,5))

/*implicit return no need {} or any return. assume that something is 
return   if use {} return is compulsory but in case of () no need to return */


// let addTwo = (g1,g4) =>  g1 + g4 //or
// let addTwo = (g1,g4) => (g1 + g4)
let detail = () => ({brand: "hp"})

console.log(detail())

//-------------------------Immediately Invoked Function Expressions (IFFE)-----------------------------------
/* for decare that type of function use two ()() 1 ()  take function definition
and 2 () for function call. global scope ke pollution se kaibar
problem hoti hai to use global scope under jo declaration hai, use pollution ko 
hatane ke liye use IIFE*/ 


function detail2(){
    console.log(`hp laptop`);
}
detail2(); 
/* hitesh ne thai jay che mare nath thatu */

