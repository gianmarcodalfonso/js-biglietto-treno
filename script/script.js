const kmPrice = 0.21;

let userKm = parseInt(prompt(`Inserisci la lunghezza del viaggio in km:`));
let userAge = parseInt(prompt(`Inserisci la tua età:`));

let tripPrice = userKm * kmPrice;
console.log(`Costo del viaggio: ${tripPrice.toFixed(2)}€;`);

if (userAge < 18 || userAge >= 65) {
  console.log(`Hai diritto ad uno sconto;`);
  let tripDiscounted;

  if(userAge < 18) {
    console.log(`Sconto applicabile del: 20%;`)
    tripDiscounted = (tripPrice / 100) * 80;
  }

  else {
    console.log(`Sconto applicabile del: 40%`)
    tripDiscounted = (tripPrice / 100) * 60;
  }

  console.log(`Dovrai pagare: ${tripDiscounted.toFixed(2)}€;`)
}