//singleton object
// Object.create(person);



// objects literals 
const person = {
    name: 'John',
    age: 30,
    city: 'New York',
    "Full name": "John Doe",
    email: "shreyaspawade@google.com",
    Lastlogging: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
};

// // accessing object properties
// console.log(person.name); // John
// // or
// console.log(person["Full name"]); // John

// // symbols as keys
// const id = Symbol('id');
// const user = {
//     [id]: 123,
// }
// console.log(user[id]); // 123

person.greeting = function() {
    console.log(`Hello, my name is ${this.name}`);
}
console.log(person.greeting());
