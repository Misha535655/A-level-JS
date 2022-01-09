console.log('TASK2');
console.log(typeof 9);
console.log(typeof NaN);
console.log(typeof undefined);
console.log(typeof Infinity);
console.log(typeof 'string');
console.log(typeof true);
console.log(typeof { obj: 'obj' });
console.log(typeof null);
console.log(typeof (() => { }));
console.log('TASK3');
var name = 'asd';
console.log(typeof name);
if (typeof name === 'string') {
    console.log('Привет', name);
}
else {
    console.log('Ошибка, не тот тип данных');
}

console.log('Task4');

(typeof name === 'string') ? console.log('Привет', name) : console.log('Ошибка, не тот тип данных');

console.log('Task5');

var n = 6;
var fDayOff = true;

switch (n) {
    case 1:
        console.log(!fDayOff);
        break;
    case 2:
        console.log(!fDayOff);
        break;
    case 3:
        console.log(!fDayOff);
        break;
    case 4:
        console.log(!fDayOff);
        break;
    case 5:
        console.log(!fDayOff);
        break;
    case 6:
        console.log(fDayOff);
        break;
    case 7:
        console.log(fDayOff);
        break;
}