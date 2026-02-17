// block scope and global scope

let a = 10; // global scope

if (true) {
    let b = 20;// block scope
    console.log(a); // 10
    console.log(b); // 20
}


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 
                                                       // important about var keyword                                                   


if (true) {

    let x = 30;
    var y = 40;
   
}

console.log(x); // ReferenceError: x is not defined
console.log(y); // 40
// y is accessible here because var is function-scoped or globally-scoped, not block-scoped.

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// talking about one function inside another function

function outerFunction() {
    let outerVar = 'I am from outer function';

    function innerFunction() {
        let innerVar = 'I am from inner function';
        console.log(outerVar); // I am from outer function
        
    }

     console.log(innerVar); // ReferenceError: innerVar is not defined
    innerFunction();
}
outerFunction();


                                             //tip notes:
// now here innerFunction can access outerVar but outerFunction cannot access innerVar.
// its just like elders can not asking icecream from youger ones but youger ones can ask from elders.


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// case one: function declaration
addone(5); // 6
 function addone (num) {
    return num +1;
    }


    // case two: function declaration
addtwo(5); // ReferenceError: addtwo is not defined
const addition = function addtwo (num) {
    return num +2;
    }


    // here function declaration is hoisted but function expression is not hoisted.
// we canot call function expression before its defined.
// its depend on how we define function.

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
