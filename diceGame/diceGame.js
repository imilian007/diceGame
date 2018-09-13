let startingHealth = 20;

let baseGold = 20;

let startingSides = 4;

let rounds = 0;

let isMarket = false;

let playerOne = createPlayer(startingHealth, startingSides);

let playerTwo = createPlayer(startingHealth, startingSides);

function createPlayer(health, sides, gold = 0)
{
	let player = [health, sides, gold];

	return player;
}

function playerOneTurn()
{
	let result = Math.floor(Math.random() * playerOne[1]) + 1;

	playerTwo[0] -= result;

	console.log("player two: " +playerTwo[0]);

	if(playerTwo[0] <= 0){
		console.log("Player two has fainted")
		playerOne = distributeGold(playerOne);
		healPlayers(playerOne, playerTwo);
		rounds ++;

		if(playerOne[1] === 28){
			console.log("Player One attained the 24 sided die and defeated player two! He is the Champion!");
			location.reload();
		}

		if(playerOne[2] > 20 && playerOne[2] < 40)
		{
			playerOne[1] += 2;
			console.log("Player one now has a " + playerOne[1] + " sided die")
		}
		else if(playerOne[2] > 40 && playerOne[2] < 60)
		{
			playerOne[1] += 2;
			console.log("Player one now has a " + playerOne[1] + " sided die")
		}
		else if(playerOne[2] > 60 && playerOne[2] < 80)
		{
			playerOne[1] += 2;
			console.log("Player one now has a " + playerOne[1] + " sided die")
		}
		else if(playerOne[2] > 80 && playerOne[2] < 100)
		{
			playerOne[1] += 2;
			console.log("Player one now has a " + playerOne[1] + " sided die")
		}
		else if(playerOne[2] > 100 && playerOne[2] < 120)
		{
			playerOne[1] += 2;
			console.log("Player one now has a " + playerOne[1] + " sided die")
		}
		else if(playerOne[2] > 120)
		{
			playerOne[1] += 8;
			console.log("Player one now has a " + playerOne[1] + " sided die")
		}
		else
		{
		}
	}
	else
	{
	}
}
function playerTwoTurn()
{
	let result = Math.floor(Math.random() * playerTwo[1]) + 1;

	playerOne[0] -= result;

	console.log("player one: " + playerOne[0]);

	if(playerOne[0] <= 0){
		console.log("Player one has fainted")
		playerTwo = distributeGold(playerTwo);
		healPlayers(playerOne, playerTwo);
		rounds++;

		if(playerTwo[1] === 8){
			console.log("Player Two attained the 24 sided die and defeated player one! He is the Champion!");
			location.reload();
		}

		if(playerTwo[2] > 20 && playerTwo[2] < 40)
		{
			playerTwo[1] += 2;
			console.log("Player two now has a " + playerTwo[1] + " sided die")
		}
		else if(playerTwo[2] > 40 && playerTwo[2] < 60)
		{
			playerTwo[1] += 2;
			console.log("Player two now has a " + playerTwo[1] + " sided die")
		}
		else if(playerTwo[2] > 60 && playerTwo[2] < 80)
		{
			playerTwo[1] += 2;
			console.log("Player two now has a " + playerTwo[1] + " sided die")
		}
		else if(playerTwo[2] > 80 && playerTwo[2] < 100)
		{
			playerTwo[1] += 2;
			console.log("Player two now has a " + playerTwo[1] + " sided die")
		}
		else if(playerTwo[2] > 100 && playerTwo[2] < 120)
		{
			playerTwo[1] += 2;
			console.log("Player two now has a " + playerTwo[1] + " sided die")
		}
		else if(playerTwo[2] > 120)
		{
			playerTwo[1] += 8;
			console.log("Player two now has a " + playerTwo[1] + " sided die")
		}
		else
		{
		}
	}
	else
	{
	}
}

function distributeGold(player) 
{
	player[2] += baseGold + (rounds);
	return player;
}

function healPlayers(playerOne, playerTwo)
{
	playerOne[0] = startingHealth;
	playerTwo[0] = startingHealth;
}