let user = { 
    username : "Chintu Champion",
    price : 999 ,

    WelcomeMsg : function ()    {
        // let username = name
        console.log(`${this.username}, welcome back !`),//when there is no username inside the function scope this.username refers to current context or object
        console.log(this) //refer to the current object
    },
    // info : console.log(this) 
}


user.WelcomeMsg(); //same work we are doing by the same thing just without this keyword

console.log(this," refer to the global object") //refer to thr global object

function chai(){
    // let username = "aditya"
    // console.log(this.username); //this gives the undefined so not work in the function just use inside the object only 
    // console.log(this); 
}
chai()

let myobj = {
    username : "aditya",
    id :1234,
    age : 30
}
const test = () =>{
//     let username = "hitesh"
//     console.log(this.username) ;  //it is also giving the same error as in the above shown so work in the object only
    console.log(this) //this is allowd it inherots the global objecct 
}
test() //this is giving the output as undefined because arrwo function unable to inherited the immediate outer object

let addTwoNum = (num1, num2) => (num1+num2)  //this is return int becasue the using the paranthesis 


let add = addTwoNum(3,4)
console.log(add)
