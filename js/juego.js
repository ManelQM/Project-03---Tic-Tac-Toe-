

let datosJugador1 = JSON.parse(sessionStorage.getItem("dataPlayer1"));
let datosJugador2 = JSON.parse(sessionStorage.getItem("dataPlayer2"));





let tablero = ["","","","","","","","","",];



let boxes = Array.from(document.getElementsByClassName("activebox"));
let interruptor = true;
// let turnplayer1 = true; 
// let turnplayer2 = false;

boxes.map((box)=> {                      
    box.addEventListener("click",()=>{   
        if(box.innerHTML == ""){  
            box.innerHTML = (interruptor) ? "X" : "O";       
            tablero[box.id] = (interruptor) ? "X" : "O";
            console.log(tablero);     
            interruptor = !interruptor; 
        };     
    });
});






