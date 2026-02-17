function nameOfuser(user) {
    if (user === undefined) {
        console.log("please enter a userName");
        return; 
    };

    return `welcome ${user} you just logged in.`;

}
console.log(nameOfuser("shreyas pawade")); // Output: welcome Alice you just logged in.

// Object example
myobject = {
    name: "shreyas",
    age: 20,
    city: "pune"
}


function displayingobject(obj) {
    return `name is ${obj.name}, age is ${obj.age} and city is ${obj.city}`;
}

console.log(displayingobject(myobject));

// array example

myarry = [1, 2, 3, 4, 5];

function displayingarray(arr) {
    return `first element is ${arr[0]}, second element is ${arr[1]} and third element is ${arr[2]}`;
}
console.log(displayingarray(myarry));


// rest operator

function small(...numbers) {
    
    return numbers;
}
console.log(small(100, 101, 102));
