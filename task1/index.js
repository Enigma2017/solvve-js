let expEval = (21**5 - 7)*4/3;
console.log(expEval)
//console.log(expEval.toFixed(2));

/* Выведет результат - false, так как: !!1 - приведет к логическому значению - true,
 ! + true конкатенацией будет !true, а !true значит противоположное значение - false */
let strg = String(! + !!1);
console.log(strg);

/* Выведет ошибку, так как нельзя изменять значение переменной const b
let a = 123;
const b = 456;
a++;
b--;
console.log(a, b);*/