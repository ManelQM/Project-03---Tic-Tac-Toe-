class Player {

    constructor(nombre,tipo){
        this.numerofichas = 3;
        this.nombre = nombre;
        this.tipo = tipo;
    }

    poner(){ 

    }

    desplazar(){

    }

};


let player1InputName = document.getElementById("inputNombre1");

let player2InputName = document.getElementById("inputNombre2");



const jugadoresElegidos = () => {


    console.log(player1InputName.value);
    console.log(player2InputName.value);

    let player1 = new Player(player1InputName.value,"human");
    let player2 = new Player(player2InputName.value,"cpu");

    sessionStorage.setItem("dataPlayer1",JSON.stringify(player1));
    sessionStorage.setItem("dataPlayer2",JSON.stringify(player2));

    window.open("../pages/panel.html","_self");
};



