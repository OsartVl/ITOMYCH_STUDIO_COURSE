class Animal {
    constructor(weight, name, age, type, speed ) {
        this._name = name;
        this._weight = weight;
        this._age = age;
        this._type = type;
        this._speed = speed;
  }
  
    bio() {
        `${this._name} наледить до типу ${this._type}, вид хижих ссавців з роду пантер родини котових ! Це другий за величиною вид родини після тигра. `;
    };
    run() {
        `${this._name} може бігти з максимальною швидкістю ${this._speed} км ! `;
    };
    maxWeight() {
        `${this._name} максимальна вага складає ${this._weight} кг `
    };


}

const Lion = new Animal(250, "Lion 2", 20, "Chordates", 85);
console.log(Lion.get());
console.log(Lion);

