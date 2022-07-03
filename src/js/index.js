// **Homework**


// Write a function that takes an array of strings as argument
// Sort the array elements alphabetically
// Return the result

function myFunction(arr) {
    return arr.sort() 
}

console.log("Sort Arr",myFunction(['b', 'c', 'd', 'a'])) // Expected [‘a)’, ‘b’, ‘c’, ‘d’]
console.log("Sort Arr",myFunction(['z', 'c', 'd', 'a', 'y', 'a', 'w'] ))// Expected [‘a’, ‘a’, ‘c’, ‘d’, ‘w’, ‘y’, ‘z’]



// Write a function that takes an array (a) and a number (b) as arguments
// Sum up all array elements with a value greater than b
// Return the sum

function myFunction2(a, b) {
    let sum = a.filter(function (number) {
        return number > b;
    })
    .reduce(function (number, curent) {
        return number + curent
    });
    
    return sum;
}

console.log(myFunction2([1, 2, 3, 4, 5, 6, 7], 2)) // Expected 25
console.log(myFunction2([-10, -11, -3, 1, -4], -3)) // Expected 1
console.log(myFunction2([78, 99, 100, 101, 401], 99)) // Expected 602

// Write a function that takes two arrays as arguments
// Merge both arrays and remove duplicate values
// Sort the merge result in ascending order
// Return the resulting array



function myFunction3(firstArr, secondArr) {
    let newArr = [...firstArr, ...secondArr]
    newArr.sort((a, b) => a - b  )

    return newArr;
}

console.log(myFunction3([1, 2, 3], [3, 4, 5])) // Expected [ 1, 2, 3, 4, 5 ]
console.log(myFunction3([-10, 22, 333, 42], [-11, 5, 22, 41, 42])) //  Expected [ -11, -10, 5, 22, 41,  42, 333]
