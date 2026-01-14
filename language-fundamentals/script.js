document.write("hay, how are you !");

let emptyVal = null;
let notDefined; //undefined
console.log(notDefined);

let array = ["abc", "xyz", "lmn"];

let person = {
    age : 49,
    wight : 43,
    sayName : ()=>{
        console.log("i am xyz");
    }
}
console.log(person.age);
console.log(person.wight);
person.sayName();
console.log(typeof person);

console.log(3**2);

console.log(23=="23")//true
console.log(23==="23")//false

function add(a, b){
    return a+b;
}
console.log(add(3, 3));

const multiply = (a, b)=> a*b;
console.log(multiply(3, 3));

arr = ["a", "b"];
arr.push("c");
console.log(arr);
arr.pop();
console.log(arr);
arr.unshift("z");
console.log(arr);
arr.shift();
console.log(arr);

//higher order function
function greet(name, callback){
    console.log(`hay ${name}`);
    callback(name);
}
function sayBye(name){
    console.log(`bye bye ${name}`);
}

greet("xyz",sayBye);

//higher order function can return a function
//function factory (different versions)
function greet(greeting){
    return function(name){
        console.log(`${greeting} ${name}`);
    }
}

let sayHi = greet("Hi");
let sayHello = greet("Hello");

sayHi("abc");
sayHello("xyz");

//for each loop

const ar = ["a", "b", "c", "d"];
ar.forEach((elem, i, arr)=>{
    console.log(elem," ",i," ",arr);
})

//sum of array
let sum = 0;
let a = [1, 2, 3, 4, 5];
a.forEach((elem)=>{
    sum+=elem;
})
console.log(sum);
