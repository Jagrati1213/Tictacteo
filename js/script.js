
var boxes = document.querySelectorAll(".box div");
var texts = document.querySelectorAll(".box-text");
var turnMsg = document.querySelector(".turn h3 span");
// player signs...
var Xsign = document.querySelector(".x-sign");
var Osign = document.querySelector(".o-sign");
// player images..
var Ximg = document.querySelector(".image-x");
var Oimg = document.querySelector(".image-o");
// player counts...
var Xcount = document.querySelector(".x-count span");
var Ocount = document.querySelector(".o-count span");

// showing the player as X
var current_player = "X";
turnMsg.innerHTML = `${current_player} 's Move`;

// music...
let audioTurn = new Audio("ting.mp3");
let gameover = new Audio("gameover.mp3");

//change the turn...
function chnageTurn() {

    if (current_player === "X") {

        Xsign.classList.add("sign-chnge");
        Ximg.classList.add("img-chnge");

        Osign.classList.remove("sign-chnge");
        Oimg.classList.remove("img-chnge");

    } else {

        Osign.classList.add("sign-chnge");
        Oimg.classList.add("img-chnge");

        Xsign.classList.remove("sign-chnge");
        Ximg.classList.remove("img-chnge");
    }
    return current_player === "X" ? current_player = "O" : current_player = "X";
}
//winner check..
function winner() {
    if (
        //horizontal..
        (document.getElementById("0").innerHTML == "X" && document.getElementById("1").innerHTML == "X" && document.getElementById("2").innerHTML == "X") ||
        (document.getElementById("3").innerHTML == "X" && document.getElementById("4").innerHTML == "X" && document.getElementById("5").innerHTML == "X") ||
        (document.getElementById("6").innerHTML == "X" && document.getElementById("7").innerHTML == "X" && document.getElementById("8").innerHTML == "X") ||
        // vartical..
        (document.getElementById("0").innerHTML == "X" && document.getElementById("3").innerHTML == "X" && document.getElementById("6").innerHTML == "X") ||
        (document.getElementById("1").innerHTML == "X" && document.getElementById("4").innerHTML == "X" && document.getElementById("7").innerHTML == "X") ||
        (document.getElementById("2").innerHTML == "X" && document.getElementById("5").innerHTML == "X" && document.getElementById("6").innerHTML == "X") ||
        //vikarnd...
        (document.getElementById("0").innerHTML == "X" && document.getElementById("4").innerHTML == "X" && document.getElementById("8").innerHTML == "X") ||
        (document.getElementById("2").innerHTML == "X" && document.getElementById("4").innerHTML == "X" && document.getElementById("6").innerHTML == "X")
    ) {
        console.log("player X won");
        turnMsg.innerHTML = "Winner is X";
        boxes.forEach(e => {
            e.style.pointerEvents = "none";
        });
        gameover.play();
        // document.querySelector(".x-count").innerHTML=q++;
    }
    else if (  //horizontal..
        (document.getElementById("0").innerHTML == "O" && document.getElementById("1").innerHTML == "O" && document.getElementById("2").innerHTML == "O") ||
        (document.getElementById("3").innerHTML == "O" && document.getElementById("4").innerHTML == "O" && document.getElementById("5").innerHTML == "O") ||
        (document.getElementById("6").innerHTML == "O" && document.getElementById("7").innerHTML == "O" && document.getElementById("8").innerHTML == "O") ||
        // vartical..
        (document.getElementById("0").innerHTML == "O" && document.getElementById("3").innerHTML == "O" && document.getElementById("6").innerHTML == "O") ||
        (document.getElementById("1").innerHTML == "O" && document.getElementById("4").innerHTML == "O" && document.getElementById("7").innerHTML == "O") ||
        (document.getElementById("2").innerHTML == "O" && document.getElementById("5").innerHTML == "O" && document.getElementById("6").innerHTML == "O") ||
        //vikarnd...
        (document.getElementById("0").innerHTML == "O" && document.getElementById("4").innerHTML == "O" && document.getElementById("8").innerHTML == "O") ||
        (document.getElementById("2").innerHTML == "O" && document.getElementById("4").innerHTML == "O" && document.getElementById("6").innerHTML == "O")
    ) {
        console.log("player O win");
        turnMsg.innerHTML = "Winner is O";
        boxes.forEach(e => {
            e.style.pointerEvents = "none";
        });
        gameover.play();
        //Ocount.innerHTML=p++;
    }
    // Here, Checking about Tie
    else if (
        (document.getElementById("0").innerHTML == 'X' || document.getElementById("0").innerHTML=='O') && 
        (document.getElementById("1").innerHTML == 'X' || document.getElementById("1").innerHTML=='O') && 
        (document.getElementById("2").innerHTML == 'X' || document.getElementById("2").innerHTML=='O') &&
        (document.getElementById("3").innerHTML == 'X' || document.getElementById("3").innerHTML=='O') &&
        (document.getElementById("4").innerHTML == 'X' || document.getElementById("4").innerHTML=='O') &&
        (document.getElementById("5").innerHTML == 'X' || document.getElementById("5").innerHTML=='O') &&
        (document.getElementById("6").innerHTML == 'X' || document.getElementById("6").innerHTML=='O') && 
        (document.getElementById("7").innerHTML == 'X' || document.getElementById("7").innerHTML=='O') && 
        (document.getElementById("8").innerHTML == 'X' || document.getElementById("8").innerHTML=='O')
        )
         {
            console.log("Tie match");
            turnMsg.innerHTML = "TIE Match";
            boxes.forEach(e => {
                e.style.pointerEvents = "none";
            });
            gameover.play();
    }
}
//game locic ...
function start() {
    boxes.forEach(box => {
        // box must be empty & able..
        box.innerHTML = "";
        box.style.pointerEvents = "visible";

        box.addEventListener("click", () => {
            box.innerHTML = current_player;
            turnMsg.innerHTML = `${current_player} 's Move`;
            current_player = chnageTurn();
            audioTurn.play();
            winner();
            box.style.pointerEvents = "none";
        });
    });
};
//  restart the game...
function restart() {
    document.body.onload(start());
    console.log("done")
}
// inputs.forEach(element => {
//     element.addEventListener("click", () => {
//         console.log(inputs);

//         if (element.value==="x") {
//             inputs[1].style.display="none";
//             element.style.pointerEvents="none";

//         } else {
//             inputs[0].style.display="none";
//             element.style.pointerEvents="none";

//         }
//         Start(element.value);

//     });
// });