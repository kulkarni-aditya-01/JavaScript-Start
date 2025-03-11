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

let createdDate = new Date(2023,2,1,5,30,32);

console.log(createdDate.toLocaleString()); 

let generateDate = new Date("2023-12-23");
console.log(generateDate.toLocaleString(), "This date has the pattern like MM-DD-YY");

let myTimeStamp = Date.now() ;

console.log(Math.floor(myTimeStamp/1000)); //this will convert it into the total number of the seconds 

let newDate = new Date();
console.log(newDate.getDay());
console.log(newDate.getDate());
console.log(newDate.getMonth()+1); //because the month strt from the 0 in the js 
console.log(newDate.getMinutes());
console.log(newDate.getSeconds());

console.log(newDate.toLocaleString('default', {
    weekday : "long",
    minute : "2-digit",
    day : "2-digit",
})); //this is the customization of the date 


// console.log(typeof myDate);




