
let playerData1 = JSON.parse(sessionStorage.getItem("dataPlayer1"));
let playerData2 = JSON.parse(sessionStorage.getItem("dataPlayer2"));

let nameScreen1 = document.getElementById("p1");
let nameScreen2 = document.getElementById("p2");

let data1 = JSON.parse(sessionStorage.getItem("dataPlayer1"));
let data2 = JSON.parse(sessionStorage.getItem("dataPlayer2"));

let typeScreen1 = document.getElementById("typeP1");
let typeScreen2 = document.getElementById("typeP2");

let turnScreen1 = document.getElementById("turnP1");
let turnScreen2 = document.getElementById("turnP2");

nameScreen1.innerHTML = `Player1 : ${data1.nombre}`;
nameScreen2.innerHTML = `Player2 : ${data2.nombre}`;

typeScreen1.innerHTML = `Player1 : ${data1.tipo}`;
typeScreen2.innerHTML = `Player2 : ${data2.tipo}`;

var board = ["", "", "", "", "", "", "", "", ""];

let boxes = Array.from(document.getElementsByClassName("activebox"));

var turn1 = 100;
var turn2 = 100;

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
    if ((box.innerHTML == "") && (turn1 > 0) || (turn2 > 0)) {
      box.innerHTML = interruptor ? "X" : "O";

      board[box.id] = interruptor ? "X" : "O";

      if(interruptor){

        turn1--;

      }else{
        
        turn2--;

      }

      console.log(turn1, turn2);

      checkWinTurn();


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

const checkWinTurn= () => {
  if (interruptor == true) {
    checkWinner("X");
  } else {
    checkWinner("O");
  }
};

const checkWinner = (symbol) => {
  let contador = 0;



  for (let numerador = 0; numerador < winnerCombos.length; numerador++) {

    for (
      let iterador = 0;
      iterador < winnerCombos[numerador].length;
      iterador++
    ) {


      if (board[winnerCombos[numerador][iterador]] == symbol) {
        contador++;

        if (contador == 3) {

          setTimeout(() => {
            let datosGuardados1 = JSON.parse(
              sessionStorage.getItem("dataPlayer1")
            );

            let datosGuardados2 = JSON.parse(
              sessionStorage.getItem("dataPlayer2")
            );



            let winner = (symbol == "X") ? datosGuardados1.nombre : datosGuardados2.nombre;



            sessionStorage.setItem("titan", winner);

            window.open("../pages/winner.html", "_self");
          }, 1000);
        }
      }
    }

    contador = 0;
  }
};