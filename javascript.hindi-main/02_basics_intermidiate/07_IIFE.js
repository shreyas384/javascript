// immediately invoked function expression (IIFE)
// so to avoid polluting global scope we use IIFE

(
function(message) {

    console.log("Hello, I am an IIFE!");
}
)();

//arrow function version of IIFE
((message)=>{console.log(message);
})("Hello from arrow function IIFE");

// here iife can create obstacles for debugging if the function is not ended properly with semicolon

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//named IIFE
(function cahi() {
    console.log("Hello from named IIFE");
})();
// here cahi is the name of the function but it is not accessible outside the IIFE

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//how to add two iifes
(
function(){
    console.log("First IIFE");
}
)();
(function(){
    console.log("Second IIFE");
}
)();    
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
