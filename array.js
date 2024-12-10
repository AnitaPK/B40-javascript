// const array1 = []
// console.log(typeof(array1))  // object

// let fruits = ['banana', 'mango', 'kiwi']

// console.log(fruits.length)
// console.log(fruits)
// console.log(fruits[0])
// console.log(fruits[2])
// fruits[0] = 'BANANA'
// console.log(fruits[0])
// fruits[fruits.length] = 'Apple'
// console.log(fruits)
// // fruits[9] = 'Orange'
// // console.log(fruits)
// // console.log(fruits.length)

// fruits.push('Orange')
// console.log(fruits)
// console.log(fruits.length)
// fruits.pop();
// console.log(fruits)
// console.log(fruits.length)

// fruits.unshift('Orange')
// console.log(fruits)
// console.log(fruits.length)
// fruits.shift();
// console.log(fruits)
// console.log(fruits.length)

// sliceFruit = fruits.slice(1, 1)
// console.log(sliceFruit)
// console.log(fruits)

// spliceFruit = fruits.splice(1, 0, 'Orange')
// console.log(spliceFruit)
// console.log(fruits)
// len =fruits.length;
// for(i=0; i<len; i++){
//     console.log(`can i eat ${fruits[i]}`)
// }
// for(let x of fruits){
//     console.log("can i eat ", x)
// }

// for(let key in fruits) console.log("for in wala",fruits[key])

// fruits.forEach((elem)=>{
//      console.log("for each wala fruit",elem);
// })

const products = ["Laptop", "TV","Phone", "Tablet", "Watch","TV"];
for(i=0; i<products.length; i++){
    console.log(products[i])
}

products.forEach((product)=>{
    console.log(product)
})

products.map((product)=>console.log(product))

includeProduct = products.includes('Tablet')
console.log(includeProduct)

const isProduct = products.filter((p)=> p == 'Tablet')
console.log(isProduct)

arr = [34,100, 56, 78, 654]
console.log(arr.filter((element)=> element <= 100))

console.log(products.find((prod)=> prod == 'TV'))

sumArr = arr.reduce((elem, ii)=> elem+ii)
console.log(sumArr)

console.log(arr.some((elem)=>elem > 654))

console.log(products.concat(arr, ["%","^","#"]))


arr = ['red','green','blue']
aar2 = [...arr]
// ?:     ternary operator

if(cond){
    stmt1
}else{
    stm2
}

stm = cond ? stmt1 : stm2