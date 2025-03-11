let myDate = new Date();
//this is the object of Number which methods are define on the prototype or by th eprotoype is aaplicable on the number as well if it is declare as object
console.log(myDate);
console.log(typeof myDate);
console.log(myDate.__proto__);
console.log(Object.getPrototypeOf(myDate)); 

// console.log(myDate.toDateString() , "This is the date string :)");
// console.log(myDate.toISOString(), "This is the ISO string :)");
// console.log(myDate.toLocaleDateString(), "This is the local date string :)");
// console.log(myDate.toLocaleString(), "This is the string of the date object string , this is the actual format we uses :)");
// console.log(myDate.toTimeString());

let createdDate = new Date(2023,1,1);
console.log(createdDate);




