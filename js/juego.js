/*Declaracion de variables, así como de los elementos para el DOM/BOM*/
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

// Definición del tablero
var board = ["", "", "", "", "", "", "", "", ""];

let boxes = Array.from(document.getElementsByClassName("activebox"));

var turn1 = 3;
var turn2 = 3;

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

/* Se realiza un mapeo de todo el tablero[] y procedemos a recoger los eventos sucedidos en el formulario 
y a su vez por la id para poder ser usado en js. Se comprueba si esta vacía la casilla así como si alguien ha ganado*/
boxes.map((box) => {
  box.addEventListener("click", () => {
    // if (si tengo menos de 6 fichas hare todo esto )
    if (
      (box.innerHTML == "" && turn1 > 0) || (box.innerHTML == "" && turn2 > 0)
    ) {
      box.innerHTML = interruptor ? "X" : "O";
      board[box.id] = interruptor ? "X" : "O";

      if (!interruptor) {
        turn1--;
        console.log (turn1);
      } else {
        turn2--;
        console.log (turn2);
      }

      checkWinTurn();
      sixsymbolsonboardp1();
      sixsymbolsonboardp2();
      /*switch entre los turnos*/
      interruptor = !interruptor;
      /*indicadores de turno durante la partida*/
      if (!interruptor) {
        turnScreen1.innerHTML = `Next`;
        turnScreen2.innerHTML = `Turn : O`;
      } else {
        turnScreen1.innerHTML = `Turn : X`;
        turnScreen2.innerHTML = `Next`;
      }
    }
  });
});

const sixsymbolsonboardp1 = () => {
  boxes.map((box) => {
    box.addEventListener("click", () => {""
      if (box.innerHTML == "X" && turn1 == 0) {
        box.innerHTML = "X" ? "" : "";
        board[box.id] = "X" ? "" : "";
        box.innerHTML = "O" ? "" : "";
        board[box.id] = "O" ? "" : "";
        turn1++;
      }
    });
  });
};
const sixsymbolsonboardp2 = () => {
  boxes.map((box) => {
    box.addEventListener("click", () => {
      if ((box.innerHTML == "O") && (turn2 == 0)) {
        box.innerHTML = "O" ? "" : "";
        board[box.id] = "O" ? "" : "";
        box.innerHTML = "X" ? "" : "";
        board[box.id] = "X" ? "" : "";
        turn2++
  }
});
})}
// UN metodo que controla que tengo como maximo seis fichas
// un metodo que me permita desmarcar una ficha de las puestas en el tablero que solo sean las correspondientes al jugador.
//Este metodo lo podré en el ELSE. Tiene que permitirme quitar una. Primero tendré que quitar una ficha y luego volverá al estado anterior.

const checkWinTurn = () => {
  if (interruptor == true) {
    checkWinner("X");
  } else {
    checkWinner("O");
  }
};

/* Recorrido de los dos arrays para comparar las combinaciones ganadoras*/
const checkWinner = (symbol) => {
  let contador = 0;

  for (let numerador = 0; numerador < winnerCombos.length; numerador++) {
    for (
      let iterador = 0;
      iterador < winnerCombos[numerador].length;
      iterador++
    ) {
      /*Comparación de tableros*/
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

            let winner =
              symbol == "X" ? datosGuardados1.nombre : datosGuardados2.nombre;

            sessionStorage.setItem("titan", winner);

            window.open("../Pages/winner.html", "_self");
          }, 1000);
        }
      }
    }

    contador = 0;
  }
};
