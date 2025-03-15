function add(num1, num2){
    console.log(num1+num2) ;
}

add(2,4);
add("2","4");
add(2,"4");
add(2,null);

function sub(num1, num2){
    return num1-num2 ;
}

const result = sub(3,4) ;
console.log(result );


function loginusername(username){
    if(username === undefined){
        console.log(`Please enter the username `);
        return ;
    }
    return `${username} is logged in` ;
}
console.log(loginusername(null)); //here the null is also has null value so undefinied is the way to pass no parameter


//e-commerce shoping card 
function calculateCartPrice(val1,val2, ...num1){ //rest operator also same is used for the spread operator 
    console.log(val1);
    console.log(val2);
    return num1 ;   
}

console.log(calculateCartPrice(500,600,700,800)); //passing the multiple parameter for the rest function 

let user = {
    name : "Chintu Chor",
    email : "Chintu123@gmail.com"
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.name} `)
}
//we can also pass the direct object instead of the refrecne of the object 

handleObject(user) ;

const arr = ["Aditya","Anil","Kulkarni"] ;

let ans = (arr) => {
    return arr.toString() ;
}

console.log(ans(arr));
console.log(typeof ans(arr) + " type of the ans function return value and the typeof element in the originaal array iS:  " +typeof arr[2]);


