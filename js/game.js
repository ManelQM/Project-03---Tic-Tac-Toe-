
let boxes = Array.from(document.getElementsByClassName("activebox"));
let player1 = "";
let player2 = "";
let interruptor = true;


//CLASS PLAYER 

class Player {

    constructor(nombre,tipo){
        this.coinnumber = 3;
        this.name = nombre;
        this.type = tipo;
        this.move = mover; 
        this.drag = desplazar; 
    }

};

boxes.map((box)=> {                      // Mapeo casilla - al ser un array recorre cada uno de los elementos
    box.addEventListener("click",()=>{      // Función flecha que al efectuarse un click se ejecuta un condicional. 
        if(box.innerHTML == ""){            // En dicho condicional se pondera que si el elemento casilla html está vacío 
            box.innerHTML = (interruptor) ? "X" : "O"; // se puede poner ficha. 
            interruptor = !interruptor; // Condición para que se produzca el switch entre jugadores 
        };
    });
});

const leerTablero = () => {
    for(let x = 0; x < boxes.length; x++){

        for(let i = 0; i < boxes.length; i++){
           
            
                } 
    }
}    




const checkwinner = () => {
    //horizontales
    if (boxes[0][0] == boxes[1][0] && boxes [2][0]) {
        alert ('has ganado'); 
    }else if (boxes [0][1] == boxes[1][1] && boxes [2][1]){
        alert ('has ganado');
    }else if (boxes [0][2] == boxes [1][2] && boxes [2][2]) {
        alert ('has ganado');
    // verticales
    }else if (boxes [0][0] == boxes [0][1] && boxes[0][2]) {
        alert ('has ganado')
    }else if (boxes [1][0] == boxes[1][1] && boxes[1][2]) {
        alert ('has ganado')
    }else if (boxes[2][0] == boxes[2][1] && boxes[2][2]) {
        alert ('has ganado')
    //diagonales    
    }else if ( boxes[0][0] == boxes[1][1] &&boxes[2][2]){
        alert ('has ganado')
    }else if (boxes [2][0] == boxes[1][1] && boxes[0][2]){
        alert ('has ganado')
    }
};


tiles.onclick = () => {
    document.getElementById 

}

