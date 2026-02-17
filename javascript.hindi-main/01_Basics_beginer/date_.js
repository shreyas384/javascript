// dates

myDate = new Date(); // current date and time
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toTimeString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);


// let newDate1 = new Date("2023", "2", "4"); // from date string
let newDate = new Date("2025-06-05"); // from date string
let formattedDate = newDate.toLocaleDateString('default', {
    weekday: 'long',
    year: '2-digit',
    month: 'long',
    day: 'numeric'
});
console.log(formattedDate);
