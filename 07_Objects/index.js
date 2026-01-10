const smartphone = {
    name: "CMF Phone-1",
    price:18000,
    camera:"20 Mp",
    Ram: "6 GB",
    Ram: "128 GB"
}
console.log(smartphone.name)
console.log(smartphone)
// Spread operator 
const smartphone1= {...smartphone, name: "Galaxy s24 ultra"};
console.log(smartphone1);

// Object Descrictor
const { name, price, Ram} = smartphone;
console.log(name, price,Ram)