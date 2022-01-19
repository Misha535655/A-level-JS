

// function bindFunc() {
//     this.name = 'anonim'
// }
// args = {
//     func : () => {`this function ${this.name}`},
//     name : 'bindFunc'
// }
// bindFunc.bind(args);
// bindFunc()
// console.log(args);







// const func = function() {
//     let arr = []
//     let sum = 0
//     for (const key in this) {
//         this[key] > 0 ? arr.push(this[key]) : console.log('1');
//     } 
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i]
        
//     }
//     console.log(sum);
// }
//    const objectA = {
//     a: 1,
//     b: 2,
//     c: 3,
//    }
//    let funcBind = func.bind(objectA)
//    funcBind()




// function getNewArray() {
//     let arr = this.values;
//     let arrNum = [];
//     let arr3 = [];
//     for (let i = 0; i < arr.length; i++) {
//         typeof(arr[i]) == 'number' ? arrNum.push(arr[i]) : console.log();
//     }
//     arrNum.map((j) => {
//         debugger
//         j < 10 && j > 2 && !(j % 2) ?  arr3.push(j) : console.log();
//     })
//     console.log(arrNum);
//     console.log(arr3);
//    };
// const valObject0 = {
//  values: [1, '2', 4, 8, '8',  3, 10, null, false],
// };
// let funcBind = getNewArray.bind(valObject0);
// funcBind()


let user = {
    birthdayDate: new Date("2000-10-03")
    }
    
//     console.log("birthdayDate.toLocalString=>",user.birthdayDate.toLocaleString());
    
//     function whenlateBirthday(){
//     let now = new Date();
//     let lateBirthday = user.birthdayDate;
    
//     if(now.getMonth()>user.birthdayDate.getMonth()|| (now.getMonth()===user.birthdayDate.getMonth() && now.getDate()>user.birthdayDate.getDate())){	
//       lateBirthday.setFullYear(now.getFullYear())
//     }else{
//       lateBirthday.setFullYear(now.getFullYear()-1)
//     }
//     console.log("whenlateBirthday",(now-lateBirthday)/(1000*60*60*24))
//     }
//     whenlateBirthday()


let whenYoulive = () => {
    let birthday = user.birthdayDate;
    let now = new Date();
    let milliseconds = (now - birthday);
    let second = Math.floor((now - birthday)/(1000));
    let minutes =  Math.floor((now - birthday)/(1000 * 60));
    let hours = Math.floor((now - birthday)/(1000 * 60 * 60));
    let day = Math.floor((now - birthday)/(1000 * 60 * 60 * 24));
    let month = Math.floor((now - birthday)/(1000 * 60 * 60 * 24 * 30))
    let year = (now.getFullYear() - birthday.getFullYear());


    console.log(`Вы прожили ${year} лет ${month} месяцев ${day} дней ${hours} часов ${minutes} минут ${second} секунд ${milliseconds} милисекунд`); 
}
whenYoulive()
