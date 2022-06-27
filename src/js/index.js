let User = {
    firstName: 'firstName',
    lastName: 'lastName',
    age: 18,
    email: '',
    password: 'password',
    getUserEmail(email) {
        if (email == 0) {   
            console.log('Введіть ваш email');   
        } else {
            console.log(email);
        }
    },
    userAge() {
        if (this.age < 18) {
            console.log('Вам має бути більше 18 років !')
        } else {
            console.log('Ви маєте підтвердити свої данні !')
        }
    },
    checkPassword() {
        if (this.password.length < 6) {
            console.log('Пароль має місти більше 6 знаків');
        } else {
            console.log('Все добре, можна рухатись далі ')
        }
    },

}

function GetUser(firstName, lastName, age, email, password){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.email = 'email';
    this.password = 'password';
    this.getUserEmail = function() {
        if (this.email == 0) {
            console.log('Введіть ваш email');
        } else {
            console.log(this.email);
        }
    };
    this.userAge = function () {
        if (this.age < 18) {
            console.log('Вам має бути більше 18 років !')
        } else {
            console.log('Ви маєте підтвердити свої данні !')
        }
    };
    checkPassword = function () {
        if (this.password.length < 6) {
            console.log('Пароль має місти більше 6 знаків');
        } else {
            console.log('Все добре, можна рухатись далі ')
        }
    };
}



let Sign_Up_User = User;

Sign_Up_User.userAge()
Sign_Up_User.getUserEmail('vlad.osadchiy00@gmail.com')
Sign_Up_User.checkPassword()

Sign_Up_User = {
    firstName: 'Vlad',
    lastName: 'Osadchyi',
    age: 18,
    email: 'vlad.osadchiy00@gmail.com',
    getUserEmail() { },
    userAge() { },
    checkPassword(){},
}

const ConstuctorUser = new GetUser();

ConstuctorUser.firstName = 'Vlad',
ConstuctorUser.lastName = 'Osadchyi',
ConstuctorUser.age = 18,
ConstuctorUser.email = 'vlad.osadchiy00@gmail.com',

console.log(Sign_Up_User);
console.log(ConstuctorUser);
