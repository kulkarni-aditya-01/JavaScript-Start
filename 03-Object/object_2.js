let obj1 = [
    {
        name : "adi",
        password : "adi1123",
    },
    {
        name : "pintu",
        password: "pintu0223",
    },
    {
        name : "chintu",
        password : "chintu4934" ,
    }
]   //objects are inside the array 
console.log(obj1[1].name);

let key_array = Object.keys(obj1[0]) ;
let values_array = Object.values(obj1);

let values = Object
console.log(Object.keys(obj1[0]));  //this are making the array of he keys and then return to back 
console.log(Object.values(obj1[0])); //this is the array of the values in obj[i]
console.log(values_array);

let new_obj = {
    type : "animal" ,
    heritage_level : 1 ,
    species : "Dog"
}
//desturcturing 

const {type : new_type} = new_obj ;
console.log(new_type) ; //this is the extractor to extract the informatin from the object 

//JSON formation 
{
    "name" = "Rajasaheb" ,
    "address"= "Maharashtra",
    "age" = function (){
        console.log("My age is 20!");
    }
}



