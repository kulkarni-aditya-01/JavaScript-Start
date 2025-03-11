let age = 50 ;         //this is the number itself without any object property

console.log(age);

let salary = new Number(1234.2945); //this is making the object explicitly 
console.log(salary);

console.log(salary.toString().length); //this shown the length of teh below stirng
console.log(salary.toString());  //this will be the string for now 

console.log(salary.toFixed(4));    //this  would convert the number into the decimal if not and also fixed it upto the given argument
                                   //FIXED IT always from the decimal point                          


console.log(`${salary} precise to 4 is :  ${salary.toPrecision(4)} `);
console.log(`${salary} precise to 5 is :  ${salary.toPrecision(5)} `); //precision is not convert the vlaue just do the precision

console.log(`${Number.MAX_VALUE} is the max value in the number`);
console.log(`${Number.NEGATIVE_INFINITY} is the ngative infinity` );
console.log(`${Number.MIN_SAFE_INTEGER} is the minimum safe integer`);



