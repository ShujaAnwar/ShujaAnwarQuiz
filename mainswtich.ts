var choice: any = document.getElementById('message') as HTMLInputElement | null;

// var value:string = choice?.value;

choice?.addEventListener('input', function (event) {
  const target = event.target as HTMLInputElement;

switch(target.value){

  case "1":{
  console.log("2 Answer \n");
  let personName: string = "Shuja Anwar";
  console.log(
    " Hello! " + personName + " would you like to learn some Python today? \n"
  );
  break;}

case "2": {
  console.log("3 Answer \n");
  let namePerson: string = "shuja anwar ahmed hashmi";

  console.log(
    " Hello! " +
      namePerson.toUpperCase() +
      " This is the answer of Third Question"
  );
  console.log(
    " Hello! " +
      namePerson.toLowerCase() +
      " This is the answer of Third Question"
  );
  // console.log(" Hello! " +namePerson.toTitleCase() + " would you like to learn some Python today?");

  console.log(
    `Hello ${toTitleCase(
      namePerson
    )}, would you like to learn some Python today? \n`
  );

  function toTitleCase(str) {
    return str.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }
break;}

case "3":{
console.log("4 Answer \n");

let qoute: string =
  "Nahi Hai Na umeed Iqbal Apni kasht-e-viran say zara num ho to ye matti bari zarkhaiz hai saqi.";

console.log("Allama Muhammad Iqbal Said, " + '"' + qoute + '" \n');
break;}
case "4":{
console.log("5 Answer \n");
let famous_Person: string = "Allama Muhammad Iqbal";

let message: string =
  "Nahi Hai Na umeed Iqbal Apni kasht-e-viran say zara num ho to ye matti bari zarkhaiz hai saqi.";

console.log(famous_Person + " said," + '"' + message + '" \n');
break;}

case "5":{
  console.log("6 Answer \n");
  console.log("Person Name is Anwar \n");
let person_Name: string = "Anwar";

console.log("1st : " + "\t" + person_Name + "\n");
console.log("2nd : " + "\n" + person_Name + "\n");
break;}

case "6" :{console.log("7 & 8 Answer \n");
console.log("Calcuation for Number 8 \n");

console.log("1st : " + 16 / 2 + "\t");
console.log("1st : " + 2 * 4 + "\t");
console.log("1st : " + (4 + 4) + "\t");
console.log("1st : " + (16 - 8) + "\t \n");
break;
}

case "7" : {console.log("9 Answer \n");

let favNum: number = 5;

console.log("Ans : \t Your Favorite Number is " + favNum + "\n \n");
break;}

case "8" :{console.log("10th Answer \n");

console.log("I am writing Comments on Program Num 8 and 9 \n");
 break;}
case "9":{console.log(
  "Program 8 : \t I Code some Arithmetic operations in Program Num 8, \n"
);
break;}
case "10" :{
console.log(
  "Program 9 : \t I Stored My favorite Number in Variable then Print it in Program 9 \n \n"
);
}
case "11" :{console.log("11th Answer Array \n");

let friends_Name: string[] = [];

friends_Name.push("Asad", "Mohsin", "Taha", "Saad", "Usaid");

console.log(friends_Name + "\n");
}
case "12" :{console.log("12th Answer Array with message \n");

let messageToFriends: string[] = [];

messageToFriends.push("Asad", "Mohsin", "Taha", "Saad", "Usaid");

for (let i = 0; i < messageToFriends.length; i++) {
  console.log(
    i +
      " Hi! " +
      messageToFriends[i] +
      " You are Welcome to the next Js Training Class \n \n"
  );
}
 break;}
case "13" :{console.log("13th Answer Array with message \n");

let myGarage: string[] = [];

myGarage.push("Honda Civic", "City", "Land Couser", "Hilux", "Revo");

for (let i = 0; i < myGarage.length; i++) {
  console.log(i + " I would like to Own a " + myGarage[i] + " \n \n");
}
break;}
case "14" :{console.log("14th Answer Guest List with with invitation message \n");

let myGuests: string[] = [];

myGuests.push(
  "Aleem",
  "Kaleem",
  "Saleem",
  "Raheem",
  "Faheem",
  "Naseem",
  "Naeem"
);

for (let i = 0; i < myGuests.length; i++) {
  console.log(
    i +
      " Hi " +
      myGuests[i] +
      "," +
      " I would like to invite you on Dinner today! Pleas Be on Time " +
      myGuests[i] +
      "." +
      " \n \n"
  );
}
break;}
case "15" :{console.log("15th Answer Guest List with with New invitation message \n");

let myNewGuests: string[] = [];

myNewGuests.push(
  "Aleem",
  "Kaleem",
  "Saleem",
  "Raheem",
  "Faheem",
  "Naseem",
  "Naeem"
);

// const index = myNewGuests.indexOf('Saleem');
// console.log(index); // 👉️ 1

// if (index !== -1) {
//     myNewGuests.splice(index, 1);
// }

myNewGuests[2] = "Shuja";
for (let i = 0; i < myNewGuests.length; i++) {
  console.log(
    i +
      " Hi " +
      myNewGuests[i] +
      "," +
      " I would like to invite you on Dinner today! Pleas Be on Time " +
      myNewGuests[i] +
      "." +
      " \n \n"
  );
}
break;}

case "16" :{console.log("15th Answer Guest List with with New invitation message \n");

let new3Guests: string[] = [];

new3Guests.push(
  "Aleem",
  "Kaleem",
  "Saleem",
  "Raheem",
  "Faheem",
  "Naseem",
  "Naeem"
);

new3Guests.push("Waseem","Shameem","Ameem");

// const index = myNewGuests.indexOf('Saleem');
// console.log(index); // 👉️ 1

// if (index !== -1) {
//     myNewGuests.splice(index, 1);
// }

new3Guests[2] = "Shuja";
for (let i = 0; i < new3Guests.length; i++) {
  console.log(
    i +
      " Hi " +
      new3Guests[i] +
      "," +
      " I would like to invite you on Dinner today! Pleas Be on Time " +
      new3Guests[i] +
      "." +
      " \n \n"
  );
}
break;}

case "17":{console.log("16th (a) Answer Guest List with with New invitation mes sage \n");

for(let i=0; i< new3Guests.length; i++){

console.log(i + "I have found new bigger table for you " + new3Guests[i] + "\n \n");


}

console.log("16th (b) Answer Guest List with with New invitation mes sage \n");

new3Guests.unshift("Ziad");
// new3Guests.shift();


for(let i=0; i<new3Guests.length; i++){

  console.log(i + "I have found new bigger table for you " + new3Guests[i] + "\n \n");

}
break;}
case "19" :{console.log("16th (c) Answer Guest List with with New invitation message \n");

// new3Guests.unshift("Ziad");
// new3Guests.shift();

new3Guests.splice(4,0, "Usaid Baba");

for(let i=0; i<new3Guests.length; i++){

  console.log(i + "I have found new bigger table for you " + new3Guests[i] + "\n \n");


}
break;}

case "20" :{console.log("17th (a) Answer Guest List with with New invitation message \n");

// new3Guests.unshift("Ziad");
// new3Guests.shift();


for(let i=0; i<new3Guests.length; i++){

 
  if(i>=2){
    new3Guests.pop();
  }
  else{
    console.log(i + "I have found new bigger table for you " + new3Guests[i] + "\n \n");
  }


}
break;}
case "21" :{console.log("17th (b) Answer Guest List with with New invitation message \n");

// new3Guests.unshift("Ziad");
// new3Guests.shift();

for(let i=0; i<new3Guests.length; i++){

 
  if(i>new3Guests.length-1){
    new3Guests.pop();
  }
  else{
    console.log(i + "I have found new bigger table for you " + new3Guests[i] + "\n \n");
  }


}
break;}
default: {
  console.log("helloworld");
}
}
});
