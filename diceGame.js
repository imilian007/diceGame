

//funtion to role a die

//function to take health away from players

//function to heal players

//function to give gold

//function to play game



function rollDie(sides, message){
	alert(message);

	let result = Math.floor(Math.random() * sides);
	return result;

function createPlayer(baseHealth, rounds, dieSides){
	let playerHealth = [baseHealth + (rounds * 2), dieSides];
	return playerHealth;
}

function damagePlayer(player, rollResult){
	let playerHealth = player - rollResult;
	return playerHealth;
}

function healPlayer(player, rollResult){
	let playerHealth = player + rollResult;
	return playerHealth;
}

function displayHealth(message, playerOneHealth, playerTwoHealth){
	alert(message + playerOneHealth + playerTwoHealth);
}

function increaseDieSides(sides){
	let dieSides;
	if(sides < 12){
		dieSides = sides + 2;
	}
	else{
		dieSides = sides + 8;
	}

	return dieSides;
}

function runGame(){
	baseHealth = 20;

	sides = 6

	rounds = 0

	while(sides < 30){
		playerOne = createPlayer(baseHealth, rounds, sides);

		playerTwo = createPlayer(basehealth, rounds, sides);

		while(playerOne[0] > 0 && playerTwo[0] > 0){

			let damage = rollDie(playerOne[1], "playerOne: hit enter to roll your die");

			playerTwo[0] = damagePlayer(playerTwo[0], damage);

			damage = rollDie(playerTwo[1], "Player two: hit enter to roll your die");

			playerOne[0] = damagePlayer(playerOne[0], damage);

			displayHealth("Your respective health is:", playerOne[0], playerTwo[0]);
		}
	}
}




