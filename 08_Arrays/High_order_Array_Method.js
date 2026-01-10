// map

let arr = [ 1, 2, 3, 4, 5, 6]
let result = arr.map((e)=>e*20)
console.log(result)

//filter
let res = arr.filter((ele)=>ele%2 ===0)
console.log(res)


// reduce(): Reduces an array to a single value by applying a function to each element.
let sum = arr.reduce((prev, ele)=>prev+ele, 0);
console.log(sum)