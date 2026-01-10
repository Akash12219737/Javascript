let arr = [10, 20, 30, 40, 50, 60]
// push 
console.log(arr)
arr.push(70);
console.log(arr)

// pop
arr.pop();
console.log(arr)

// shift -> is used to pop from front
arr.shift();
console.log(arr)

// unshift -> Is used to push from front
arr.unshift(40);
console.log(arr)

//find(): Returns the first element that satisfies the provided testing function.
let Array1 = [30, 64, 70, 60,50]
console.log(Array1)
let found = Array1.find((akash)=>akash>60)
console.log(found)


// includes
// Determines whether an array contains a certain value.
console.log(Array1.includes(64))


// concat() => Merges two or more arrays and returns a new array.
let arr1 = [1, 2]
let arr2= [3, 4]
let merged = arr1.concat(arr2);
console.log(merged)


// join() => Joins all array elements into a string, with an optional separator.
let fruit = ["apple", "banna", "papaya"]
console.log(fruit)
let joined = fruit.join(", ")
console.log(joined)


// splice => Adds or removes elements from the array.
let sum = [1, 2, 3, 4, 5, 6];
sum.splice(3, 1, "a")
console.log(sum)
sum.splice(3, 2, "a", "b")
console.log(sum)



// slice(): Returns a shallow copy of a portion of an array.
// array.slice(start, end)
let su= [1,2,3,4,5]
let sliced = su.slice(1, 4)
console.log(sliced)


// sort(): Sorts the elements of the array (alphabetical by default, can be customized).
let sub = [3,5,2,6,9,8]
sub.sort((a,b)=>a-b); // increasing order
console.log(sub)
sub.sort((a,b)=>b-a);  //decreasing
console.log(sub)



// findIndex(): Returns the index of the first element that satisfies a test.
let add = [5,12,8,15]
let index = add.findIndex((ele) => ele >10)
console.log(add)


// 14.)from(): Creates an array from an array-like or iterable object
let str = "hello"
let arr12 = Array.from(str);
console.log(arr12)


// isArray(): Checks if the given value is an array.
let brr = [1, 20, 56,85]
let crr = "Akash"
let n = 10;
console.log(Array.isArray(brr))
console.log(Array.isArray(crr))
console.log(Array.isArray(n))