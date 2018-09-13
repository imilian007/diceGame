runGame();

function runGame()
{
	let baseHealth = 20;

	let baseGold = 20;

	let startingSides = 4;

	let rounds = 0;

	playerOne = createPlayer(baseHealth, startingSides);

	playerTwo = createPlayer(baseHealth, startingSides);

	while(playerOne[1] < 30 && playerTwo[1] < 30)
	{
		battle(playerOne, playerTwo);

		let winner = determineWinner(playerOne, playerTwo);

		victoryGold = victoryGoldValue(rounds, baseGold);

		if(winner === 1){
			playerOne = distributeGold(playerOne, victoryGold);
		}
		else if(winner === 2){
			playerTwo = distributeGold(playerTwo, victoryGold);
		}

		rounds++;

		playerOne = merchant(playerOne, rounds, baseHealth);
		playerTwo = merchant(playerTwo, rounds, baseHealth);
	}

	displayChampion(playerOne, playerTwo);
}

function createPlayer(baseHealth, dieSides, gold = 0)
{
	let player = [baseHealth, dieSides, gold];
	return player;
}


function battle(playerOne, playerTwo)
{
	while(playerOne[0] > 0 && playerTwo[0] > 0)
	{
		let damage = rollDie(playerOne[1], "Player one rolls the die");

		playerTwo[0] = damagePlayer(playerTwo[0], damage);

		damage = rollDie(playerTwo[1], "Player two rolls the die");

		playerOne[0] = damagePlayer(playerOne[0], damage);

		displayHealth("Your respective health is:", playerOne[0], playerTwo[0]);
	}
}

function rollDie(sides, message)
{
	console.log(message);

	let result = Math.floor(Math.random() * sides) + 1;
	return result;
}

function damagePlayer(health, rollResult)
{
	let playerHealth = health - rollResult;
	return playerHealth;
}

function displayHealth(message, playerOneHealth, playerTwoHealth)
{
	console.log(message + playerOneHealth + " and " + playerTwoHealth);
}

function determineWinner(playerOne, playerTwo)
{
	let winner;

	if(playerOne[0] > 0)
	{
		winner = 1;
	}
	else if(playerTwo[0] > 0)
	{
		winner = 2;
	}
	else
	{
		
	}

	return winner;
}

function victoryGoldValue(rounds, baseGold)
{
	victoryGold = baseGold + rounds * 2;
	return victoryGold;
}

function distributeGold(player, victoryGold)
{
	player[2] = player[2] + victoryGold;

	return player;
}

function merchant(player, rounds, baseHealth)
{
	if(player[2] > 30 && player[2] < 69)
	{
		player[1] = 6;
	}
	else if(player[2] > 70 && player[2] < 109)
	{
		player[1] = 8;
	}
	else if(player[2] > 110 && player[2] < 139)
	{
		player[1] = 10;
	}
	else if(player[2] > 140 && player[2] < 169)
	{
		player[1] = 12;
	}
	else if(player[2] > 170 && player[2] < 229)
	{
		player[1] = 20;
	}
	else if(player[2] > 230)
	{
		player[1] = 30;
	}
	else
	{

	}

	player[0] = baseHealth;
	return player;
}

function displayChampion(playerOne, playerTwo){
		if(playerTwo[1] > playerOne[1]){
		console.log("player two is the winner!")
	}
	else{
		console.log("player one is the winner!")
	}
}
