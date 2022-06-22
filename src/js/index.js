//  1 Варіант
console.log(`Варіант 1`);
function Multiples(items, multiples) {
    let array = [];
    for (let i = 1; i <= items; i++) {
        if (i % multiples == 0 ) {
            array.push(i);
        }
    }
    console.log(`Числа кратні`, String(multiples), array);
}

Multiples(100, 3);
Multiples(100, 5);
Multiples(100, 15);

// 2 Варіант

console.log(`Варіант 2`);


for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 ) {
        console.log("Числа кратні 3",  i);
        
    }
    if (i % 5 == 0) {
        console.log("Числа кратні 5", i);
    }
    if (i % 15 == 0) {
        console.log("Числа кратні 15", i);
    }
}