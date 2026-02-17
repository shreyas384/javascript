// 

let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// filter method
let evenNumbers = myArray.filter((num) =>{
    return num % 2 === 0;
    }
);
console.log(evenNumbers); // [2, 4, 6, 8, 10]

// map method
let squaredNumbers = myArray.map((num) => {
    return num * num;
}
);      
console.log(squaredNumbers); // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

// reduce method    
let sum = myArray.reduce((accumulator, currentValue) => {
    console.log(`Accumulator: ${accumulator}, Current Value: ${currentValue}`);
    return accumulator + currentValue;
}, 0);
console.log(sum); // 55  

