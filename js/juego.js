
let datosJugador1 = JSON.parse(sessionStorage.getItem("dataPlayer1"));
let datosJugador2 = JSON.parse(sessionStorage.getItem("dataPlayer2"));

let nombrePantalla1 = document.getElementById("titan1");
let nombrePantalla2 = document.getElementById("titan2");

let datos1 = JSON.parse(sessionStorage.getItem("dataPlayer1"));
let datos2 = JSON.parse(sessionStorage.getItem("dataPlayer2"));

let tipoPantalla1 = document.getElementById("tipoTitan1");
let tipoPantalla2 = document.getElementById("tipoTitan2");

let turnoPantalla1 = document.getElementById("turnoTitan1");
let turnoPantalla2 = document.getElementById("turnoTitan2");

nombrePantalla1.innerHTML = `Player1 : ${datos1.nombre}`;
nombrePantalla2.innerHTML = `Player2 : ${datos2.nombre}`;

tipoPantalla1.innerHTML = `Player1 : ${datos1.tipo}`;
tipoPantalla2.innerHTML = `Player2 : ${datos2.tipo}`;

var tablero = ["", "", "", "", "", "", "", "", ""];

let boxes = Array.from(document.getElementsByClassName("activebox"));

var turno1 = 3;
var turno2 = 3;

let interruptor = true;

let winnerCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];



boxes.map((box) => {
  box.addEventListener("click", () => {
    if ((box.innerHTML == "") && (turno1 > 0) || (turno2 > 0)) {
      box.innerHTML = interruptor ? "X" : "O";

      tablero[box.id] = interruptor ? "X" : "O";

      if(interruptor){

       
        turno1--;
      }else{

   
        turno2--;
      }

      console.log(turno1, turno2);

      checkWinTurnos();


      interruptor = !interruptor;

      if(!interruptor){
        turnoPantalla1.innerHTML = `Next turn`;
        turnoPantalla2.innerHTML = `Turn : O`; 
      }else{
        turnoPantalla1.innerHTML = `Turn : X`;
        turnoPantalla2.innerHTML = `Next turn`;
      }
    }
  });
});

const checkWinTurnos = () => {
  if (interruptor == true) {
    checkWinner("X");
  } else {
    checkWinner("O");
  }
};

const checkWinner = (simbolo) => {
  let contador = 0;



  for (let numerador = 0; numerador < winnerCombos.length; numerador++) {

    for (
      let iterador = 0;
      iterador < winnerCombos[numerador].length;
      iterador++
    ) {


      if (tablero[winnerCombos[numerador][iterador]] == simbolo) {
        contador++;

        if (contador == 3) {

          setTimeout(() => {
            let datosGuardados1 = JSON.parse(
              sessionStorage.getItem("dataPlayer1")
            );

            let datosGuardados2 = JSON.parse(
              sessionStorage.getItem("dataPlayer2")
            );



            let winner = (simbolo == "X") ? datosGuardados1.nombre : datosGuardados2.nombre;



            sessionStorage.setItem("titan", winner);

            window.open("../pages/winner.html", "_self");
          }, 1000);
        }
      }
    }

    contador = 0;
  }
};