let myDate = new Date()
// console.log(myDate)
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toISOString())
// console.log(typeof myDate)
let myCreatedDate = new Date(2026,11,12)
// console.log(myCreatedDate.toString()) 
/*in js Month Start From 0 to 11 So 0 is January but if write with "" 
in this cotation then it start from 1 to 12*/

let myTimeStamp = Date.now()
// console.log(myTimeStamp)
console.log(myCreatedDate.getTime())
