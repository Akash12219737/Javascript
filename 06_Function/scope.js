let a =10;
const  display = () =>{
    console.log("Inside the Display function");
    console.log(a)
}
display();

// Block Scope
let blockvar= 15;
if(true){
    console.log(blockvar);
}
console.log(blockvar)