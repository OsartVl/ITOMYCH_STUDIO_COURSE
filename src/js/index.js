let Tiger = {
    furСolor: "white",
    weight: 250,
    age: 3,
    name: "Lion",
    type: "Chordates",
    speed: 80,
    bio() {
        alert(`${this.name} наледить до типу ${this.type}, вид хижих ссавців з роду пантер родини котових ! Це другий за величиною вид родини після тигра. `);
    },
    run() {
        alert(`${this.name} може бігти з максимальною швидкістю ${this.speed} км ! `);
    },
    maxWeight() {
        alert(`${this.name} максимальна вага складає ${this.weight} кг `)
    }

}

console.log(Tiger.run())
console.log(Tiger.bio())
console.log(Tiger.maxWeight())


