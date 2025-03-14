let arr = [1,2,3,4,5,6,7,8];
let arr_1 = [0,9,8,7,6];

// arr.push(arr_1);
// console.log(arr); 
// console.log(arr_1);


let arr_3 = arr.concat(arr_1); //original array remians same and the return new array
console.log(arr_3);

let hero = ["aditya","surya","chndra", [1,2,3], "chmoya" , "rangila" , [4,5,6,7,["no","yes","no"]]]
//this above is the depth of the array and to make this depth spread we have flat function with us console
// console.log(hero.flat(3))  // infinity is also a paramter we can pass 

//industry standard : spread the array ;
let hero_spread = [...hero, ...arr_3];
// console.log(hero_spread);

console.log(Array.isArray(hero));
console.log(Array.of("adi","nadi","nko","lagus")); //to make the array by passing any argumnet 
console.log(Array.from("MOHAN"));                  //to make the string manipulation for the array 










