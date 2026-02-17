// for of loop
let arr = [1, 2, 3, 4, 5];

for (let num of arr) {
    console.log(num);
}   
// for in loop
let obj = {
    name: "John",
    age: 30,
    city: "New York"
};
for (let key in obj) {
    console.log(`${key}: ${obj[key]}`);
}   
 // maps
let map = new Map();
map.set("name", "John");
map.set("age", 30);
map.set("city", "New York");
for (let [key, value] of map) {
    console.log(`${key}: ${value}`);
}

//forEach loop
let arr2 = [1, 2, 3, 4, 5];
arr2.forEach(function(num) {
    // console.log(num);
}
);
 arr3 = ["sh", "re", "ya", "sh", "re", "ya", "s"];
 arr3.forEach((char, index, arr) =>
 {
    console.log(char, index, arr);

 }
)

// printMe
function printMe(num) {
    console.log(num);
}
arr2.forEach(printMe);
