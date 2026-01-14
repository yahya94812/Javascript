// asynchronous means not sequential execution more time consuming operations are delayed
// console.log("start..");

// setTimeout(()=>console.log("middle"), 2000); //setTimeout is asynchronous function handel by browser api

// console.log("end..");

// ==============================
// synch using callback
// console.log("start..");

// function sayMiddle(callback){
//     console.log("middle");
//     callback()
// }
// function sayEnd(){
//     console.log("end..");
// }
// setTimeout(() => sayMiddle(sayEnd), 2000) //setTimeout expects function reference not immediate function call

// ==============================
// synch using promise and .then
console.log("start..");

function sayMiddle(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("middle");
            resolve()
        }, 2000)
    })
}

function sayEnd(){
    console.log("end..")
}

sayMiddle()
.then(()=>sayEnd());
