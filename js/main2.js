 /* Consegna
Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco (attenzione: non bisogna copiare tutta la cartella dell’esercizio ma solo l’index.html, e le cartelle js/ css/ con i relativi script e fogli di stile, per evitare problemi con l’inizializzazione di git).
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
In seguito l’utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l’utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.
 */
 
const gridDom = document.getElementById ('grid');

const button = document.getElementById ('playButton')

let numeroMassimoCaselle = document.getElementById ('difficoltà');


let numberBlacklist = []; 

let punteggio = 0;

document.getElementById('score').innerHTML = `Il tuo punteggio è di: ${punteggio}`

button.addEventListener('click',
    function () {

      document.getElementById('titolo').innerHTML = ''

      let punteggio = 0;

      document.getElementById('score').innerHTML = `Il tuo punteggio è di: ${punteggio}`;


      numberBlacklist = [];

      for (let c = 1; c <= 16; c++) {

         const generazioneBombe = generateUniqueRandomNumber (numberBlacklist, 1, difficoltà.value);
         numberBlacklist.push(generazioneBombe);
      }
      console.log (numberBlacklist)
      let click = true
        gridDom.innerHTML = '';
        for (let i = 0; i < numeroMassimoCaselle.value; i++) {
            let currentSquare = createNewSquare(i + 1, numeroMassimoCaselle.value);
            gridDom.append(currentSquare);

            if (numberBlacklist.includes(i + 1)) {
                currentSquare.classList.add('bomb');
            }
            currentSquare.addEventListener('click',
                function () {
                     if (click == true) {
                        if (numberBlacklist.includes(i + 1)) {
                           click = false
                           let numeriBombe = document.querySelectorAll('.bomb');
                           console.log(numeriBombe)
                           currentSquare.classList.add('bomb-click');
                           numeriBombe.forEach(numeriBombe => {
                              numeriBombe.classList.add('revealed');
                            });
                            document.getElementById('titolo').innerHTML = 'HAI PERSO!'
                        } else {
                           let numeriBombe = document.querySelectorAll('.bomb');
                           currentSquare.classList.add('square-click')
                           console.log(currentSquare.innerHTML);
                           punteggio++;
                           document.getElementById('score').innerHTML = `Il tuo punteggio è di: ${punteggio}`;
                           if (punteggio == (difficoltà.value - numeriBombe)) {
                              alert ('Hai Vinto! ')
                           }
                        }

                        }

                  }
               
            )
        }
    }
);





function createNewSquare (number, valoreClasse) {
   const currentElement = document.createElement('div');
   currentElement.classList.add(`square-${valoreClasse}`);
   currentElement.innerHTML = number;
   return currentElement;
}






function generateUniqueRandomNumber(blacklist, min, max) {

    let isValidNumber = false;
    let randomNumber;

    while (!isValidNumber) {
        randomNumber = generateRandomNumber(min, max);
        if (!blacklist.includes(randomNumber)) {
            isValidNumber = true;
        }
    }

    return randomNumber;

}

function generateRandomNumber(min, max) {
    const number = Math.floor(Math.random() * (max - min +1)) + min;
    return number;
}







