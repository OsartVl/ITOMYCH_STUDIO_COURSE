let Lion = {
    weight: 250,
    age: 3,
    name: "",
    type: "",
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

let newTiger = Lion;

newTiger.weight = 300;
newTiger.name = 'Lion';
newTiger.age = 15;
newTiger.type = "Chordates";
newTiger.speed = 90;
newTiger.bio();
newTiger.run();
newTiger.maxWeight();

function LionFunction(weight, name, age, type, speed ) {
    this.weight = weight;
    this.weight = name;
    this.age = age;
    this.type = type;
    this.speed = speed;
    function bio(){
        alert(`${this.name} наледить до типу ${this.type}, вид хижих ссавців з роду пантер родини котових ! Це другий за величиною вид родини після тигра. `);
    };
    function run() {
        alert(`${this.name} може бігти з максимальною швидкістю ${this.speed} км ! `);
    };
    function maxWeight() {
        alert(`${this.name} максимальна вага складає ${this.weight} кг `)
    };
}

const LionConstructor = new LionFunction(250, "Lion 2",20, "Chordates", 85);
console.log(LionConstructor);
