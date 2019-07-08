
class Tomagotchi {
	constructor(name){
		this.name = name;
		this.hunger = 0;
		this.boredom = 0;
		this.sleep = 0;
		this.age = 0;
	}
}

let timer;
let seconds = 0;
let watchIsRunning = false;
$("#playGameButton").click(function(){
    if(!watchIsRunning){
        watchIsRunning = true;
        timer = setInterval(function(){
            seconds++;
            if(seconds % 2 === 0){
            	game.currentPlayer.hunger ++;
            	$("#hungerPoints").text(game.currentPlayer.hunger);
            	if(game.currentPlayer.hunger >= 10){
					clearInterval(timer);
					$(".startPage").css("display", "none");
					$(".gamePlay").css("display", "none");
					$("#tooHungry").text(game.currentPlayer.name);
					$("#deadOfHunger").css("display", "block");
					$("#gameOverImage").css("display", "block");
					$("audio").attr("src", "mrKrabsViolin.mp3");
				}
            } if(seconds % 4 === 0){
            	game.currentPlayer.sleep ++;
            	$("#sleepPoints").text(game.currentPlayer.sleep);
            	if(game.currentPlayer.sleep >= 10){
					clearInterval(timer);
					$(".startPage").css("display", "none");
					$(".gamePlay").css("display", "none");
					$("#tooTired").text(game.currentPlayer.name);
					$("#deadOfLackOfSleep").css("display", "block");
					$("#gameOverImage").css("display", "block");
					$("audio").attr("src", "mrKrabsViolin.mp3");
				}
            } if(seconds % 3 === 0){
            	game.currentPlayer.boredom ++;
            	$("#boredomPoints").text(game.currentPlayer.boredom);
            	if(game.currentPlayer.boredom >= 10){
					clearInterval(timer);
					$(".startPage").css("display", "none");
					$(".gamePlay").css("display", "none");
					$("#tooBored").text(game.currentPlayer.name);
					$("#deadOfBoredom").css("display", "block");
					$("#gameOverImage").css("display", "block");
					$("audio").attr("src", "mrKrabsViolin.mp3");
				}
            } if(seconds % 8 === 0){
            	game.currentPlayer.age ++;
            	$("#playerAge").text(game.currentPlayer.age);
            	if(game.currentPlayer.age >= 4){
            		$("#tomagotchiAnimation").attr("src", "https://media.giphy.com/media/yqMtk0TfjRa5W/giphy.gif");
            		// $("#upgradeAnimation").css("display", "block");
            		if(game.currentPlayer.age >= 8){
            			$("#tomagotchiAnimation").attr("src", "https://static1.squarespace.com/static/513d5b0ee4b00efcff5951e6/513d7fd4e4b00efcff599ac2/5c587af0c83025e535dd1bac/1549302514045/EagerFaceDance.gif");
            		}
				}
            }
            console.log("seconds");
            $('#seconds').text(seconds)
        }, 1000)
    }
})
$("#stop").click(function(){
    watchIsRunning = false;
    clearInterval(timer);
})


const game = {
	currentPlayer: null,
	createTomagotchi(name){
		let newTomagotchi = prompt(`What is your Tomagotchi's name?`);
		this.currentPlayer = new Tomagotchi(newTomagotchi);
	},
	initLayout(){
		const playerName = this.currentPlayer.name;
		const playerAge = this.currentPlayer.age
		$("#displayName").append(playerName);
		$("#playerAge").append(playerAge);
	},
}

$(".gamePlay").css("display", "none");
$("#deadOverfed").css("display", "none");
$("#deadOverslept").css("display", "none");
$("#deadOfFun").css("display", "none");
$("#deadOfHunger").css("display", "none");
$("#deadOfLackOfSleep").css("display", "none");
$("#deadOfBoredom").css("display", "none");

$("#playGameButton").on("click", (e) => {
	$(".startPage").css("display", "none");
	$(".gamePlay").css("display", "block");
	game.createTomagotchi();
	game.initLayout();
	$("audio").attr("src", "spongebobBackground.mp3");
});



$("#eatButton").on("click", (e) => {
	game.currentPlayer.hunger --;
	$("#hungerPoints").text(game.currentPlayer.hunger);
	if(game.currentPlayer.hunger < 0){
		clearInterval(timer);
		$(".startPage").css("display", "none");
		$(".gamePlay").css("display", "none");
		$("#overfed").text(game.currentPlayer.name);
		$("#deadOverfed").css("display", "block");
		$("#gameOverImage").css("display", "block");
		$("audio").attr("src", "mrKrabsViolin.mp3");
	}
});

$("#sleepButton").on("click", (e) => {
	game.currentPlayer.sleep --;
	$("#sleepPoints").text(game.currentPlayer.sleep);
	if(game.currentPlayer.sleep < 0){
		clearInterval(timer);
		$(".startPage").css("display", "none");
		$(".gamePlay").css("display", "none");
		$("#overslept").text(game.currentPlayer.name);
		$("#deadOverslept").css("display", "block");
		$("#gameOverImage").css("display", "block");
		$("audio").attr("src", "mrKrabsViolin.mp3");
	}
});

$("#boredomButton").on("click", (e) => {
	game.currentPlayer.boredom --;
	$("#boredomPoints").text(game.currentPlayer.boredom);
	if(game.currentPlayer.boredom < 0){
		clearInterval(timer);
		$(".startPage").css("display", "none");
		$(".gamePlay").css("display", "none");
		$("#tooMuchFun").text(game.currentPlayer.name);
		$("#deadOfFun").css("display", "block");
		$("#gameOverImage").css("display", "block");
		$("audio").attr("src", "mrKrabsViolin.mp3");
	}
});


















