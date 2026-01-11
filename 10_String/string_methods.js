let str = "AKash"

console.log(str.length)

// toUpperCase
console.log(str.toUpperCase());
// tolowerCase
console.log(str.toLowerCase())

// includes ->Checks if the string contains a specific substring.
console.log(str.includes("A"));

// indexof ->Returns the index of the first occurrence of a substring
console.log(str.indexOf('a'))


// trim -> Removes whitespace from both ends of the string.
let a = "   Web development m";
console.log(a.trim());


// Substring  -> Extracts a substring between two specified indices.
let b= "Best is javascript"
console.log(b.substring(5,7))


// slice(start, end) – Extracts a portion of the string, supporting negative indices.
console.log(b.slice(0,4))


//  replace
console.log(b.replace("Best", "BEST"))


// split(separator) – Splits the string into an array based on a separator.
let c = b.split(" ")
console.log(c)



// CharAt
console.log(str.charAt(4));