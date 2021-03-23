let result1=document.getElementById("result");
let dice_1=document.getElementById("player1");
let dice_2=document.getElementById("player2");
let btn1=document.getElementById("btn");
function btn(){
   random_1=Math.floor(Math.random()*6)+1;
   
   dice_1.setAttribute("src",`dice_${random_1}.png`);

   random_2=Math.floor(Math.random()*6)+1;
  dice_2.setAttribute("src",`dice_${random_2}.png`);

if(random_1>random_2)
  result1.innerHTML="Player 1 Won";
  else if(random_1==random_2)
  result1.innerHTML="Match is Tie";
  else
  result1.innerHTML="Player 2 Won";
   
}