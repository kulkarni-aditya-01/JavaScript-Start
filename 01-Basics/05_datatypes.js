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


//stack(primitive) : Copy of the value or the element stored at stack  !!
// heap(non-primitive) : Always get the refrence of the element not the copy !!

let num1 = 303  ;
let num2 = num1 ;
num2 = 202 ;

console.log(num1);
console.log(num2);

console.log("This is the primitive datatype creates the memeory on the stack and uses the copy not the pointer/refrence");

let obj1 = {
    user : "aditya@yoyo.com",
    id : "beshram",
    name : "Aditya",
    password : "aditya@2005" 
};

let obj2=obj1 ;
obj2.id= "nalayak" ;

console.log(obj1.id);

console.log("This is the one of the most imp concept to learn that heap uses the refrence always not uses the copy to save memory");







