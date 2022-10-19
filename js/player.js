class Player {

    constructor(nombre,tipo){
        this.nombre = nombre;
        this.tipo = tipo;
    }

};

let inputNamePlayer1 = document.getElementById("elementName1");

let inputNamePlayer2 = document.getElementById("elementName2");

const playertypeselect = () => {

let player1 = new Player(inputNamePlayer1.value,"human");
let player2 = new Player(inputNamePlayer2.value,"human");

sessionStorage.setItem("dataPlayer1",JSON.stringify(player1));
sessionStorage.setItem("dataPlayer2",JSON.stringify(player2));

window.open("../pages/panel.html","_self");
};



