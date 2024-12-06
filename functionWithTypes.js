function Greetings (fname){
    // console.log(fname);
    console.log("Welcome to Wisdom Sprouts " + fname )
}
name1 = 'Gaurav Patel' 

Greetings(name1);
Greetings('Ajeet');

// function without parameter;
//  function withParameter;

function greetingOnPage (){
    inputName = document.getElementById('inputName');
    fname = inputName.value;
    document.getElementById('result').innerHTML = "Welcome to Wisdom Sprouts " + fname;

    inputName.value = ''
}

const greetingOnPageArrow = (n1,n2) =>{
    if(n1 > n2){
        // console.log(n1 + " is greater")
        return n1 + "is greater"
    }else{
        // console.log(n2 + " is greater")
        return n2 + "is greater"
    }
}
num1 = Number(prompt("Enter first number"))
num2= Number(prompt('Enter second Number'))
console.log(greetingOnPageArrow(89,65))
const rsult = greetingOnPageArrow(num1,num2)
console.log(rsult);

(()=>{})();

(function(){})();


function addition(a,b){
   return a+b;
}
c = addition(4,5)

add = (a,b)=>{a+b}

d = add(3,4)
