let arr = ["I", "go", "home"];

delete arr[1]; // remove "go"

console.log( arr[1] ); // undefined

// now arr = ["I",  , "home"];
console.log( arr.length ); // 3

console.log(arr);
console.log(Array.isArray(arr));
console.log(typeof(arr));