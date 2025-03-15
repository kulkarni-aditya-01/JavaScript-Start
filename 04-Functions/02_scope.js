let a = 50;
if(true){
    a = 40 ;
}

console.log(a);

function One(){
    const username = "Aditya";

    function two(){
        console.log(`Username is ${username}`);
        let website = "youtube"
    }
    // console.log(website);  //THROW THE ERROR IN THIS LINE AND STOP THE EXECUTION 
    
    two();
}
One() ;

//interesting one 

console.log(add(20)); //access the function before the execution of that line 
function add(num){
    return num+2 ;
}

// console.log(addtwo(20,30)); //but this type is not executing becaue it stored under the variable and till this point this variabel is not in the memory

const addtwo = function (num1,num2){
    return num1+num2 ;
}
console.log(addtwo(20,30)); //now this execute the function 


