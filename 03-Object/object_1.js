let myObj = { //this is the literal object not a singleton 
    user : "Aditya Kulkarni",
    email : "aditya@gmail.com"
}
console.log(myObj.user);      //this is the one way to access the object
console.log(myObj["email"]);

let myUser = {
    name : "aditya kulkarni",
    email : "aditya@123.com" 
}
// Object.freeze(myUser);

//try to add the function 

myUser.greeting = function () {
    return {
    password : "adi123" ,
    id : "1123" ,
    }
} ;

console.log(myUser.greeting());
console.log(myUser.greeting().password);

//nesting of the object
let obj1 = {
    id : "adi",
    age : 19 ,
    fullname : {
        name : "Chintu Chor",
        address : "Manatlya gharat, vaikunth",
    },
    info : function () {
        console.log("hari Om, My name id Chintu Chor!");
    }
}

let obj2 = {
   type1 : function()  {
    console.log("Nested 1") ;
   },
   type2 : {
    id : "budbak",
    name : {
        first_name :"Chintu",
        last_name : "Chapak" ,
    }
   }
}

let obj = {...obj1, ...obj2}
console.log(obj);

