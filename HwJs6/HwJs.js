let table = document.getElementById('table');
for (let i = 1; i < 10; i++) {
    let tr = document.createElement('div');
    tr.className = 'tr';
    table.appendChild(tr);

    for (let j = 1; j < 10; j++) {
        let td = document.createElement('div');
        td.className = 'td';
        tr.appendChild(td);
        td.innerText = ` ${i*j}`;
    }

}







// Array.prototype.getUnique = function() {
//     let result = [];
//     for (const num of arr) {
//         if (!result.includes(num)) {
//             result.push(num);
//         }
//     }
//     return result;
// };
// const arr = [1, 1, 2, 2, 3, 123123, 1231231, 132, 1, 1, 1, 1, 1, 1, 1, 1];
// const newArr = arr.getUnique();
// console.log(newArr);


// let count2 = 0
// function counter(count) {
//     return function() {
//         return count2 = count + count2;
//     }();
// }
// console.log(counter(10));
// console.log(counter(10));
// console.log(counter(10));

// class Calculator {
//     constructor() {
//         this.a;
//         this.b;
//         this.c;
//     };
//     setAction() {
//         this.c = prompt('enter plus, minus, divide, multiply');
//         console.log(this);
//     }
//     read() {
//         this.a = prompt('enter first number');
//         this.b = prompt('enter second number');
//     }
//     doAction() {
//         switch (this.c) {
//             case '+':
//                 return +this.a + +this.b;
//             case '-':
//                 return +this.a - +this.b
//             case '/':
//                 return +this.a / +this.b
//             case '*':
//                 return +this.a * +this.b
//             default:
//                 break;
//         }
//     }

// }
// let calc = new Calculator();
// calc.read();
// calc.setAction();
// let result = calc.doAction();
// console.log(result);