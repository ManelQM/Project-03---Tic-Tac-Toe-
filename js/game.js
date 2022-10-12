
let gamearena = Array.from(document.getElementsByClassName("activebox"));
let gameswitchbetweenplayers = true;

































// let boxes = Array.from(document.getElementsByClassName("activebox"));
// let player1 = "";
// let player2 = "";
// let interruptor = true;

// let tablero = [["X","X",""],["","",""],["","X",""]];

// const winnerCombos = [ 
// [0, 1, 2],
// [3, 4, 5],
// [6, 7, 8],
// [0, 3, 6],
// [1, 4, 7],
// [2, 5, 8],
// [0, 4, 8],
// [2, 4, 6]]; 


// //CLASS PLAYER 

// class Player {

//     constructor(nombre,tipo){
//         this.coinnumber = 3;
//         this.name = nombre;
//         this.type = tipo;
//         this.move = mover; 
//         this.drag = desplazar; 
//     }

// };

// boxes.map((box)=> {                      // Mapeo casilla - al ser un array recorre cada uno de los elementos
//     box.addEventListener("click",()=>{  
//         checkwinner();    // Función flecha que al efectuarse un click se ejecuta un condicional. 
//         if(box.innerHTML == ""){            // En dicho condicional se pondera que si el elemento casilla html está vacío 
//             box.innerHTML = (interruptor) ? "X" : "O"; // se puede poner ficha. 
//             interruptor = !interruptor; // Condición para que se produzca el switch entre jugadores 
            
//         };
       
//     });
// });

// const readingWinnerCombos = () => {
//     for(let x = 0; x < winnerCombos.length; x++){

//         for(let i = 0; i < winnerCombos.length; i++){
          
//         } 
//     }
// }    
// readingWinnerCombos();



// const checkwinner = () => {
//     //horizontales
//     if (winnerCombos[0][0] == winnerCombos[1][0] && winnerCombos [2][0]) {
//         alert ('has ganado'); 
//     }else if (boxes [0][1] == boxes[1][1] && boxes [2][1]){
//         alert ('has ganado');
//     }else if (boxes [0][2] == boxes [1][2] && boxes [2][2]) {
//         alert ('has ganado');
//     // verticales
//     }else if (boxes [0][0] == boxes [0][1] && boxes[0][2]) {
//         alert ('has ganado')
//     }else if (boxes [1][0] == boxes[1][1] && boxes[1][2]) {
//         alert ('has ganado')
//     }else if (boxes[2][0] == boxes[2][1] && boxes[2][2]) {
//         alert ('has ganado')
//     //diagonales    
//     }else if ( boxes[0][0] == boxes[1][1] &&boxes[2][2]){
//         alert ('has ganado')
//     }else if (boxes [2][0] == boxes[1][1] && boxes[0][2]){
//         alert ('has ganado')
//     }
// };



// // tiles.onclick = () => {
// //     document.getElementById 

// // }

