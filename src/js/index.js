function User(firstName, lastName, age, email, password) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
        this.password = password;
        getUserEmail = function() {
            if (this.email == 0) {
             return 'Введіть ваш email';
            } else {
                return this.email;
            }
        }
        userAge = function() {
            if (this.age < 18) {
                return 'Вам має бути більше 18 років !'
            } else {
                return 'Ви маєте підтвердити свої данні !'
            }
        }
        checkPassword = function() {
            if (this.password.length < 6) {
                return 'Пароль має місти більше 6 знаків';
            } else {
                return 'Все добре, можна рухатись далі '
            }
        };

}

let Sign_Up_User = new User();

Sign_Up_User = {
    firstName: 'Vlad',
    lastName: 'Osadchyi',
    age: 18,
    email: 'vlad.osadchiy00@gmail.com',
    getUserEmail(){}, 
}

console.log(User.getUserEmail());