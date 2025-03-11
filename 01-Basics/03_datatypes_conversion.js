let str = "33abc" ;
let num = "33" ;

console.log(typeof str);
console.log(typeof num) ;

let valueScoreNum = Number(str) ;  //just the typecasting like the c++ ;

console.log(typeof valueScoreNum);
console.log(typeof str);
console.log(valueScoreNum); //it is not the pure number so that NaN is output ; 

// *************operations**************
/*
console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**2);
console.log(2/2);
console.log(2%3) ;
*/

let a = "2" + 2 + 2 ;
console.log(a, typeof a);

let b = "2" + 2;          
console.log(b, typeof b) ;

let c = 2 + "1" ;       //2 and 1 concatneation and the string is formed 
console.log(c, typeof c);

let d = 2 + 2 + "3" ;   //here 2+2 will add as 4 and the 3 as string will append with it to form the 43 
console.log(d, typeof d);

console.log(typeof NaN);
console.log(' '+ NaN);
var x = NaN+ ' ';
console.log(typeof x, " this ' ' after the concatenation changes the type of the Nan : ");




