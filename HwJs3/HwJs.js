let Task1 = () => {
    let number = prompt('enter number');
    let arr = []
    let sum = 0
    debugger;
    for (let i = 0; i < number; i++) {
        arr.push((i+1) ** 2);
    }
    for (let j = 0; j < arr.length; j++) {
        sum += arr[j]
    }
    console.log(sum);
}
let Task2 = () => {
    let a = +prompt('enter number 1')
    let b = +prompt('enter number 1')
    let sum = (a + b) / 2
    console.log(sum);
}
let objName = {
    'name' : 'misha'
};
let Task4 = ( obj, key, value) => {
        !obj[key] ? obj[key] = value : console.log('Уже есть'); 
    console.log(obj);
}
let Task5 = () => {
    while(true){
        if(confirm()){break;}
    }
}
let Task6 = () => {
 let arr = [1,22,3,4,5,6,111, -43, -44, -50];
 let sum = 0
 let minus =  arr.filter(negative => negative >= 0)

 console.log(arr.sort((a, b) => b - a));
 console.log(minus);
 for (let i = 0; i < arr.length; i++) {
    sum += arr[i]; 
    typeof(arr[i]) == 'number' ? arr[i]+=10 : console.log('string');

}
console.log(sum);
 console.log(arr);
}
let Task7 = () => {
    let dateNow = new Date();
    let birthday = new Date(2000, 9, 3)
    debugger;
    let wait = dateNow - birthday;
    console.log(wait);
}
Task7()
// Task6();
// Task5()
// Task4(objName, prompt('enter key in obj'), prompt('enter value to obj'))
//Task2()
//Task1()