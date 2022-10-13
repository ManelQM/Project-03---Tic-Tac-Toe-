let tablero = ["","","","","","","","","",];
let gamearena = Array.from(document.getElementsByClassName("activebox")); 
let interruptor = true; 
let winnerCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

gamearena.map((gametile)=> {                      
gametile.addEventListener("click",()=>{      
if(gametile.innerHTML == ""){           
gametile.innerHTML = (interruptor) ? "X" : "O"; 
interruptor = !interruptor; 
    };  
   
  });

 });
 
 checkwinner();
 const checkwinner = () => { 
    for (let i = 0; i < winnerCombos.length; i++) {
        winnerCombos[i]; 
        let tilewinner1 = tablero[winnerCombos[0]];
        let tilewinner2 = tablero[winnerCombos[1]];
        let tilewinner3 = tablero[winnerCombos[2]];
     if (tilewinner1 == '' || tilewinner2 == '' || tilewinner3 == '') {
            return;
        }
        if ((tilewinner1 == tilewinner2) && (tilewinner2 == tilewinner3)) {
            alert ('has ganado');
            }   
    }
    
};

const playerturn = () => {
    document.getElementById

} 



























//  handleResultValidation(); 
//  playerWins();
//  const highLight = (combo) => {
//     combo.forEach((idx) => gamearena[idx].classList.add("highlight"))
//  }
//  const playerWins = () =>{
//     let checkWinner = gamecombowinner.find((combo)=>combo.every((idx) => gamearena[idx].textContent === gameswitchbetweenplayers));
//     if(checkWinner){                    
//         highLight(checkWinner);
//         gameOver();
//     }else if(boardFull()){
//         alert("Tie!");
//     }
// };

// const leerTablero = () => {
//     for(let x = 0; x < gamearena.length; x++){

//         for(let i = 0; i < gamearena.length; i++){ 
//             checkwinner();
//         }
    
//     }
  
// };

// const checkwinner = () => {
//     //horizontales
//     if (tablero[0][0] == tablero[0][1] && tablero [0][2]) {
//         alert ('has ganado'); 
//     }else if (tablero [0][1] == tablero[1][1] && tablero [2][1]){
//         alert ('has ganado');
//     }else if (tablero [0][2] == tablero [1][2] && tablero [2][2]) {
//         alert ('has ganado');
//     // verticales
//     }else if (tablero [0][0] == tablero [0][1] && tablero [0][2]) {
//         alert ('has ganado')
//     }else if (tablero [1][0] == tablero[1][1] && tablero[1][2]) {
//         alert ('has ganado')
//     }else if (tablero[2][0] == tablero[2][1] && tablero[2][2]) {
//         alert ('has ganado')
//     //diagonales    
//     }else if ( tablero[0][0] == tablero[1][1] &&tablero[2][2]){
//         alert ('has ganado')
//     }else if (tablero [2][0] == tablero[1][1] && tablero[0][2]){
//         alert ('has ganado')
//     }
// };  
// leerTablero();

// function handleResultValidation() {
//     for (let i = 0; i < gamecombowinner.length; i++) { // Itera cada uno de las posibles combinaciones ganadores
//       const winCondition = gamecombowinner[i] // Guarda la combinación por ejemplo: [0, 1, 2]
//       let position1 = tablero[winCondition[0]],
//            position2 = tablero[winCondition[1]],
//            position3 = tablero[winCondition[2]] // Almacena el valor del estado actual del juego según las posiciones de winCondition
  
//       if (position1 === '' || position2 === '' || position3 === '') {
//         continue; // Si hay algún valor vacio nadie ha ganado aún
//       }
//       if (position1 === position2 && position2 === position3) {
//         // Si todas las posiciones coinciden entonces, dicho jugador ha ganado la partida
//         alert("has ganado");
//         break
//       }
//     }
// }

























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

