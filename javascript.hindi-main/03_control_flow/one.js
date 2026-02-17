// now let is how the control flow works in JavaScript. Control flow is the order in which the code is executed. It is determined by the structure of the code and the statements used in the code. The control flow can be linear, conditional, or iterative.
// if statement
// let age = 18
// if(age >= 18){
//     console.log("You are an adult")
// }
// // if-else statement
// let age2 = 17   
// if(age2 >= 18){
//     console.log("You are an adult")
// }
// else{
//     console.log("You are a minor")
// }   
// how scope works in if-else statement
let age3 = 10
if(age3 >= 18){
    let message = "You are an adult"       
    console.log(message)
} 
else{
   let message = "You are a minor"
    console.log(message)
}
// here var works differently than let and const. var is function scoped, while let and const are block scoped. This means that if you declare a variable with var inside a block, it will be accessible outside the block as well. However, if you declare a variable with let or const inside a block, it will not be accessible outside the block.

// nested if statement
let age4 = 25   
if(age4 >= 18){
    if(age4 >= 21){
        console.log("You are an adult and can drink alcohol")

    }
    else if(age4 >= 18 && age4 < 21)        
        {
        console.log("You are an adult but cannot drink alcohol")
    }   else {
        console.log("You are a minor")
    }   
} 


