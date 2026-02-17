// lets uderstand switch statement in javascript
// switch statement is used to perform different actions based on different conditions. It is a more efficient way to compare a variable with multiple values than using multiple if-else statements. The switch statement evaluates an expression and matches the expression's value to a case label. If a match is found, the code associated with that case is executed. If no match is found, the code associated with the default case is executed.

let day = ("enter a day of the week")
switch(day){
    case "Monday":
        console.log("Today is Monday")
        break   
    case "Tuesday":
        console.log("Today is Tuesday")
        break   
    case "Wednesday":
        console.log("Today is Wednesday")
        break                           
    case "Thursday":
        console.log("Today is Thursday")
        break   
    case "Friday":
        console.log("Today is Friday")
        break
    case "Saturday":
        console.log("Today is Saturday")
        break   
    case "Sunday":
        console.log("Today is Sunday")
        break
    default:
        console.log("Invalid day")
}

// now here as the the case is matched with the value of the variable day, the code associated with that case is executed. If the value of day does not match any of the cases, the code associated with the default case is executed. The break statement is used to exit the switch statement after a case is executed. If the break statement is not used, the code will continue to execute the next case until a break statement is encountered or the end of the switch statement is reached.
// now if we do not add break statement after each case, the code will continue to execute the next case until a break statement is encountered or the end of the switch statement is reached. This is called fall-through behavior. For example, if we remove the break statement from the case "Monday", and the value of day is "Monday", then the code for case "Monday" will be executed, and then the code for case "Tuesday" will also be executed, and so on until a break statement is encountered or the end of the switch statement is reached.
// default case is optional, but it is a good practice to include it to handle any unexpected values. The default case will be executed if none of the cases match the value of the variable being evaluated.
