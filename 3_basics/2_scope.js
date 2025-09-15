// let h1 = 78
// var l2 = 89
// const k1 = 20

// console.log(h1)
// console.log(l2)
// console.log(k1)

//----------------------video: 21 Scop-----------------------------
var l2 = 300
if (true){
    let h1 = 78
    var l2 = 89
    const k1 = 20
}
/* if i declare var out side of {} i.e. in starting of {} then it take the value of in side of {} 
but if var after i.e end of {} then it take new value which redeclare */

// console.log(h1)
// console.log(l2)
// console.log(k1)

//-----------------------nested Scope------------

function one(){
    let genre = "Marvel";
    function two(){
        let movieName = "Thor";
        // console.log(genre);
        // console.log(movieName);
    }
    // console.log(movieName); // get error
    two()
}
one()

//------------------------------------------------

// console.log(addOne(5))
function addOne(g1){
    return g1 + 1
}
// console.log(addOne(5)) 
/* both are work after the declare the function call or first call the function then 
declare it*/


console.log(addTwo(5))// get error
let addTwo = function(g1){
    return g1 + 2
}

// console.log(addTwo(5))

