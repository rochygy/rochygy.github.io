// Összegzés algoritmusa:

let numericArray = [1, 3, 2, 5, 4, 7, 6, 9];
let osszeg = 0;
for (let i = 0; i < numericArray.length; i++){
  osszeg += numericArray[i];
}
console.log("Végösszeg: " + osszeg);


// Számlálás
let db = 0;
for(let i = 0; i < numericArray.length; i++) {
  if(numericArray[i] % 2 == 0)
db++;
  }
  console.log("Páros számok: " + db);


// legnagyobb elem
let biggest = numericArray[0];
for (let i = 0; i < numericArray.length; i++) {
  if(numericArray[i] > biggest) {
    biggest = numericArray[i];
  } 
}
console.log("A legnagyobb szám a : " + biggest);

// Eldöntés tétele
let contains = false;
for (let i = 0; i < numericArray.length; i++) {
    if(numericArray[i] == 5 && !contains)
        contains = true;
}
console.log("Van benne ötös?: "+  contains);

// Rugalmas adattárolás tömbökkel

let user = {
    name: "Kiss Róbert",
    age: 20,
    city: "Bp"
};
console.log(user.name);
console.log(user.age);
Object.entries(user); // Bejegyzés lekérésnél minden egyes kulcs-/értékpárt egy tömbben fogok megkapni.
Object.entries(user)[1][0];



let cars = {
    brand: "Volvo",
    age: 20,
    color: "red"
};
Object.keys(cars).length;


let custommers = {};
custommers = {
    name: "Pisti"
};
conslole.log(customers);