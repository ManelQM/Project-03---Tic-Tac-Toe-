

// let player1 = new Player;
// let player2 = new Player;


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
let casillas = Array.from(document.getElementsByClassName("activebox"));

//Hemos usado map porque nos permite tratar a cada elemento 
//del array casillas como un objeto (propiedades + metodos);

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








