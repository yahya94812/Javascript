// A callback function is a function that is passed as an argument to another function and is executed later, usually after some operation has been completed.
// why callback?, ans: callback is used to return indirectly data from asynchronous functions as we can't use return with asynchronous function.
// callback is used mostly with asynchronous functions.
//function that accept callback as parameter is called higher order function.
function greet(name, callback) {
  console.log("hi\n" + name);
  callback();
}
function sayBye() {
  console.log("bye");
}
greet("yahya", sayBye);

function printName(callback) {
  let fname = "mohammed";
  let lname = "yahya";
  callback(fname, lname);
} //here callback is used to specify the display pattern of name
printName((firstn, lastn) => console.log(`My name is ${firstn} ${lastn}`));

//callback in Array Method(forEach())
const numbers = [1, 2, 3, 4, 5];
numbers.forEach((number, index, numbers) => {
  console.log(number, index);
});
console.log("passing console.log as parameter");
numbers.forEach(console.log); //the callback functions parameter are passed inside the forEach() method

//callback in asynchronous API request (simulated)
function fetchData(callback) {
  //it execute the callback function after fetching by giving it fetched data as parameter
  console.log("fetching...");
  setTimeout(() => {
    const data = { name: "alice" };
    callback(data); //executing callback function by giving it fetched data
  }, 1000);
}
function displayData(data) {
  console.log("Received data :", data);
}
fetchData(displayData);

//problem with callback(callback hell)
step1(() => {
  //result of step1 fn is passed to step2(callback) fn in general(not in this case)
  step2(() => {
    //result of step2 fn is passed to step3(callback) fn(not in this case)
    step3(() => {
      //result of step3 fn is passed to callback fn in general(not in this case)
      console.log("done");
    });
  });
});
function step1(callback) {
  setTimeout(() => {
    console.log("step1");
    callback();
  });
}
function step2(callback) {
  setTimeout(() => {
    console.log("step2");
    callback();
  });
}
function step3(callback) {
  setTimeout(() => {
    console.log("step3");
    callback();
  });
}
//to avoid callback hell, use Promises or async/await.
