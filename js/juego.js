let tablero = [["","",""],["","",""],["","",""]];
let boxes = Array.from(document.getElementsByClassName("activebox"));
let interruptor = true;
// let turnplayer1 = true; 
// let turnplayer2 = false;


boxes.map((box)=> {                      // Mapeo casilla - al ser un array recorre cada uno de los elementos
    box.addEventListener("click",()=>{     // Función flecha que al efectuarse un click se ejecuta un condicional. 
        if(box.innerHTML == ""){            // En dicho condicional se pondera que si el elemento casilla html está vacío 
            box.innerHTML = (interruptor) ? "X" : "O"; // se puede poner ficha. 
            interruptor = !interruptor; // Condición para que se produzca el switch entre jugadores 
        };     
    });
});

/* Declaración tablero*/

const leerTablero = () => {
    for(let x = 0; x < tablero.length; x++){

        for(let i = 0; i < tablero.length; i++){
            
            // if(tablero[x][i] == "X"){
             
            //     console.log(`estoy en X = `, x, " y en Y = ", i, " aqui hay una X");
            // }else if (tablero[x][i] == "O") { 
            //     console.log (`estoy en X = `, x, " y en Y = ", i, " aqui hay una O")
            
            // }else{
    
            //     console.log (`estoy en X = `, x, " y en Y = ", i, " aqui no hay nada")
            // }
    
        }
    
    }
  
};

leerTablero();

/*función ganador*/

const checkwinner = () => {
    //horizontales
    if (tablero[0][0] == tablero[1][0] && tablero [2][0]) {
        alert ('has ganado'); 
    }else if (tablero [0][1] == tablero[1][1] && tablero [2][1]){
        alert ('has ganado');
    }else if (tablero [0][2] == tablero [1][2] && tablero [2][2]) {
        alert ('has ganado');
    // verticales
    }else if (tablero [0][0] == tablero [0][1] && tablero [0][2]) {
        alert ('has ganado')
    }else if (tablero [1][0] == tablero[1][1] && tablero[1][2]) {
        alert ('has ganado')
    }else if (tablero[2][0] == tablero[2][1] && tablero[2][2]) {
        alert ('has ganado')
    //diagonales    
    }else if ( tablero[0][0] == tablero[1][1] &&tablero[2][2]){
        alert ('has ganado')
    }else if (tablero [2][0] == tablero[1][1] && tablero[0][2]){
        alert ('has ganado')
    }
};

// const turntime = () => {

//     if (turnplayer1 == true ) {
//         alert ('turno player1');
//         turnplayer1 = false;
//         turnplayer2 = true;  
//     }else if (turnplayer1 == true) {
//         alert ('turno player2'); 
//         turnplayer1=true;
//         turnplayer2=false; 
//     }

//     }




// leerTablero();

checkwinner();
turntime(); 