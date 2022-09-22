// add text in boxes
let boxes = document.querySelectorAll(".box div");

// player signs
var Xsign = document.querySelector(".x-sign");
var Osign = document.querySelector(".o-sign");

//player images
var Ximg = document.querySelector(".image-x");
var Oimg = document.querySelector(".image-o");

//BGM track
let bgm_track = new Audio();

//assume that the currPlayer is x
let player='X';

// display O & X on boxes
function display(){

    bgm_track.setAttribute('src','./sound-box/bgm.mp3');
    bgm_track.play();

    for (let i = 0; i < boxes.length; i++) {
      boxes[i].addEventListener("click",()=>{
            boxes[i].innerHTML = playerChange();
            boxes[i].style.pointerEvents ="none";
            winner(boxes[i].innerHTML);  
       })      
    }
}
display();

// chnaging the current player 
function playerChange(){
     player==='X'?(Xsign.classList.remove('sign-chnge'), Osign.classList.add('sign-chnge'),Ximg.classList.remove('img-chnge'),Oimg.classList.add('img-chnge')):(Xsign.classList.add('sign-chnge'),Osign.classList.remove('sign-chnge'),Ximg.classList.add('img-chnge'),Oimg.classList.remove('img-chnge'));
     return player==="X"?player="O":player="X";
}
//Check winner cond.
function winner(value){
    //turn msg who win's
    var turnMsg = document.querySelector(".turn h3 span");

    //step sound
    let step =new Audio('./sound-box/step.wav');
        step.play();

    //collect all boxes
    let b0 = document.getElementById('b0').innerText;
    let b1 = document.getElementById('b1').innerText;
    let b2 = document.getElementById('b2').innerText;
    let b3 = document.getElementById('b3').innerText;
    let b4 = document.getElementById('b4').innerText;
    let b5 = document.getElementById('b5').innerText;
    let b6 = document.getElementById('b6').innerText;
    let b7 = document.getElementById('b7').innerText;
    let b8 = document.getElementById('b8').innerText;

    let arr=[b0,b1,b2,b3,b4,b5,b6,b7,b8];

    if(
        (arr[0] == value && arr[1] == value && arr[2] == value )||
        (arr[3] == value && arr[4] == value && arr[5] == value )||
        (arr[6] == value && arr[7] == value && arr[8] == value )||
        (arr[0] == value && arr[3] == value && arr[6] == value )||
        (arr[1] == value && arr[4] == value && arr[7] == value )||
        (arr[2] == value && arr[5] == value && arr[8] == value )||
        (arr[0] == value && arr[4] == value && arr[8] == value) ||
        (arr[2] == value && arr[4] == value && arr[6] == value))
        {
            after_winner();
            turnMsg.innerHTML=`Winner is ${value}`;
    }
    else{
        if(        
         (arr[0] == "O" || arr[0] == "X" )&&
         (arr[1] == "O" || arr[1] == "X" )&&
         (arr[2] == "O" || arr[2] == "X" )&&
         (arr[3] == "O" || arr[3] == "X" )&&
         (arr[4] == "O" || arr[4] == "X" )&&
         (arr[5] == "O" || arr[5] == "X" )&&
         (arr[6] == "O" || arr[6] == "X" )&&
         (arr[7] == "O" || arr[7] == "X" )&&
         (arr[8] == "O" || arr[8] == "X" )){

            after_winner();
            turnMsg.innerHTML=`TIE MATCH`;
        }
    }
}
// after Winner 
function after_winner(){
    for (let i = 0; i < boxes.length; i++) {
      boxes[i].style.pointerEvents="none";
    }
    let winner_sound = new Audio('./sound-box/winner.mp3');
        winner_sound.play();
        bgm_track.pause();
}
// Restart the Game
function restart(){
        location.reload(true);
}