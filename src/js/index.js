let user = {
    firstName: 'Alex',
    lastName: 'Crypto',
    age: 18,
    email: 'alex.crypto07@gmail.com',
    password: 'Alw32ffgrx33t',
    getUserEmail() {
        if (this.email == 0) {
            return 'Введіть ваш email';
        } else {
            return this.email;
        }
    },
    userAge() {
        if (this.age < 18) {
            console.log('Вам має бути більше 18 років !');
        } else {
            console.log('Ви маєте підтвердити свої данні !')
        }
    },
    checkPassword() {
        if (this.password.length < 6) {
            return 'Пароль має місти більше 6 знаків';
        } else {
            return 'Все добре, можна рухатись далі '
        }
    }

}

const getUser = user.userAge
getUser.call(user)
