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
// run tests
console.log( arrayFromIndex( [ 'asdf', 'qwer', 'zxcv', '1234' ], 2 ) );