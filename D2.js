/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let a = 10;
let b = 30;

if (a > b) {
  console.log("è maggiore");
} else if (a < b) {
  console.log("è minore");
} else {
  console.log("sono uguali");
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let c = 10;

if (c != 5) {
  console.log("not equal");
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let num1 = 20;

if (num1 % 2 === 0) {
  console.log("è divisibile");
} else {
  console.log("non è divisibile");
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let num2 = 5;
let num3 = 3;

if (num2 === 8 || num3 === 8 || num2 + num3 === 8 || num3 + num2 === 8 || num2 - num3 === 8 || num3 - num2 === 8) {
  console.log("verifica 8");
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const totalShoppingCart = 60;
const totalShipping = 10;
const totalCost = totalShoppingCart;

if (totalCost >= 50) {
  console.log("la spedione è gratuita");
} else if (totalCost < 50) {
  totalCost += totalShipping;
  console.log("paga spedizione");
} else {
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let totalShoppingCart2 = 40;
let Shipping2 = 10;
totalShoppingCart2 = totalShoppingCart2 * 0.8;
let totalCost2 = totalShoppingCart2;

if (totalCost2 >= 50) {
  console.log("It's B.Friday 20%off + delivery free");
} else if (totalCost2 < 50) {
  totalCost2 += Shipping2;
  console.log("Delivery tax 10$, but it's B.Friday 20% off");
}
/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let q = 5;
let w = 6;
let e = 7;
if (q >= w) {
  if (e >= q) {
    console.log("e, q, w");
  } else {
    if (e >= w) {
      console.log("q,e,w");
    } else {
      console.log("q,w,e");
    }
  }
} else {
  if (e >= w) {
    console.log("e,w,q");
  } else {
    if (e >= q) {
      console.log("w, e, q");
    } else {
      console.log("w,q,e");
    }
  }
}

/* ESERCIZIO 8
    Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
  */

/* SCRIVI QUI LA TUA RISPOSTA */
let verify = "ciao";

if (typeof verify === "number") {
  console.log("it's a number");
} else {
  console.log("it's a string");
}

/* ESERCIZIO 9
    Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
  */

/* SCRIVI QUI LA TUA RISPOSTA */
let numb3 = 11;

if (numb3 % 2 === 0) {
  console.log("even");
} else {
  console.log("odd");
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

let val = 2;
if (val < 10 && val > 5) {
  console.log("meno di 10 ma più di 5");
} else if (val < 5) {
  console.log("meno di 5");
} else {
  console.log("il numero è superiore a 10");
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
me.city = "Toronto";
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

/* SCRIVI QUI LA TUA RISPOSTA */
me.skills.pop();
console.log(me);
/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const array = [];

array.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(array);
/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

array[9] = 100;
console.log(array);
