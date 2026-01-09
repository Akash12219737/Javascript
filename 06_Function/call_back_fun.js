// const { useCallback } = require("react")

const print =()=>{
    console.log("Printing press")
}
const print2 = () =>{
    console.log("Printing press 2")
}

const test = (name, Callback) =>{
    console.log("Inside the test function", name)
    Callback();
}
test("Akash",print)