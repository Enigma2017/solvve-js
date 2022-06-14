// 1.

const obj1 = {
    number_1: 23,
    number_2: 99,

    multiply(){
        return this.number_1*this.number_2;
    }
};

console.log(obj1.multiply());

//2.
const obj2 = {
    number_1: 56,
    number_2: 98
};

console.log(obj1.multiply.call(obj2));

/*3.* с помощью .bind реализовать задачу 2, но так, чтобы 
после каждого умножения увеличивались на 5 number_1 и number_2 в
исходном объекте obj (прямую отсылку к переменной, где хранится
исходный объект, использовать нельзя)*/

let mult = function(num){
    let temp = obj1.multiply.call(this);
    this.number_1 += num;
    this.number_2 += num;
    return temp;
} 

let multFunc = mult.bind(obj2, 5);
console.log(multFunc(), obj2);
