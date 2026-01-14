const fetchData = () => {
    return new Promise((resolve, reject)=>{ //resolve and reject are callback functions
        setTimeout(()=>{
            let success = true;
            if(success){
                resolve("Data fetched");
            }
            else{
                reject("Data not fetched");
            }
        }, 2000)
    });
}
console.log(typeof(fetchData()));
console.log(fetchData());
fetchData()
.then((response)=>{ //the .then() method is used to handle resolved promise
    console.log(response);
})
.catch((error)=>{ //the .catch() method is used to handle rejected promise
    console.log(error);
})

// another example
const ride = new Promise((resolve, reject) => {
  let arrived = false;
  if (arrived) {
    resolve("drive arrived");
  } else {
    reject("driver not arrived");
  }
});
console.log(ride);
ride
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("all settled!")
  });
