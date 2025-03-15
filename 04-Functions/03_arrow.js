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

const test = () =>{
//     let username = "hitesh"
//     console.log(this.username) ;  //it is also giving the same error as in the above shown so work in the object only
    console.log(this.myobj)
}
let myobj = {
    username : "aditya",
    id :1234,
    age : 30
}
test()