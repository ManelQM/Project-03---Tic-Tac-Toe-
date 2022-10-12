
let casillas = Array.from(document.getElementsByClassName("activebox"));
// let player1 = new Player;
// let player2 = new Player;
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





casillas.map((casilla)=> {                      // Mapeo casilla - al ser un array recorre cada uno de los elementos
    casilla.addEventListener("click",()=>{      // Función flecha que al efectuarse un click se ejecuta un condicional. 
        if(casilla.innerHTML == ""){            // En dicho condicional se pondera que si el elemento casilla html está vacío 
            casilla.innerHTML = (interruptor) ? "X" : "O"; // se puede poner ficha. 
            interruptor = !interruptor; // Condición para que se produzca el switch entre jugadores 
            index++;
        };
    });
});


const checkwinner = () => {
    let casilla = casillas;
    casilla.forEach( cas => console.log (cas)); 
}




lines.onclick = () => {
    document.getElementById 

}

