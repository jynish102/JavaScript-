//--------------------------for loop------------------------
// for (let index = 0; index <10; index++) {
//     const element = index;
//     console.log(element)
    
// }

for(let i = 0; i<=5; i++){
    // console.log(`Outer loop value: ${i}`)
    for(let j = 0; j<=5; j++){
    // console.log(`Inner loop value: ${j} and inner loop ${j}`)
    // console.log(i + '*' + j + ' = ' + i*j)
    }
}

let heros = ['Iron Man', 'Thor', 'Dr.Strange','Hulk']
for (let index = 0; index < heros.length; index++) {
    // const element = heros[index];
    // console.log(element)
}

//--------------------------break and continue-----------------
for (let index = 0; index <=20; index++) {
    if(index==5){
        // console.log(`Detected 5`);
        break;
    }
    // console.log(`${index}`)
}
for (let index = 0; index <=20; index++) {
    if(index==5){
        // console.log(`Detected 5`);
        continue;
    }
    // console.log(`${index}`)
}

//----------------------------While---------------------------------
// while(condition){}

// let index =100;
// while (index>=91) {
//     console.log(`${index}`)
//     index = index-1;
// }
//  heros = ['Iron Man', 'Thor', 'Dr.Strange','Hulk']
//  let arr = 0;
//  while(arr<heros.length){
//     console.log(`${heros[arr]}`)
//     arr =arr+1;
//  }
//------------------do-while----------
let n1=1;
do{
    console.log(`${n1}`)
    n1++
}while(n1<=10);
//------------------------loops For Array-----------------------------




