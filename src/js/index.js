// Write a function that takes two values, say a and b, as arguments

// Return true if the two values are equal and of the same type

function myFunction(a, b) {

    if ( a === b && a == b) {
        console.log(true);
    } else { console.log(false); }
    
    return
    }
    
myFunction(2, 3); // Expected false
    
myFunction(3, 3); //  Expected true
    
myFunction(1, '1'); // Expected false

myFunction('10', '10'); // Expected true

// # **Homework2**

// Write a function that takes two numbers, say x and y, as arguments

// Check if x is divisible by y

// If yes, return x

// If not, return the next higher natural number that is divisible by y

function myFunction2 (x, y) {
    if (x % y == 0) { 
        console.log(x);
    }
    else if (x % y != 0) {
        return x + myFunction2(x + 1, y);
    }
return

}

myFunction2(1, 23); // Expected 23

myFunction2(23, 23); // Expected 23

myFunction2(7, 3); // Expected 9

myFunction2(-5, 7); // Expected 0