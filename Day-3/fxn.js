// function double(n){
//     return n*2;
// }
// console.log(double(2));

let arr = [1,2,3,4,"aab"]
console.log(arr)

let fruits = ["apple", "mango", "banana", "kiwi"];

// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }
// for (let fruit of fruits) {
//     console.log(fruit);
// }

fruits.push("papaya");
fruits.unshift("kiwi");
console.log(fruits.includes("apple"));
console.log(fruits.indexOf("mango"));

for (let fruit of fruits) {
    console.log(fruit);
}

//map()
let numbers = [2, 4, 6, 8];
let squares = numbers.map(num => num * num);
console.log(squares);

//filter()
let numbers2 = [1, 2, 3, 4, 5, 6];
let evenNumbers = numbers2.filter(num => num % 2 === 0);
console.log(evenNumbers);


let numbers3 = [10,20,30,5,60]
//filter number greater than 30
let greaternum = numbers3.filter(num => num>30);
console.log(greaternum)

//sum of all numbers
let sum = numbers3.reduce((total,current) => {
    return total+current;
}, 0)
console.log(sum)
