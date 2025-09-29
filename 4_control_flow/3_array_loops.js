let arr =[12,23,45,78]

// for (let num of arr) {
//     // console.log(num);
    
// }  or i can use for in loop too

for(let num in arr){
    // console.log(arr[num])
}

let greeting = "hello world";

for(let greet of greeting)
{
    // console.log(`each character in ${greet}`)

}
//----------------------MAP--------------get only unique data
let shortcut ={
    js : "javascript",
    cpp : "C++",
    rb : "ruby",
}
 for (let key in shortcut){
    // console.log(`${key} is shortcut for ${shortcut[key]}`)
}

shortcut =["js", "rb", "cpp",'php']
for(let word in shortcut){
    // console.log(shortcut[word])
}
const map = new Map()
map.set('IN',"India")
map.set('US',"United States Of America")
map.set('Fr',"France")
map.set('IN',"India")

// console.log(map) Map itself not iterable
//destucring of array
for(let [key, value] of map){
    // console.log(key, ':-', value);
}

let myObj = {
    game1 : 'NFS',
    game2 : 'Spiderman'
}

// for(const [key ,value] of myObj){
//     console.log(key , ':-', value);
// }

let lan ={
    cpp : 'C++',
    js : 'javascript',

};

// for(const key in lan){
//     console.log(`${key} shortcut is for ${lan[key]}`)
// }

shortcut =["js", "rb", "cpp",'php']
// shortcut.forEach ( function (item) {
//     console.log(item)

// })// in () i can give any name 

shortcut.forEach( (item) => {
    // console.log(item)
});

function printMe(item){
    // console.log(item)
}
// shortcut.forEach(printMe)

shortcut.forEach( (item, index,arr) => {
    // console.log(item, index, arr)
})

let myCodding = [
    {langName : "javascript",
     extension : "js"
    },

    {lan2 : "java",
     extension : "java"
    },

    {lan3 : "html",
     extension : "html"
    }
]

myCodding.forEach( (item) => {
    // console.log(item);
})
let values = shortcut.forEach( (item) => {
    // console.log(item); no error
}) 
// console.log(values)undefined

let num = [7,1,5,6,8,2,77,89,54]
let filterarray = num.filter( (i) =>i>1) // i is any variable type
console.log(filterarray)  
/* if i write arrow function like () => {} show here i am using {} ,i need to
write return keyword for result, i started scope here. without {} non need 
return*/

num = []

num.forEach( (i) => {
    if(i>1){
        // newArray.push(i)
    }
})
// console.log(newArray)

//---------------------------Filter--------------------------------
const books = [
  {
    id: 1,
    title: "Clean Code",
    author: "Robert C. Martin",
    year: 2008,
    genre: "Programming"
  },
  {
    id: 2,
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt, David Thomas",
    year: 1999,
    genre: "Software Development"
  },
  {
    id: 3,
    title: "Introduction to Algorithms",
    author: "Thomas H. Cormen",
    year: 2009,
    genre: "Computer Science"
  },
  {
    id: 4,
    title: "You Don’t Know JS",
    author: "Kyle Simpson",
    year: 2015,
    genre: "JavaScript"
  },
  {
    id: 5,
    title: "Design Patterns",
    author: "Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides",
    year: 1994,
    genre: "Software Engineering"
  }
];

// let userBooks = books.filter( (bk) => {
//     return bk.genre === 'Software Engineering'
// })

//  userBooks = books.filter( (bk) => {
//     return bk.id === 4
// })

userBooks = books.filter( (bk) => 
     bk.year >2000
)
// console.log(userBooks)
let array = [1,2,2,7,8,6,4,45,12]
// let addArray = array.map( (i) => i+10)
let  num1 =array.map( (i) => i*2)
                .map( (i) => i +1)
                .filter( (i) => i>90)
                /*it is call chaining map in map , filter in filter*/

// console.log(addArray)
// console.log(num1)

//----------------------------Reduce---------------------------------
let n1 = [1,2,3,4]

const myTotal = n1.reduce(
    function(accumulator,cuurentvalue){
        return accumulator + cuurentvalue
    },0)
console.log(myTotal)

/* see video 30 at 31:00 this is use to sum all numbers */
