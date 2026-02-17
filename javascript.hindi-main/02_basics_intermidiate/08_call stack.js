// // "javascript execution contex theory"

// // const { memo } = require("react")

// // 1) global execution context is created when the js engine starts executing the code. It is the default execution context. It is created for the global scope. It is created only once. It is created before any code is executed. It is created for the entire program. It is created for the global object. It is created for the this keyword.
// // 2) function execution context is created when a function is called. It is created for the function scope. It is created every time a function is called. It is created when the function is invoked. It is created for the function body. It is created for the arguments object. It is created for the this keyword.
// // 3) eval execution context is created when the eval function is called. It is created for the eval scope. It is created every time the eval function is called. It is created when the eval function is invoked. It is created for the eval body. It is created for the arguments object. It is created for the this keyword.

// // The call stack is a data structure that keeps track of the execution contexts. It is a stack data structure. It follows the Last In First Out (LIFO)

// // two phases of execution context:
// // memory creation phase also known as creation phase 
// // execution phase also known as execution phase

// // In the memory creation phase, the js engine creates the execution context and allocates memory for variables, functions, and objects. It also sets up the scope chain and the this keyword.
// // In the execution phase, the js engine executes the code line by line. It updates the values of variables and functions as it executes the code. It also updates the scope chain and the this keyword as it executes the code.

// // lets take a simple code of adding two Number

// let val = 10
// let val2 = 5

// function add(num, num2){
// let total= num+num2
// return total

// }
// let result = add(val, val2)
// let result2 = add(10, 5)
//  first we see what is done in global execution context, then we see what is done in function execution context when the add function is called.

// // global execution context:
// // 1) creation phase:
// // - val is created and assigned undefined
// // - val2 is created and assigned undefined
// // - add is created and assigned the function definition
// // - result is created and assigned undefined
// // - result2 is created and assigned undefined
// // 2) execution phase:
// // - val is assigned the value 10
// // - val2 is assigned the value 5
// // - add is assigned the function definition
// // - result is assigned the return value of add(val, val2)
// // - result2 is assigned the return value of add(10, 5) 

// // function execution context for add(val, val2):
// // 1) creation phase:
// // - num is created and assigned undefined
// // - num2 is created and assigned undefined
// // - total is created and assigned undefined
// // 2) execution phase:
// // - num is assigned the value of val (10)
// // - num2 is assigned the value of val2 (5)
// // - total is assigned the value of num + num2 (15)
// // - return total (15)

// now same thing happens for add(10, 5) function execution context:
//  in this way we can see how the call stack works and how the execution contexts are created and executed. The call stack keeps track of the execution contexts and ensures that the code is executed in the correct order. When a function is called, a new execution context is created and pushed onto the call stack. When the function returns, the execution context is popped from the call stack and the control is returned to the previous execution context.

