//for..in -> loop
// Iterates over the keys (properties) of an object or the indices of an array.
const phone = {
    brand : "CMF",
    modal: "Phone 3",
    price: 30000,
    camera: "45 MP",
    Ram : "4 GB", 
    ROM: "16 GB"
}

for(let a in phone){
    // console.log(a)
    // console.log();
    // console.log(phone[a]);
    // console.log("");
    console.log(a,phone[a])

}


// for of -> loop
// Iterates over the values ofiterable objects like arrays, strings, Maps, etc.
let arr = [1, 2, 3, 4,5]
for(let a of arr){
    console.log(a)
}

// forEach => loop
// Executes a function once for each element in an array (cannot be used to break the loop).
let brr = [10, 20,30];
brr.forEach((a, ind,brr)=>console.log(a,ind,brr))