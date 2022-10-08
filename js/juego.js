let tablero = [["O","O","X"],["X","X","X"],["O","","X"]];

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


const checkVictoria = () => {

  

};

const turntime = () => {


}

leerTablero();



