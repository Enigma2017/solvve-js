// 1.
let num1 = 23**2;
let num2 = 2**9;

if(num1 >= num2){
    console.log(num1);
} else{
    console.log(num2);
}

//тернарный оператор
num1 > num2 ? console.log(num1) : console.log(num2);


// 2.
//let num = 0;
//let num = 5/0;
//let num = -5/0;
//let num = -5;
//let num = 'f';
let num = 5;

switch(num){
    case 0:
        console.log('is zero');
        break;
    
    case Infinity:
        console.log('is +infinity');
        break;

    case -Infinity:
        console.log('is -infinity');
        break;

    case 5:
        console.log('positive');
        break;

    case -5:
        console.log('negative');
        break;

    default:
        console.log('is NaN');
        break;
}

