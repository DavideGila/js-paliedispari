// Palindroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma
alert('Inserisci una parola!');

const btn = document.querySelector('button');
    
btn.addEventListener('click', palindroma);

function palindroma(){
    const inputEl = document.getElementById('text').value;
    let parola = inputEl;
    let parolaInversa = '';
    console.log(parola);
    for (let i = parola.length - 1; i >= 0; i--) {
        console.log(parola[i]);
        parolaInversa += parola[i]
    } 
    console.log(parolaInversa);
    let msg;
    (parola === parolaInversa) ? msg = 'Questa parola è palindroma' : msg = 'Questa parola non è palindroma';
    console.log(msg);
}