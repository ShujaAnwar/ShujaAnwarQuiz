console.log("2 Answer \n");
var personName = "Shuja Anwar";
console.log(" Hello! " + personName + " would you like to learn some Python today? \n");
console.log("3 Answer \n");
var namePerson = "shuja anwar ahmed hashmi";
console.log(" Hello! " +
    namePerson.toUpperCase() +
    " This is the answer of Third Question");
console.log(" Hello! " +
    namePerson.toLowerCase() +
    " This is the answer of Third Question");
// console.log(" Hello! " +namePerson.toTitleCase() + " would you like to learn some Python today?");
console.log("Hello ".concat(toTitleCase(namePerson), ", would you like to learn some Python today? \n"));
function toTitleCase(str) {
    return str.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}
////////////////////////////////////////////forth qustion
console.log("4 Answer \n");
var qoute = "Nahi Hai Na umeed Iqbal Apni kasht-e-viran say zara num ho to ye matti bari zarkhaiz hai saqi.";
console.log("Allama Muhammad Iqbal Said, " + '"' + qoute + '" \n');
console.log("5 Answer \n");
var famous_Person = "Allama Muhammad Iqbal";
var message = "Nahi Hai Na umeed Iqbal Apni kasht-e-viran say zara num ho to ye matti bari zarkhaiz hai saqi.";
console.log(famous_Person + " said," + '"' + message + '" \n');
console.log("6 Answer \n");
console.log("Person Name is Anwar \n");
var person_Name = "Anwar";
console.log("1st : " + "\t" + person_Name + "\n");
console.log("2nd : " + "\n" + person_Name + "\n");
console.log("7 & 8 Answer \n");
console.log("Calcuation for Number 8 \n");
console.log("1st : " + 16 / 2 + "\t");
console.log("1st : " + 2 * 4 + "\t");
console.log("1st : " + (4 + 4) + "\t");
console.log("1st : " + (16 - 8) + "\t \n");
console.log("9 Answer \n");
var favNum = 5;
console.log("Ans : \t Your Favorite Number is " + favNum + "\n \n");
console.log("10th Answer \n");
console.log("I am writing Comments on Program Num 8 and 9 \n");
console.log("Program 8 : \t I Code some Arithmetic operations in Program Num 8, \n");
console.log("Program 9 : \t I Stored My favorite Number in Variable then Print it in Program 9 \n \n");
console.log("11th Answer Array \n");
var friends_Name = [];
friends_Name.push("Asad", "Mohsin", "Taha", "Saad", "Usaid");
console.log(friends_Name + "\n");
console.log("12th Answer Array with message \n");
var messageToFriends = [];
messageToFriends.push("Asad", "Mohsin", "Taha", "Saad", "Usaid");
for (var i = 0; i < messageToFriends.length; i++) {
    console.log(i +
        " Hi! " +
        messageToFriends[i] +
        " You are Welcome to the next Js Training Class \n \n");
}
console.log("13th Answer Array with message \n");
var myGarage = [];
myGarage.push("Honda Civic", "City", "Land Couser", "Hilux", "Revo");
for (var i = 0; i < myGarage.length; i++) {
    console.log(i + " I would like to Own a " + myGarage[i] + " \n \n");
}
console.log("14th Answer Guest List with with invitation message \n");
var myGuests = [];
myGuests.push("Aleem", "Kaleem", "Saleem", "Raheem", "Faheem", "Naseem", "Naeem");
for (var i = 0; i < myGuests.length; i++) {
    console.log(i +
        " Hi " +
        myGuests[i] +
        "," +
        " I would like to invite you on Dinner today! Pleas Be on Time " +
        myGuests[i] +
        "." +
        " \n \n");
}
console.log("15th Answer Guest List with with New invitation message \n");
var myNewGuests = [];
myNewGuests.push("Aleem", "Kaleem", "Saleem", "Raheem", "Faheem", "Naseem", "Naeem");
// const index = myNewGuests.indexOf('Saleem');
// console.log(index); // 👉️ 1
// if (index !== -1) {
//     myNewGuests.splice(index, 1);
// }
myNewGuests[2] = "Shuja";
for (var i = 0; i < myNewGuests.length; i++) {
    console.log(i +
        " Hi " +
        myNewGuests[i] +
        "," +
        " I would like to invite you on Dinner today! Pleas Be on Time " +
        myNewGuests[i] +
        "." +
        " \n \n");
}
console.log("15th Answer Guest List with with New invitation message \n");
var new3Guests = [];
new3Guests.push("Aleem", "Kaleem", "Saleem", "Raheem", "Faheem", "Naseem", "Naeem");
new3Guests.push("Waseem", "Shameem", "Ameem");
// const index = myNewGuests.indexOf('Saleem');
// console.log(index); // 👉️ 1
// if (index !== -1) {
//     myNewGuests.splice(index, 1);
// }
new3Guests[2] = "Shuja";
for (var i = 0; i < new3Guests.length; i++) {
    console.log(i +
        " Hi " +
        new3Guests[i] +
        "," +
        " I would like to invite you on Dinner today! Pleas Be on Time " +
        new3Guests[i] +
        "." +
        " \n \n");
}
console.log("16th (a) Answer Guest List with with New invitation mes sage \n");
for (var i = 0; i < new3Guests.length; i++) {
    console.log(i + "I have found new bigger table for you " + new3Guests[i] + "\n \n");
}
console.log("16th (b) Answer Guest List with with New invitation mes sage \n");
new3Guests.unshift("Ziad");
// new3Guests.shift();
for (var i = 0; i < new3Guests.length; i++) {
    console.log(i + "I have found new bigger table for you " + new3Guests[i] + "\n \n");
}
console.log("16th (c) Answer Guest List with with New invitation message \n");
// new3Guests.unshift("Ziad");
// new3Guests.shift();
new3Guests.splice(4, 0, "Usaid Baba");
for (var i = 0; i < new3Guests.length; i++) {
    console.log(i + "I have found new bigger table for you " + new3Guests[i] + "\n \n");
}
console.log("17th (a) Answer Guest List with with New invitation message \n");
// new3Guests.unshift("Ziad");
// new3Guests.shift();
for (var i = 0; i < new3Guests.length; i++) {
    if (i >= 2) {
        new3Guests.pop();
    }
    else {
        console.log(i + "I have found new bigger table for you " + new3Guests[i] + "\n \n");
    }
}
console.log("17th (b) Answer Guest List with with New invitation message \n");
// new3Guests.unshift("Ziad");
// new3Guests.shift();
for (var i = 0; i < new3Guests.length; i++) {
    if (i > new3Guests.length - 1) {
        new3Guests.pop();
    }
    else {
        console.log(i + "I have found new bigger table for you " + new3Guests[i] + "\n \n");
    }
}
