// Set

const min = 1000, 
      max = 1000000, 
      length = max - min,
      repid = [];

const arr = Array.from({length}, (_, i) => {
    i += min;
    const {size} = new Set([...`${i}`]);
    if(size === 1) repid.push(i); 
    return i;
});

console.log(repid, repid.length, repid[11] * repid.at(-1));
