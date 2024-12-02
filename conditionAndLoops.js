for(let i=1; i<=10; i++){
    // console.log("i", i)
    // if(i == 5){
        // continue;
    // }
	console.log(`2 * ${i} = ${2 * i}`)
}


// iteration      i       output
// 1             1        2
// 2             2        4
// 3             3        6


// 9             9        18
// 10           10        20
// 11           11

// let i = 1
// while(i<=10){
//     console.log(`2 * ${i} = ${2*i}`)

//     i++;
// }
// console.log("i after while",i)
// i = 1
// do{
//     console.log(`DOWHILE 2 * ${i} = ${2*i}`)
//     i++;
// }while(i<=10)

// marks = Number(prompt("Enter your marks"))
// if(marks < 35){
//     console.log("Fail")
// }else if(marks >=35 && marks <= 60){
//     console.log("Pass ")
// }else if(marks > 60 && marks <= 75){
//     console.log("First Class")
// }else{
//     console.log("First CLass With Disti")
// }

// today =new Date();
// day = today.getDay();
// console.log(day)
// day1 = "sfgh567gh"
// switch(day1){
//     case "Monday":
//         console.log("working day");
//         break;
//     case "Tue":
//         console.log("working day");
//         break;
//     case "Wed":
//         console.log("working day");
//         break;
//     case "sat":
//         console.log("Holiday");
//         break;
//     case "sun":
//         console.log("Holiday")
//         break;

//     // case 3:
//     //     console.log("Today its wed")
//     //     break;
//     default:
//         console.log('This is default check')
// }


n = 3;
// 3 * 2 * 1 for(i=n; i<=n; i--)
// 1 * 2 * 3

// factorial = i * i+1 * i+1
factorial = 1;   
if(n=== 0 || n === 1){
    factorial = 1;
}else{      
for(i=1; i<=n; i++){
    // factorial *= i 
    factorial = factorial * i
}
}
console.log(`factorial of ${n} is ${factorial}`)
// ite    n     i     fac    
//         3    1      1  fac * i
// 1st     3    1          1  *  1  = 1
// 2nd     3    2          1  *  2  = 2
// 3rd     3    3          2  *  3  = 6
// 4th     5    4          6  * 4   = 24
// 5th     5    5          24 *  5  = 120
// 6th     5    6   


for(i=n; i>=1; i--){
    factorial = factorial * i
}