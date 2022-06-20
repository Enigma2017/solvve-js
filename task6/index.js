// 1. 2. 3.

//let arr = [1000, ...1000000];

const min = 1000, 
      max = 1000000, 
      length = max - min, 
      repid = [], 
      r = i => +'1'.repeat((''+i).length);

const arr1 = Array.from({length}, (_, i) => {
    i += min;
    if(!(i%r(i))) repid.push(i);
    return i;
});

console.log(repid, repid.length, repid[11] * repid.at(-1));

