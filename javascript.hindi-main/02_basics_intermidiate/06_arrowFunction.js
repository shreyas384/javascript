// arrowFunction in JavaScript

// THIS keyword in arrow functions

const person = {
    name: 'Alice',
    greet: function() {
         console.log(`hello my name is ${this.name}`);
        // console.log(this);// here THIS refers to the person object

    }
};
person.greet();

console.log(this);

// here THIS refers to the global object (window in browsers, global in Node.js)
// THIS only works under objects when we use regular functions

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// now using arrow function


const person2 = () => {
 let name = 'Bob';
 console.log(this);
    // here THIS does not refer to the person2 object

};
person2(); 

// why this happens?
// because arrow functions do not have their own THIS context
// instead, they inherit THIS from the surrounding lexical context
// in this case, the surrounding context is the global scope
// so THIS refers to the global object

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//pure disscussion about arrow functions
// arrow function

const addArrow = (a, b) => {
    return a + b;
}   
console.log(addArrow(2, 3)); // 5

//implicit return
const multiplyArrow = (a, b) => (a * b);
console.log(multiplyArrow(2, 3)); // 6

//lets try returining object

const createPerson = (name, age) => ({ name: "shreyas pawade", age: 21}); // we need to wrap the object in parentheses to avoid syntax error
console.log(createPerson()); 

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

