//exercice1 : Simple if/else statement 

let x = 5;
let y = 2;

if ( x > y){
    console.log("x is the biggest number");
}
else{
    console.log("y is the biggest number");
}

// exercice 2:Chihuahua

const newdog = "Chihuahua";

console.log(newdog.length);

console.log(newdog.toUpperCase());
console.log(newdog.toLowerCase());

if (newdog == "Chihuahua"){
    console.log("I love Chihuahuas, it's my favorite dog breed");
}
else {
    console.log("I dont care, I prefer cats");
}


// exercice 3 : Even Or Odd

const userNumber = prompt("enter a number")

if(userNumber % 2 == 0 ){
    console.log( userNumber + " is an even number");
}
else{
    console.log(userNumber + " is an odd number");
}

// Exercise 4: Group Chat  

const users = ["Lea123","Princess45", "cat&doglovers", "helooo@000"];

if(users.length == 0 ){
    console.log("no one is online ");
}
else if ( users.length == 1){
    console.log(users[0]+ " is online ");
}
else if (users.length == 2){
    console.log(users[0]+ " and " + users[1] + " are online ");
}
else ( users.length > 2) 
    console.log(users[0] + "," +  users[1] + " and "  + (users.length - 2) + " more are online"  );

