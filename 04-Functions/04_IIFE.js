(function run() {
    console.log("DB is connnected") //to invoked immmediately we use IIFE 
})() ;

((num1)=>{
    console.log(num1," DB connected have showd in the arrow function ")
})(20) //parameter for the IIFE function ust back in the code