var randomnNumber1 = Math.floor(Math.random()*6+1)
var string1 = "./images/dice" + randomnNumber1 + ".png"

var diceOne = document.querySelectorAll("img")[0]
diceOne.setAttribute("src",string1)

var randomnNumber2 = Math.floor(Math.random()*6+1)
var string2 = "./images/dice" + randomnNumber2 + ".png"

var diceTwo = document.querySelectorAll("img")[1]
diceTwo.setAttribute("src",string2)

var winner = document.querySelector("h1")
if(randomnNumber1>randomnNumber2){
    winner.innerHTML="Player 1 wins!!"
}else if(randomnNumber2>randomnNumber1){
    winner.innerHTML="Player 2 wins!!"
}else if (randomnNumber1===randomnNumber2){
    winner.innerHTML=("Tie Game")
}
