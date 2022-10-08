let tablero = [["X","X","X"],["X","X","X"],["O","","X"]];
let turno = 0; 

const leerTablero = () => {
    for(let x = 0; x < tablero.length; x++){

        for(let i = 0; i < tablero.length; i++){
     
    
            if(tablero[x][i] == "X"){
             
                console.log(`estoy en X = `, x, " y en Y = ", i, " aqui hay una X");
            }else if (tablero[x][i] == "O") { 
                console.log (`estoy en X = `, x, " y en Y = ", i, " aqui hay una O")
            
            }else{
    
                console.log (`estoy en X = `, x, " y en Y = ", i, " aqui no hay nada")
            }
    
        }
    
    }

};

leerTablero();

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
    }else if (tablero[2][0] == talbero[2][1] && tablero[2][2]) {
        alert ('has ganado')
    //diagonales    
    }else if ( tablero[0][0] == tablero[1][1] &tablero[2][2]){
        alert ('has ganado')
    }else if (tablero [2][0] == tablero[1][1] & tablero[0][2]){
        alert ('has ganado')
    }


  

};

const turntime = () => {


}

leerTablero();

checkwinner();
