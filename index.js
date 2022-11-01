// // console.log('kenya is hard get yourself a house');
// const calcage1 = function(birthyeah){
//     return 2037 - birthyeah;
// }
// const age1 = calcage1(1991);
// console.log(age1);

// //Arrow function;

// const calcAge2 = birthyeah => 2037 - birthyeah; // we did not need the curly braces since we only have one line of codes
// const age2 = calcAge2(1991);
// console.log(age2);

// // function declaration;

// function calcage3(birthyeah){
//     return 2037 - birthyeah;
// }
// const age3 = calcage3(1991);
// console.log(age3);


//Arrow function

// const yearsUntilRetirement = birthYeah => { //we need the curly braces since we want to add more lines of codes
//         const age = 2037 - birthYeah;
//         const retirement = 65 - age; 
//         return retirement;//we have to write the return keyword explicitly since we have more then one line of code;
// }
// console.log(yearsUntilRetirement(1991));



//arrow function when we have more than one parameter

const yearsUntilRetirement = (birthYeah,firstName,secondName) => { // we wrap the parameters inside the brackets   
    const age = 2037 - birthYeah;
    const retirement = 65 - age; 
    // return retirement;
    return `${firstName} ${secondName} retires in ${retirement} years`
}
console.log(yearsUntilRetirement(1991,'mwenda','ben'));
console.log(yearsUntilRetirement(1999,'Tokiti','sharon'));
console.log(yearsUntilRetirement(2020,'kariuki' ,'milan'));
