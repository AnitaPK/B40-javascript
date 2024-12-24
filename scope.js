let arr1 = [3, 5, 9];
const arr2 = JSON.parse(JSON.stringify(arr1))


console.log("start aar1",arr1)
console.log("start aar2",arr2)
arr2.push(7);
arr1.push(10);
console.log("push to aar1",arr1)
console.log("push to aar2",arr2)

// deep copy  shallow copy


// var a =6;
// let b

// function abc(){
//     b = 6;
    
//     // const c = 6;
//     console.log(b)
// }
// console.log(b)
// abc()
// {

    
// }