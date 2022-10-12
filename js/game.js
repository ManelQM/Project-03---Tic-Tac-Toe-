
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
            index++;
        };
    });
});

const leerTablero = () => {
    for(let x = 0; x < tablero.length; x++){

        for(let i = 0; i < tablero.length; i++){} // leer tablero llamará a checkwinner

    }
}    
const checkwinner = () => {
    let casilla = casillas;
    casilla.forEach( cas => console.log (cas)); 
}

tiles.onclick = () => {
    document.getElementById 

}

