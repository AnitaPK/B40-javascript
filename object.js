let user1 = {};
console.log(typeof(user1));
let user = {
    firstName:"Gaurav",
    lastName:"Patel",
    dept:"Computer",
    age:20,
    isStudent:true,
    address:{
        flatNo:1001,
        city:"Pune",
        state:"MH"
    },
    phoneNo:['1234567890','0987654321'],
    fullName:function(){
        return this.firstName + " " + user.lastName
    }
}
console.log(user.firstName);
console.log(user);
let user2 = new Object();
user2.firstName = "Gaurav2"
user2.dept="Computer"

user1.firstN = 'Gaurav3'

console.log(user1)

console.log(user2["dept"])

user2.dept = "IT"
console.log(user2["dept"])

for(let key in user){
    console.log(key+ " is " + user[key])
}

console.log(user.address.city)

user.phoneNo.map((i)=>console.log(i))

fullName = user.fullName()
console.log(fullName)

console.log(Object.keys(user))
console.log(Object.values(user))
console.log(Object.entries(user))

console.log(JSON.stringify(user))


let student = {
    name:"John",
    age:30,
    grade:"C"
}

student.subject = "Math"  
// student["subject"] = "Math"
student.grade = "B"

delete student.age

const Book ={title:"ABC", author:"XYZ", details:{pages:200, genre:"category"}}

console.log(Book.details.pages, "number of pages")
console.log(Book.details.genre, ' category of book')