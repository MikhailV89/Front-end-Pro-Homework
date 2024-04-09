'use strict';
(function () {
    const user = {
        name: 'Mike',
        surname: 'Vasilchenko',

        get fullName() {
            console.log(`${this.name} ${this.surname}`);
        },

        set fullName(value) {
            this.name = value.split(' ')[0];
            this.surname = value.split(' ')[1];
        }

    }

    Object.defineProperty(user, 'name', {
        writable: false
    });

    Object.defineProperty(user, 'age', {
        value: 34,
        enumerable: false,
        writable: true,
        configurable: true
    });

    console.log(Object.keys(user));

    for (let key in user) {
        console.log(key)
    }

    user.fullName;
    user.fullName = 'M Vas';
    user.fullName;


    // Part №2

    const user2 = {
        name: 'Mike',
        age: 34
    }

     Object.freeze(user2);

    Object.defineProperty(user2, 'surname', {
        value: 'Vasilchenko',
        writable: true,
        configurable: true,
        enumerable: true,
    });   // Result - Cannot define property surname, object is not extensible

}());