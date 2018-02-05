"use strict"

console.log("Welcome to the beerpong simulator");

function getFourSidedDiceNumber(){
	for(let i = 0; i <= 1; i++){
	let result=Math.floor((Math.random()*4)+1)
	console.log(result);
		if(result === 1 || result === 4){
			console.log("make");
			return true;
		}
		else{
			console.log("miss");
			return false;
		}

	}
}

function getSixSidedDiceNumber(){
	for(let i = 0; i <= 1; i++){
	let result =Math.floor((Math.random()*6)+1)
	console.log(result);
		if(result === 1 || result === 6){
			console.log("make");
			return true;
		}
		else{
			console.log("miss");
			return false;
		}
	}
}

function getEightSidedDiceNumber(){
	for(let i = 0; i <= 1; i++){
	let result =Math.floor((Math.random()*8)+1)
	console.log(result);
		if(result === 1 || result === 8){
			console.log("make");
			return true
		}
		else{
			console.log("miss");
			return false;
		}
	}
}

function getTenSidedDiceNumber(){
	for(let i = 0; i <= 1; i++){
	let result =Math.floor((Math.random()*10)+1)
	console.log(result);
		if(result === 1 || result === 10){
			console.log("make");
			return true;
		}
		else{
			console.log("miss");
			return false;
		}
	}
}

function getTwelveSidedDiceNumber(){
	for(let i = 0; i <= 1; i++){
	let result =Math.floor((Math.random()*12)+1)
	console.log(result);
		if(result === 1 || result === 12){
			console.log("make");
			return true;
		}
		else{
			console.log("miss");
			return false;
		}
	}
}

function getTwentySidedDiceNumber(){
	for(let i = 0; i <= 1; i++){
	let result =Math.floor((Math.random()*20)+1)
	console.log(result);
		if(result === 1 || result === 20){
			console.log("make");
			return true;
		}
		else{
			console.log("miss");
			return false;
		}
	}
}

function runGame() {
	let playerOneScore = 0;
	let playerTwoScore = 0;
	let playerOneTurn = true;

let counter = 0
while(playerOneScore !== 10 && playerTwoScore !== 10){
	if(playerOneTurn && counter === 0){
		updateScore(playerOneScore, playerTwoScore);
		alert("Player one first shot");
		
		
	}

	else if(playerOneTurn && counter === 1){
		alert("Player one second shot");
		


	}

	else if(!playerOneTurn && counter === 0){
		updateScore(playerOneScore, playerTwoScore);
		alert("Player two first shot");
	
	}

	else if(!playerOneTurn && counter ===1){
		alert("Player two second shot");
			
	}
if(playerOneTurn){
	if(playerOneScore <=2){
		let didMake = getFourSidedDiceNumber();
		if(didMake){
			playerOneScore++;
		}
		

	}
	else if(playerOneScore <= 4){
		let didMake = getSixSidedDiceNumber();
		if(didMake){
			playerOneScore++;
			}
	}
	else if(playerOneScore <=6){
		let didMake = getEightSidedDiceNumber();
		if(didMake){
			playerOneScore++;
		}
	}	
	else if(playerOneScore <=7){
		let didMake = getTenSidedDiceNumber();
		if(didMake){
			playerOneScore++;
		}
	}
	else if(playerOneScore <=8){
		let didMake = getTwelveSidedDiceNumber();
		if(didMake){
			playerOneScore++;
		}
	}
	else if(playerOneScore <=9){
		let didMake = getTwentySidedDiceNumber();
		if(didMake){
			playerOneScore++;
		}
	}
}
else{

    if(playerTwoScore <=2){
		let didMake = getFourSidedDiceNumber();
		if(didMake){
			playerTwoScore++;
		}
	}
	else if(playerTwoScore <= 4){
		let didMake = getSixSidedDiceNumber();
		if(didMake){
			playerTwoScore++;
		}
	}
	else if(playerTwoScore <=6){
		let didMake = getEightSidedDiceNumber();
		if(didMake){
			playerTwoScore++;
		}

	}	
	else if(playerTwoScore <=7){
		let didMake = getTenSidedDiceNumber();
		if(didMake){
			playerTwoScore++;
		}
	}
	else if(playerTwoScore <=8){
		let didMake = getTwelveSidedDiceNumber();
		if(didMake){
			playerTwoScore++;
		}
	}
	else if(playerTwoScore <=9){
		let didMake = getTwentySidedDiceNumber();
		if(didMake){
			playerTwoScore++;
		}
	}
}
if(playerOneTurn && counter===1){
	playerOneTurn = false
	counter=0
}
else if(!playerOneTurn && counter===1){
	playerOneTurn = true
	counter=0

}
else{
	counter++
}
if(playerOneScore === 10){
	document.write("PLAYER ONE WINS   ");
	finalScore(playerOneScore, playerTwoScore);


}
else if(playerTwoScore === 10){
	document.write("PLAYER TWO WINS   ");
	finalScore(playerOneScore, playerTwoScore);
}

}
}

function updateScore(playerOneScore, playerTwoScore){
	alert("Player One Score:" + playerOneScore + " Player Two Score: " + playerTwoScore);
}

function finalScore(playerOneScore, playerTwoScore){
	document.write("Player One Score:" + playerOneScore + " Player Two Score: " + playerTwoScore);
}




runGame();

















	

	
	



