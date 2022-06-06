// 1.

let arr1 = ['zero' ,'one', 'two', 'three', 'four', 'five'];
let i = 0;
//for loop
for( ;i < arr1.length; i++){
    console.log(arr1[i]);
}

let arr2 = [22, 7, -98, 11, -37, 14];
let j = 0;
//while loop
while(j < arr2.length){
    console.log(arr2[j]);
    j++;
}

let arr3 = ['a', 'b', 'c', 'd', 'e'];
let k = 0;
//do-while loop
do{
    console.log(arr3[k]);
    k++;
}while(k < arr3.length);

const townList = ['London', 'Berlin', 'Oslo', 'Istanbul'];

townList.forEach(elem => console.log(elem));


//2.
const obj = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    x: 30
}
 let leng = 0;
 for(let key in obj){
    if(obj.hasOwnProperty(key)) leng++;
 } 
 console.log(leng);