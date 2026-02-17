// lets see how for loops work

for (let num = 0; num <= 5; num++) {
    console.log(num);
}   

//break statement and continue statement

for (let num = 0; num <= 5; num++) {
    if (num === 3) {
        break; // this will exit the loop when num is 3
    }

    console.log(num);
}

for (let num = 0; num <= 5; num++) {
    if (num === 3) {
        continue; // this will skip the current iteration when num is 3
    }

    console.log(num);
}