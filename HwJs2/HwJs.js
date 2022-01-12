let str = 'Вася;Петя;Вова;Олег';
let arrStr = str.split(';');
let name = 'Ivan';
console.log(arrStr);
function hellow2(name) {
    name == undefined ? console.log('Привет гость') : console.log(`Привет ${name}`);
}
hellow2();
hellow2(name);

function addOneForAll(...numbers) {
  for (let added of numbers) {
        console.log(numbers[added]+1);
  }
}

let val = addOneForAll(1,2,3,4,1)
console.log(val);

while(true){
    let random = Math.random();
    let calc = 0
    if(random > 0.9){
        ++calc
    }else
    {
        alert(`Число: ${random} Итераций: ${calc}`);
        break;
    } 

}
let arr = [];
let elem = 12;
for (let i = 0; i < elem; i++) {

    arr.push(i*i*i)

    
}
console.log(arr);


let NoFiltr = [1, 'hello', 2, 3, 4, '5', '6', 7, null];

for (const value of NoFiltr) {
    debugger;
    if(!Number(NoFiltr[value])){
        NoFiltr.splice(value,1)
    }
}
console.log(NoFiltr);