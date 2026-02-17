// lets learm about truthy and falsy values in javascript
// in javascript, a value is considered truthy if it evaluates to true in a boolean context, and falsy if it evaluates to false. The following values are considered falsy in javascript: false, 0, -0, 0n, "", null, undefined, and NaN. All other values are considered truthy.
// for example, if we have an if statement that checks if a variable is truthy or falsy, we can use the following code:
let value = 0   
if(value){
    console.log("The value is truthy")
}   
else{
    console.log("The value is falsy")
}
// in this example, the value of the variable is 0, which is a falsy value. Therefore, the code inside the else block will be executed, and the output will be "The value is falsy". If we change the value of the variable to a truthy value, such as 1 or "hello", then the code inside the if block will be executed, and the output will be "The value is truthy".

// falsy values
// 1. false
// 2. 0
// 3. -0
// 4. BigInt 0n
// 5. ""
// 6. null
// 7. undefined
// 8. NaN

// truthy values
//" "
//[]
// {}
// function(){}
//"0"
// "false" or 'false'

//how to check empty array or empty object in javascript
let arr = []
if(arr.length === 0){
    console.log("The array is empty")   
}
else{
    console.log("The array is not empty")
}

let obj = {}
if(Object.keys(obj).length === 0){
    console.log("The object is empty")      
}
else{
    console.log("The object is not empty")
}

// nullish coalescing operator (??) is a logical operator that returns the right-hand side operand when the left-hand side operand is null or undefined, and otherwise returns the left-hand side operand. It is often used to provide a default value for a variable that may be null or undefined. For example:
let name = null
let defaultName = "Guest"
let finalName = name ?? defaultName
console.log(finalName) // Output: "Guest"
// in this example, the variable name is null, so the nullish coalescing operator returns the value of defaultName, which is "Guest". If we change the value of name to a non-null and non-undefined value, such as "Shreyas", then the nullish coalescing operator will return the value of name, which is "Shreyas".

// ternary operator is a conditional operator that takes three operands: a condition, a value to return if the condition is true, and a value to return if the condition is false. It is often used as a shorthand for an if-else statement. For example:
let age = 18
 age >= 18 ? console.log("You are an adult") : console.log("You are a minor")

// in this example, the condition is age >= 18. If the condition is true, the ternary operator returns "You are an adult". If the condition is false, it returns "You are a minor". The result is stored in the variable message, which is then printed to the console.
