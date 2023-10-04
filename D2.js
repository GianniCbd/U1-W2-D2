/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/
let primo = 20;
let secondo = 20;
if (primo < secondo) {
  console.log("primo è inferiore a secondo");
}
if (primo > secondo) {
  console.log("primo è maggiore a secondo");
} else {
  console.log("Primo e secondo sono uguali");
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const numerouno = 10;
const numerodue = 5;
if (numerouno !== numerodue) {
  console.log("not equal");
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let divisore1 = 15;
if (divisore1 % 5 === 0) {
  console.log("divisibile per 5");
}
/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let valore1 = 100;
let valore2 = 92;
if (valore1 === 8 || valore2 === 8 || valore1 + valore2 === 8 || valore1 - valore2 === 8 || valore2 - valore1 === 8) {
  console.log("verificato");
}
/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let totalShoppingCart = 65;
let shippingCost = 10;
let totalToPay = totalShoppingCart;

if (totalShoppingCart < 50) {
  totalToPay += shippingCost;
}

console.log("Totale da pagare:", totalToPay);
/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let totalShoppingCart2 = 65;
totalShoppingCart2 = totalShoppingCart2 * 0.8;
let shippingCost2 = 10;
let totalToPay2 = totalShoppingCart2;

if (totalShoppingCart2 < 50) {
  totalToPay2 += shippingCost2;
}

console.log("totale da pagare:", totalToPay2);
/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let first = 10;
let second = 20;
let third = 30;

if (first >= second) {
  if (third >= second) {
    console.log(third, first, second);
  } else {
    if (third >= second) {
      console.log(first, third, second);
    } else {
      console.log(first, second, third);
    }
  }
} else {
  if (third >= second) {
    console.log(third, second, first);
  } else {
    if (third >= first) {
      console.log(second, third, first);
    } else {
      console.log(second, first, third);
    }
  }
}

/* ESERCIZIO 8
    Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
  */

/* SCRIVI QUI LA TUA RISPOSTA */
let valore = 6;

if (typeof valore === "number") {
  console.log("è un numero");
} else {
  console.log("non è un numero");
}
/* ESERCIZIO 9
    Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
  */

/* SCRIVI QUI LA TUA RISPOSTA */
let asd = 40;
if (asd % 2 === 0) {
  console.log("il numero è pari");
} else {
  console.log("il numero è dispari");
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let val = 8;
if (val < 10 && val > 5) {
  console.log("meno di 10");
} else if (val < 5) {
  console.log("meno di 5");
} else {
  console.log("uguale a 10 o maggiore");
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"]
};

/* SCRIVI QUI LA TUA RISPOSTA */
me.city = "toronto";
console.log(me);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
delete me.lastName;
console.log(me);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/
me.skills.pop;
console.log(me);

/* SCRIVI QUI LA TUA RISPOSTA */
delete me.skills[2];
console.log(me);
/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let arr = [];
arr.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(arr);
/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

arr[9] = 100;
console.log(arr);
