//array

// const myArr = [12, 65, 78, 9, 85,7]
// const myHeros = ["IronMan", "BlackWidow", "CaptionAmerica","Hulk"]
// const myHeros2 = new Array("IronMan", "BlackWidow", "CaptionAmerica","Hulk")

// console.log(myArr[3])
// console.log(myHeros)
// console.log(typeof myHeros)
// console.log(myHeros2)
// console.log(typeof myHeros2)


// Array Method

// myHeros.push("Dr.Strege")
// myHeros2.push(6)
// myHeros2.pop()
// myHeros.unshift("Wonder Women")
// myHeros.shift()

// console.log(myHeros)
// console.log(myHeros2)


const marvel_heros = ["IronMan", "BlackWidow", "CaptionAmerica","Hulk"]
const dc_heros = ["IronMan", "BlackWidow", "CaptionAmerica","Hulk"]
// marvel_heros.push(dc_heros)
// console.log(marvel_heros)
// const allHeros = marvel_heros.concat(dc_heros)
// console.log(marvel_heros)
const all_new_heros = [...marvel_heros, ...dc_heros] //spred operator
// console.log(all_new_heros)

const number = [12, 23, [54,56],78, 8, [7,5, [52,56 ,45],7, 5]]

const divide = number.flat(4)

// console.log(divide)

// console.log(Array.isArray("Wonder Women"))
// console.log(Array.from("Wonder Women"))

let n1 = 156
let n3 = 785
let j4 = 120

console.log(Array.of(n1, n3, j4))
