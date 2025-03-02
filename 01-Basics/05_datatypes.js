// Primitive = always used by the call by value method 
// Number, String, BigInt, null, undefinied, symbol, boolean

let a = 30 
let b = undefined 
let bool = false ;

console.log(typeof b);
console.log(typeof a);
console.log(typeof bool);
console.log(typeof "Hari Om");

// Refrence (Non-primitive) = used by the call by refrence method 
// array, objects, functions (This function is also a function object datatype)
//null is also a object not a string or the number or boolean

let arr = [1,2,3,4,5];
console.log(typeof arr);
console.log("Array is also a object type of the data")

let g = function() {
    var dd = DD ;
}
console.log(typeof g);
console.log("By this we can make the observation that this all non primitive datatypes are the in the object type :) ");





