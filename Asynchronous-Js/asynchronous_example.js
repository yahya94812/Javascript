// synchronous line after line execution
console.log("start")
console.log("first");
console.log("second");
console.log("third");
console.log("end");

//asynchronous(non-blocking) using setTimeout(asynchronous function)
setTimeout(()=>{ //specifying callback function to execute after 3 sec
    console.log("after 3 second of execution")
}, 3000);
setTimeout(()=>{
    console.log("after 2 second of execution")
}, 2000)
setTimeout(()=>{
    console.log("after 1 second of execution")
}, 1000)
//think it as first the control check all the asynchronous function one by one and run it in other runtime from that the output comes

//experiment
setTimeout(()=>{
    console.log("first, in async fn run in 0 sec"); //time to run but callstack is not empty
}, 0)
console.log("second, not in async fn run in 0 sec");
console.log("now callstack is empty, callbacks of async functions are pushed in callstack after the given delay");


