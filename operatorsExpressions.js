 x = 5;
 x+=3     //x = x+3
 x++      //x = x+1
 x-=3     // x = x-3
 x--      //x = x-1


 num1 = 10;
 num2 = 5;
 console.log("addition :" , num1+num2);
 console.log("Subtraction :", num1-num2);
 console.log("Multipliction : " + num1*num2);
 console.log(`Division :  ${num1/num2}`);
 console.log("Modulus :", num1%num2);
 console.log(num1**3);

 console.log(num1>num2)
 console.log(num1<num2)
 console.log(num1 === num2); 
 console.log(num1 !== num2)
 

RamAge = 15;
RameshAge = 30;
isBhartiya = true;

if(RameshAge > 18 && isBhartiya){
    console.log("Can Vote")
}else{
    console.log("can not vote")
}

// testnumber = prompt("for testing")
// firstNumber = Number(prompt("Enter First number "))
// secondNumber = parseInt(prompt("Enter second number"))
// console.log("first number" , firstNumber)
// console.log("Second number", secondNumber)
// console.log("test neumber datatype", typeof(testnumber), "firstNumber :", typeof(firstNumber))
// console.log("addition :" , firstNumber+secondNumber);
//  console.log("Subtraction :", firstNumber-secondNumber);
//  console.log("Multipliction : " + firstNumber*secondNumber);
//  console.log(`Division :  ${firstNumber/secondNumber}`);
//  console.log("Modulus :", firstNumber%secondNumber);

// console.log("Is first number greater than second?", firstNumber>secondNumber)
// console.log("Is first number less than second?", firstNumber<secondNumber)
// console.log("Are the two numbers equal?", firstNumber==secondNumber)

// math = Number(prompt('Enter math score'))
// science = Number(prompt('Enter science score'))
// if(math >= 90 && science >= 85){
//     console.log("Scholarship Eligibility: true")
// }else{
//     console.log("Scholarship Eligibility: flase")
// }

x = 10
console.log("Initial value of x:", x ) 
console.log("After adding 5:", x+=5 )
console.log("After multiplying by 3:", x*=3 )
console.log("After subtracting 10:", x-=10 )
console.log("After dividing by 2:", x/=2 ) 
console.log("Modulus with 3:" , x%=3 )

// length = Number(prompt("Enter length"))
// width = Number(prompt("Enter width"))
// console.log("Enter length:",length)
// console.log("Enter width:", width)
// perimeter = 2 * (length + width);
// console.log("Perimeter:" , perimeter)
// area =  length * width
// console.log("Area: ", area)
// console.log("Is perimeter greater than area?" , perimeter > area)

// let age = parseInt(prompt("Enter age: "));
// let isCitizen = prompt("Are you a citizen (true/false)?") === "true";

// let canVote = (age >= 18) && isCitizen;
// console.log("Eligible to vote:", canVote);


let weight = parseFloat(prompt("Enter weight (kg): "));
let height = parseFloat(prompt("Enter height (m): "));

let bmi = weight / (height * height);
console.log("BMI:", bmi);

if (bmi < 18.5) {
  console.log("Category: Underweight");
} else if (bmi >= 18.5 && bmi < 24.9) {
  console.log("Category: Normal weight");
} else if (bmi >= 25 && bmi < 29.9) {
  console.log("Category: Overweight");
} else {
  console.log("Category: Obesity");
}

let num = parseInt(prompt("Enter a number: "));

if (num % 2 === 0) {
  console.log("The number is even.");
} else {
  console.log("The number is odd.");
}


let totalAmount = parseFloat(prompt("Enter total amount: "));

if (totalAmount > 100) {
  totalAmount -= totalAmount * 0.1;
//   totalAmount = totalAmount - totalAmount*(10/100)
}

console.log("Discounted total:", totalAmount);

