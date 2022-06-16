import '../styles/main.css';


console.log(`Варіант 1`);

let Multiples3 = [];

for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 ) {
        Multiples3.push(i);
    }
}
console.log("Числа кратні 3", Multiples3);

let Multiples5 = [];
for (let i = 1; i <= 100; i++) {
    if (i % 5 == 0  ) {
        Multiples5.push(i);
    }
}
console.log("Числа кратні 5", Multiples5);

let Multiples15 = [];
for (let i = 1; i <= 100; i++) {
    if (i % 15 == 0 ) {
        Multiples15.push(i);
    }
}
console.log("Числа кратні 5", Multiples15);


// 2 Варіант

function Multiples(items, multiples) {
    let array = [];
    for (let i = 1; i <= items; i++) {
        if (i % multiples == 0 ) {
            array.push(i);
        }
    }
    console.log(`Числа кратні`, String(multiples), array)
}

console.log(`Варіант 2`);

Multiples(100, 3);
Multiples(100, 5);
Multiples(100, 15);

