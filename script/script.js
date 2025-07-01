const kmPrice = 0.21;

let userKm = parseInt(prompt(`Inserisci la lunghezza del viaggio in km`));
let userAge = parseInt(prompt(`Inserisci la tua età`));

let tripPrice = userKm * kmPrice;
console.log(`Costo del viaggio: ${tripPrice}€;`);

if (userAge <= 18 || userAge >= 65) {
  console.log(`Hai diritto ad uno sconto`);
  let tripDiscounted;
}