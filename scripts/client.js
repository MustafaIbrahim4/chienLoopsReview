// chien for loops review
console.log( 'js' );
// Create a function that takes two parameters. 
// The first parameter is an array, the second parameter will be a number.
function arrayFromIndex( myArray, startingIndex ){
    console.log( 'in arrayFromIndex:', myArray, startingIndex );
    /// - full array test
    let stringToReturn = '';
    // starting at the index of the number passed in through the end of the array.
    for( let i=startingIndex; i < myArray.length; i++ ){
        // return a string that combines all of the values 
        stringToReturn += myArray[ i ] + ' ';
    } // end for
    return stringToReturn;
} // end func

// Create a function that takes in an array of employee objects.
// Each employee object will come in with a property called yearsOfExperience.
// Your function should return the total years of experience
// for all of the employees.

function totalyearsExperience( employeesArray ){
    console.log( 'in totalyearsExperience:', employeesArray );
    // create a new cariable to hold sum of all experience
    let yearsToReturn = 0;
    // loop through array
    for( let i=0; i < employeesArray.length; i++ ){
        // total all yearsOfExperience
        yearsToReturn += employeesArray[ i ].yearsOfExperience;
    } //end for
    // return totalyearsExperience
    return yearsToReturn;
} // end func

// run tests
console.log( totalyearsExperience( [
    { name: "Tony", yearsOfExperience: 10 }, 
    { name: "Carla", yearsOfExperience: 4 },
    { name: "Kris", yearsOfExperience: 14 },
    { name: "Casie", yearsOfExperience: 7000000 }
] ) );
// console.log( arrayFromIndex( [ 'asdf', 'qwer', 'zxcv', '1234' ], 2 ) );