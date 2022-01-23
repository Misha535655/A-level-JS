const studentArr = [{
        name: 'Сергей',
        surname: 'Войлов',
        ratingPoint: 1000,
        schoolPoint: 1000,
        course: 2,
    },
    {
        name: 'Татьяна',
        surname: 'Коваленко',
        ratingPoint: 880,
        schoolPoint: 700,
        course: 1,
    },
    {
        name: 'Анна',
        surname: 'Кугир',
        ratingPoint: 1430,
        schoolPoint: 1200,
        course: 3,
    },
    {
        name: 'Станислав',
        surname: 'Щелоков',
        ratingPoint: 1130,
        schoolPoint: 1060,
        course: 2,
    },
    {
        name: 'Татьяна',
        surname: 'Капустник',
        ratingPoint: 650,
        schoolPoint: 500,
        course: 3,
    },
    {
        name: 'Максим',
        surname: 'Меженский',
        ratingPoint: 990,
        schoolPoint: 1100,
        course: 1,
    },
    {
        name: 'Денис',
        surname: 'Марченко',
        ratingPoint: 570,
        schoolPoint: 1300,
        course: 4,
    },
    {
        name: 'Антон',
        surname: 'Завадский',
        ratingPoint: 1090,
        schoolPoint: 1010,
        course: 3
    },
    {
        name: 'Игорь',
        surname: 'Куштым',
        ratingPoint: 870,
        schoolPoint: 790,
        course: 1,
    },
    {
        name: 'Инна',
        surname: 'Скакунова',
        ratingPoint: 1560,
        schoolPoint: 200,
        course: 2,
    },
    {
        name: 'Денис',
        surname: 'Хрущ',
        ratingPoint: 1000,
        schoolPoint: 990,
        course: 4,
    },
];

// class Student {
//     constructor(enrolle) {
//         this.arr = enrolle;
//         this.isSelfPay = { isSelfPay: false }
//     };


//     isSelfPayment() {
//         this.arr.sort((a, b) => a.ratingPoint > b.ratingPoint ? -1 : 1)
//         debugger
//         for (let i = 0; i < this.arr.length; i++) {
//             Object.assign(this.arr[i], this.isSelfPay)
//             i <= 4 ? this.arr[i].isSelfPay = true : this.arr[i].isSelfPay = false
//         }


//         console.log(this.arr);
//     }
// }




// let student = new Student(studentArr);
// student.isSelfPayment();


// class CustomString {
//     constructor(string) {
//         this.string = string
//     }
//     reverse(string) {
//         console.log(string.split('').reverse().join(''))
//     }
//     ucFirst(string) {
//         console.log(string.charAt(0).toUpperCase() + string.slice(1));
//     }
//     ucWords(string) {
//         let split = string.toLowerCase().split(' ')
//         for (let i = 0; i < split.length; i++) {
//             split[i] = split[i].charAt(0).toUpperCase() + split[i].substring(1)
//         }
//         console.log(split.join(' '));
//     }
// }
// const myString = new CustomString();
// myString.reverse('qwerty')
// myString.ucFirst('qwerty')
// myString.ucWords('qwerty qwerty qwerty')


class Validator {
    constructor() {}
    checkIsEmail(email) {
        console.log(email.includes('@'))
    }
    checkIsDomain(domain) {
        console.log(domain.includes('.'))
    }
    checkIsPhone(Phone) {
        console.log(Phone.includes('+38'))
    }
}
let validator = new Validator();
validator.checkIsEmail('vasya.pupkin@gmail.com');
validator.checkIsDomain('https://google.com');
validator.checkIsPhone('+38 (066) 937-99-92');