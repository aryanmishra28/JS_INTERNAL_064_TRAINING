// // let: Cannot be redeclared, but can be reassigned
// let a=23
// // const: Cannot be redeclared, cannot be reassigned
// const b="abc"
// // var: Can be redeclared, can be reassigned
// var c=78
// // No keyword: Creates global variable, can be reassigned
// d=88
// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)  

// console.log("ERROR: Identifier 'a' has already been declared")
// console.log("ERROR: Identifier 'b' has already been declared")

// // Reassigning let variable (allowed)
// a = 25
// // Reassigning var variable (allowed)
// var c=77
// d=87
// // Reassigning const would cause error (not allowed)
// // b = "xyz" // This would throw: TypeError: Assignment to constant variable
// let a2=22
// const b2="ab"
// console.log(a)
// console.log(b)
// console.log(c) // this can reassign
// console.log(d)  



// let e;
// console.log(typeof undefined) // undefined
// console.log(typeof 123) // number
// console.log(typeof 12.34) // number
// console.log(typeof "hello") // string
// console.log(typeof true) // boolean
// console.log(typeof null)//object
// console.log(typeof e) // undefined

let a="abc" //abc
let b=""    //empty string
let c=null  //null
let d;      //undefined
console.log(a)
console.log(b)
console.log(c)
console.log(d)