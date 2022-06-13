// 1.

let arrowFunc1 = (a, b) => console.log((a + b)/2);

arrowFunc1(-5, 8);
arrowFunc1(533, 865);

//варіант з псевдоаргументами 
function arrFunc2(){
    let sum = 0;
    for(let i=0; i < arguments[i]; i++){
        sum += arguments[i];
    }
    return sum == 0 ? sum : sum/arguments.length;
}

console.log(arrFunc2(2,6,9).toFixed(2));
console.log(arrFunc2(1,7,5,6,2).toFixed(2));


// варіант з reduce

let arrowFunc2 = (...elem) => {
    return elem.reduce(( a, b ) => a + b) / elem.length;
}

console.log(arrowFunc2(2,4,5,8,9).toFixed(2));


//2
function summ(num1, num2, sign){
    
let result;
    if(sign === 'division'){
        result = num1/num2; 
    } else if(sign === 'multiple'){
        result = num1*num2;
    } else if(sign === 'plus'){
        result = num1 + num2;
    } else if(sign === 'minus'){
        result = num1 - num2;
    } else{
        result = 'wrong date';
    }
    return console.log(result);
}

summ(+prompt('num1?', ''), +prompt('num2?', ''), prompt('division/multiple/plus/minus?', ''));