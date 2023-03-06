 /* Consegna
L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
 */
 
 const gridDom = document.getElementById ('grid');

 const button = document.getElementById ('playButton')

 let numeroMassimoCaselle = 100;
 
 let difficoltà = document.getElementById ('difficoltà')
 if (difficoltà.value == 100) {
            
            numeroMassimoCaselle = 100;
            button.addEventListener ('click', 
            function ()  {

                let i = 0;
                console.log (difficoltà.value)

                gridDom.innerHTML = '';


                while ( i < numeroMassimoCaselle) {
            
                let currentSquare = createNewSquare (i + 1);
        
                gridDom.append(currentSquare);


                currentSquare.addEventListener ('click',
                    function () {
                        currentSquare.classList.remove ('square')
                        currentSquare.classList.add ('square-click')
                        console.log (currentSquare.innerHTML)
                    }
                )
        
                i++;
                

                }

            }
        
        );




        function createNewSquare (number) {
            const currentElement = document.createElement('div');
            currentElement.classList.add('square');
            currentElement.innerHTML = number;
            return currentElement;
        }

 } else if (difficoltà.value == 81) {

    numeroMassimoCaselle = 81;
    button.addEventListener ('click', 
    function ()  {

        let i = 0;
        console.log (difficoltà.value)

        gridDom.innerHTML = '';


        while ( i < numeroMassimoCaselle) {
    
        let currentSquare2 = createNewSquare2 (i + 1);

        gridDom.append(currentSquare2);


        currentSquare2.addEventListener ('click',
            function () {
                currentSquare2.classList.remove ('square2')
                currentSquare2.classList.add ('square-click2')
                console.log (currentSquare2.innerHTML)
            }
        )

        i++;
        

        }

    }

);




function createNewSquare2 (number) {
    const currentElement2 = document.createElement('div');
    currentElement2.classList.add('square2');
    currentElement2.innerHTML = number;
    return currentElement2;
}

 } else if (difficoltà.value == 64) {
    numeroMassimoCaselle = 64;
    button.addEventListener ('click', 
    function ()  {

        let i = 0;
        console.log (difficoltà.value)

        gridDom.innerHTML = '';


        while ( i < numeroMassimoCaselle) {
    
        let currentSquare3 = createNewSquare3 (i + 1);

        gridDom.append(currentSquare3);


        currentSquare3.addEventListener ('click',
            function () {
                currentSquare3.classList.remove ('square3')
                currentSquare3.classList.add ('square-click3')
                console.log (currentSquare3.innerHTML)
            }
        )

        i++;
        

        }

    }

);




function createNewSquare3 (number) {
    const currentElement3 = document.createElement('div');
    currentElement3.classList.add('square3');
    currentElement3.innerHTML = number;
    return currentElement3;
} 
 };



for (x = 0 ; x < 4231; x++)

x = 0 

while ( x < 4231) {

    x++;
}

