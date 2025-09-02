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

