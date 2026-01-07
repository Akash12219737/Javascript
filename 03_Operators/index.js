// Operators

// Arthemitics operators
let a = 10;
let b =20;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);


// Assignment operators
console.log("Assignment operators");
let x =10;

let s = 20;
// s = s+x;
s +=x
console.log(s)


// Comparsion Operators
console.log("Comparsion Operators");
let c = 10;
let d = '10';
console.log(c == d) // true bez compare the value
console.log(c === d)
let e = 10;
console.log(c != d) 
console.log(c == e)// Not equal to and check the value



console.log("Ternary Operators")
let marks = 45;
let result = (marks >=33)?("You are pass"): ("You Fail");
console.log(result)


// Template literal -> back tick
console.log("Template literal");
let Name = "AKash"
let income = 789456
let pincode = 144401
// your name is = "Akash" and your income is  = 789456 and pincode is 144401
console.log("Your name is = " +'"'+Name+'"'+" and your income is = "+ income+"and pincode is "+pincode)
// Alternate
console.log(`You name is = "${Name}" and your income is = ${income} and pincode = ${pincode}`);