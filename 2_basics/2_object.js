/* two way to defined 1.object literals (not singleton) define: {}
    2.object constructor (singleton)  define : object.create */

// define object literals
let car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2022,
   
};

/* by default js trat key as string so don't need to write key in "" , 
but if in object key is in "" then for acces proprties need 2 console.log  */

// access properties
// console.log(car.brand);   // Toyota
// console.log(car["year"]); // 2022
// console.log(Object.keys(car))
// console.log(Object.values(car))


const mySym = Symbol("pricekey")
let laptop = {
    brand : "Dell",
    model : "XPS 15",
    price : 50000,
    [mySym] : 60000,
    ram: "16GB",
    storage: "512GB SSD",
    processor: "Intel i7"
};


// console.log(laptop.brand);        // Dell
// console.log(laptop.storage); // 512GB SSD
// console.log(laptop.mySym)// with out []
// console.log(typeof laptop.mySym) // with out []
// console.log(laptop[mySym])
// console.log(typeof laptop[mySym])
// console.log(laptop)
// console.log(Object.keys(laptop))
// console.log(Object.values(laptop))
// console.log(Object.entries(laptop))
// console.log(laptop.hasOwnProperty('brand'))

laptop.brand = "Hp"
// console.log(laptop.brand)
// Object.freeze(laptop)//for lock changes
laptop.processor = "razon"
// console.log(laptop.processor)

laptop.showDetails = function() {
    // console.log(`${this.brand} ${this.model}  ${this.price}rupay ${this.ram} `);
};// this use referance for curent object
laptop.showDetails()



//------------------------------Object With Constructer---------------------
// let player = new Object();

let player = {}

player.name = "Virat Kohli";
player.sport = "Cricket";
player.team = "India";


// console.log(player)

let player2 = {
    name :  "Virat Kohli",
    stats : {
    matches: 275,
    runs: 12898,
    centuries: 46
   }
}

// console.log(player2.stats) // giv status all value
// console.log(player2.stats.centuries) // in status specific value

let sports = {
    1: "Cricket",
    2: "Football",
    3: "Hockey",
    4: "Tennis"
};

let sportsInstruments = {
    5: "Bat",
    6: "Football",
    7: "Stick",
    7: "Racket",
    9: "Shuttle"
};

// console.log(sports, sportsInstruments)
// console.log(Object.assign(sports, sportsInstruments)) or
// console.log(Object.assign({}, sports, sportsInstruments)) 
/* {} it's not complsary {} is act as target for frthur knwoledge jsmdn docu.
*/ 

// console.log({...sports, ...sportsInstruments})

let mix = [
    {
    1: "Cricket",
    2: "Football",
    3: "Hockey",
    4: "Tennis"
},
{
    5: "Bat",
    6: "Football",
    7: "Stick",
    7: "Racket",
    9: "Shuttle"
},
{
    name :  "Virat Kohli",
    stats : {
    matches: 275,
    runs: 12898,
    centuries: 46
   }
}

]


// console.log(mix[2].stats.matches)
// console.log(Object.keys(mix))

let course = {
    coursename : "js in hindi",
    price : 999,
    instructor : "hitesh" 
}

//course.price or course.coursename  this is not a best practice code look not clean

const {price} = course 
/*in {} key of object  right side of = object name. also rename the key in {price : rate}  */
console.log(price) 

//-----------------------jsn api------------------------
//  {
//     1: "Laptop",
//     2: "Smartphone",
//     3: "Tablet",
//     4: "Smartwatch",
//     5: "Headphones"
// };

/* or api in array form [
{},
{},
{}
] */
