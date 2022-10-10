
let tiles = Array.from(document.getElementsByClassName("rectangulo"));

let player1 = new Player("Schopenhauer","human");
let player2 = new Player("Trantor","cpu");

//CLASS PLAYER 

class Player {

    constructor(nombre,tipo){
        this.numerofichas = 3;
        this.nombre = nombre;
        this.tipo = tipo;
        this.mover = mover; 
        this.desplazar = desplazar; 
    }

};




let interruptor = true;

casillas.map((casilla, index)=> {
    casilla.addEventListener("click",()=>{
        if(casilla.innerHTML == ""){
            casilla.innerHTML = (interruptor) ? "X" : "O";
            interruptor = !interruptor;
            index++;
            //Comprobamos en otra funcion si hay un ganador.......
        };
    });
});





