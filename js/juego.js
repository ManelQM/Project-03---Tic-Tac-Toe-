
let playerData1 = JSON.parse(sessionStorage.getItem("dataPlayer1"));
let playerData2 = JSON.parse(sessionStorage.getItem("dataPlayer2"));

let nameScreen1 = document.getElementById("titan1");
let nameScreen2 = document.getElementById("titan2");

let data1 = JSON.parse(sessionStorage.getItem("dataPlayer1"));
let data2 = JSON.parse(sessionStorage.getItem("dataPlayer2"));

let typeScreen1 = document.getElementById("tipoTitan1");
let typeScreen2 = document.getElementById("tipoTitan2");

let turnScreen1 = document.getElementById("turnoTitan1");
let turnScreen2 = document.getElementById("turnoTitan2");

nameScreen1.innerHTML = `Player1 : ${data1.nombre}`;
nameScreen2.innerHTML = `Player2 : ${data2.nombre}`;

typeScreen1.innerHTML = `Player1 : ${data1.tipo}`;
typeScreen2.innerHTML = `Player2 : ${data2.tipo}`;

var board = ["", "", "", "", "", "", "", "", ""];

let boxes = Array.from(document.getElementsByClassName("activebox"));

var turno1 = 100;
var turno2 = 100;

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

      board[box.id] = interruptor ? "X" : "O";

      if(interruptor){

       
        turno1--;
      }else{

   
        turno2--;
      }

      console.log(turno1, turno2);

      checkWinTurnos();


      interruptor = !interruptor;

      if(!interruptor){
        turnScreen1.innerHTML = `Next turn`;
        turnScreen2.innerHTML = `Turn : O`; 
      }else{
        turnScreen1.innerHTML = `Turn : X`;
        turnScreen2.innerHTML = `Next turn`;
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


      if (board[winnerCombos[numerador][iterador]] == simbolo) {
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