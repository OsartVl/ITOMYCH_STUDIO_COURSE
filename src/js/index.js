// ***Homework**

// Напишите функция, которая принимает в качестве аргументов 2 объекта и проверяет, является ли первый аргумент прототипом второго

const obj1 = {

a: 2

}

const obj2 = {

a: 2 

}

const obj3 = Object.create(obj1)

function Foo(a, b) {
    
    return a.isPrototypeOf(b)

}

console.log(Foo(obj1, obj2)) // false;

console.log(Foo(obj3, obj1)) // false;

console.log(Foo(obj1, obj3)) // true;