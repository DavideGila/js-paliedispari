// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (ovviamente usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (ovviamente  usando una funzione)
// Dichiariamo chi ha vinto.

const btnEven = document.getElementById('pari');
const btnOdd = document.getElementById('dipari');

btnEven.addEventListener('click', function(){
    const chooseNum = parseInt(document.getElementById('numbers').value);
    let userNum = chooseNum;
    let computerNum = getRndInteger(1,5);
    let msg;
    let somma = userNum + computerNum;
    if (somma % 2 === 0) {
        msg = 'Hai vinto'
    } else {
        msg = 'Hai perso'
    }
    console.log(userNum, computerNum, somma);
    console.log(msg);
})






















function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
};