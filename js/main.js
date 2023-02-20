'use strict';

//richiamo il prompt e assegno il valore alle variabili
const nomeUtente = prompt('Nome');
const cognomeUtente = prompt('Cognome');
const colorePreferitoUtente = prompt('Colore preferito');
const classeUtente = prompt('Classe');
const password = `${nomeUtente}${cognomeUtente}${colorePreferitoUtente}${classeUtente}`;

//stampo il risultato su console
console.log(password);

//viasulizzo il risultato all'interno del codice html
document.querySelector('h1').innerHTML = password;