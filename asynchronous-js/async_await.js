// it makes make working with asynchronous code easier to read and write — like synchronous code — without using .then() or .catch().
// async makes a function return a Promise.
// await pauses the execution of the async function until the Promise is resolved or rejected.
// Define an async function to fetch user data

// Make API call using fetch and wait for the response
const response = await fetch("https://jsonplaceholder.typicode.com/users/1");

console.log(typeof response);
console.log(response);
// Check if response is okay
// Convert response to JSON and wait for it
const user = await response.json();

// Log the user data
// console.log("User fetched:", user);

// Call the function


// setTimeout(() => console.log("hay"), 1000);

//creating promise
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let success = true;
      if (success) {
        resolve("i got a success");
      } else {
        reject("failure is the part of success");
      }
    },200); 
  });
};

fetchData().then((response) => console.log(response));

const  asy = async (callback) =>{
    let response = await fetchData();
    console.log(response);
    callback();
}

console.log("hay");
asy(()=>console.log("bye"));


async function apiFetch(){
    let data;
    data = await fetch("https://randomuser.me/api/");
    console.log(data);
    console.log(data.body);
    let formatted = await data.json();
    console.log(formatted)
    // console.log(data.json)
}
apiFetch()