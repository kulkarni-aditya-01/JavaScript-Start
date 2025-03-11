//create the array 

let arr = [1,2,3,4,'a',"aditya"];
// console.log(arr);
// console.log(Array.__proto__);

arr.push(6);
console.log(arr);
console.log(typeof arr);

arr.pop();
console.log(arr);

// arr.unshift(123);  //add at the beginning 
// console.log(arr);

arr.shift(); //remove element from the strt index 
console.log(arr);

// console.log(arr.includes(3));
// console.log(arr.indexOf(2));
// console.log(arr.indexOf(19));

const new_arr = arr.join() ;
console.log(new_arr , " ----> this join() changes the tyep into the comma separated string from arrya");
console.log(arr);

//slice and splice 
let myarr = [1,2,3,4,5];
console.log("A  ",myarr);

//3 is not include 
let myarr_cpy = myarr.slice(0,3);
console.log(myarr_cpy);
console.log("B  ",myarr);

//now delete the slice using the splice 
let myarr_cpy_2 = myarr.splice(0,2);
console.log(myarr_cpy_2);
console.log("C  ",myarr); 












