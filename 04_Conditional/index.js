let age  = 24;
let dl = true;
if(age > 18 && dl == true){
    console.log("You can drive");
}else{
    console.log("You can't drive");
}


let addhar = false;
let pan = true;
if (addhar){
    console.log("You can open you bank account");
}
else if(pan){
    console.log("You can open bank account with pan card");

}
else{
    console.log("You can't open account")
}


// let day = 1;
// if(day == 1){
//     console.log("Monday");
// }
// else if(day == 2){
//     console.log("Tuesday");
// }
// else if(day ==3){
//     console.log("Wednesday")
// }
// else if(day == 4){
//     console.log("Thursday");
// }else if(day == 5){
//     console.log("Friday");
// }else if(day == 6){
//     console.log(Saturday);
// }else if(day ==7){console.log("Sunday");

// }else {
//     console.log("No day");
// }


console.log("Switch Case");
let day = 10;
switch (day){
    case 0 : console.log("Mon")
    break;
    case 1: console.log("Tues")
    break;
    case 2: console.log("Wed");
    break;
    case 3: console.log("Thurs");
    break;
    case 4: console.log("Fri");
    break;
    case 5: console.log("Sat");
    break;
    default : console.log("Invalid days");
}
