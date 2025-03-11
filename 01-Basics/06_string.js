let name = "chintu" ;
console.log(name);
let age = 50 ;
// console.log("My name is ", name, " and my age is ", age); this is the old tarika 

console.log(`My name is ${name} and my age is ${age}`);

let getName = new String("     Jindagi jiyo aarmse padhai karo dam lagake aaur mast raho aapne saath mai :)   ") ;

console.log(getName.__proto__);
console.log(Object.getPrototypeOf(getName)); //this are the two functions to do this same task used it with the wisely

console.log(getName.toUpperCase());

console.log(getName.slice(1,4)) ; //slicing is important 
console.log(getName.trim());
 
console.log(getName.charAt(5));

