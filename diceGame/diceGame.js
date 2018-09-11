runGame();


function rollDie(sides, message)
{
	alert(message);

	let result = Math.floor(Math.random() * sides) + 1;
	return result;
}

function createPlayer(baseHealth, rounds, dieSides, gold)
{
	let playerHealth = [baseHealth + (rounds * 2), dieSides];
	return playerHealth;
}

function damagePlayer(player, rollResult)
{
	let playerHealth = player - rollResult;
	return playerHealth;
}

function healPlayer(player, rollResult)
{
	let playerHealth = player + rollResult;
	return playerHealth;
}

function displayHealth(message, playerOneHealth, playerTwoHealth)
{
	alert(message + playerOneHealth + playerTwoHealth);
}

function increaseDieSides(sides)
{
	let dieSides;
	if(sides < 12)
	{
		dieSides = sides + 2;
	}
	else
	{
		dieSides = sides + 8;
	}

	return dieSides;
}

function determineWinner(playerOne, playerTwo)
{
	let winner;

	if(playerOne[0] > playerTwo[0])
	{
		winner = 1;
	}
	else
	{
		winner = 2;
	}

	return winner;
}

function distributeGold(winner, playerOne, playerTwo, victoryGold)
{
	if(winner == 1)
	{
		playerOne[2] = playerOne[2] + victoryGold;
	}
	else
	{
		playerTwo[2] = playerTwo[2] + victoryGold;
	}
}

function victoryGoldValue(rounds, baseGold)
{
	victoryGold = baseGold + rounds * 2;
	return victoryGold;
}

function battle(playerOne, playerTwo)
{
	while(playerOne[0] > 0 && playerTwo[0] > 0)
	{

		let damage = rollDie(playerOne[1], "playerOne: hit enter to roll your die");

		playerTwo[0] = damagePlayer(playerTwo[0], damage);

		damage = rollDie(playerTwo[1], "Player two: hit enter to roll your die");

		playerOne[0] = damagePlayer(playerOne[0], damage);

		displayHealth("Your respective health is:", playerOne[0], playerTwo[0]);
	}
}

function runGame()
{
	let baseHealth = 20;

	let baseGold = 20

	let sides = 6

	let rounds = 0

	let playerGold = 0

	let goldValue;

	let winner;

	playerOne = createPlayer(baseHealth, rounds, sides, playerGold);

	playerTwo = createPlayer(baseHealth, rounds, sides, playerGold);

	while(sides < 30)
	{
		battle(playerOne, playerTwo);

		winner = determineWinner(playerOne[0], playerTwo[0]);

		victoryGoldValue(rounds, baseGold);

		distributeGold(winner, playerOne, playerTwo, rounds);

		sides = sides + 2;
	}
}




