// n = parseInt(prompt("Enter a number"))

// if(n<0){
//     console.log("number is negetive")
// }else if(n>0){
//     console.log("number is positive")
// }else{
//     console.log("entered number is zero")
// }

// let systemGEnerateNumber = Math.floor(Math.random() * 10) + 1;
//   console.log(systemGEnerateNumber);

// while (true) {
//   let userNumber = parseInt(prompt("Enter a number"));
//   console.log(userNumber)
//   if (userNumber == systemGEnerateNumber) {
//     console.log("Correct! You guessed the number.");
//     break;
//   } else if (userNumber < systemGEnerateNumber) {
//     console.log("Too low! Try again.");
//   } else {
//     console.log("Too high! Try again.");
//   }
// }
// console.log('hello')

// do{
//     userNumber = parseInt(prompt("Enter a number"));
//     console.log(userNumber)
//     if (userNumber < systemGEnerateNumber) {
//         console.log("Too low! Try again.");
//       } else if (userNumber > systemGEnerateNumber){
//         console.log("Too high! Try again.");
//       }
// }while(userNumber !== systemGEnerateNumber)
// console.log("Correct! You guessed the number.");

// for (let i = 1; i <= 20; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }


// let num = parseInt(prompt("Enter a number:"));
// let sum = 0;
// while (num > 0) {
//     sum += num % 10;
//     num = (num - (num % 10)) / 10; 
// }
// console.log("Sum of digits: " + sum);

for(let i= 1; i<=15; i++){
    if(i%3==0 && i%5==0){
        console.log("FizzBuzz")
    }else if(i%3==0){
        console.log("Fizz")
    }else if(i%5 == 0){
        console.log("Buzz")
    }else{
        console.log(i)
    }
}

let rows = 5;
for (let i = 1; i <= rows; i++) {
    let stars = "";
    for (let j = 1; j <= i; j++) {
        stars += " * ";
    }
    console.log(stars);
}
