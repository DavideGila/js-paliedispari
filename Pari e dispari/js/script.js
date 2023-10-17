// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (ovviamente usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (ovviamente  usando una funzione)
// Dichiariamo chi ha vinto.

btnEven = document.getElementById('pari');
btnOdd = document.getElementById('dipari');
chooseNumber = parseInt(document.getElementById('text').value);























function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
};