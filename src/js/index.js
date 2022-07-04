
function myFunction(a, b) {
    return a === b
}

myFunction(2, 3); // Expected false
myFunction(3, 3); //  Expected true
myFunction(1, '1'); // Expected false
myFunction('10', '10'); // Expected true

// # **Homework2**

function myFunction2 (x, y) {
    if (x % y == 0) { 
        return x 
    }
    else {
        return myFunction2(x + 1, y)
    }
}

myFunction2(1, 23); // Expected 23
myFunction2(23, 23); // Expected 23
myFunction2(7, 3); // Expected 9
myFunction2(-5, 7); // Expected 0



