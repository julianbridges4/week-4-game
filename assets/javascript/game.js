$(document).ready(function() {

	var emerald;
    var ruby;
    var sapphire;
    var amethyst;
    var randomNumber;
    var totalScore;
    var wins = 0;
    var losses = 0;
    var randomValue;

    function randomGenerator(min, max) {
        return min + Math.floor((Math.random() * (max + 1 - min)));
    }
    
    function randomGemValue() {
    	randomValue = randomGenerator(1,12);
    	return randomValue;
    }

    function reset() {
    	totalScore = 0;
    	randomNumber = randomGenerator(19,120);
    	$("#randomNumber").text(randomNumber);
    	$("#total-score").text(totalScore);
    	emerald = randomGemValue();
    	ruby = randomGemValue();
    	sapphire = randomGemValue();
    	amethyst = randomGemValue();
    }

    $("#win").text(wins);
    $("#loss").text(losses);

    $("#emerald").on("click", function() {
    	totalScore += emerald;
    	console.log(totalScore);
    	$("#total-score").text(totalScore);
    	scoreTest();
    });

    $("#ruby").on("click", function() {
    	totalScore += ruby;
    	console.log(totalScore);
    	$("#total-score").text(totalScore);
    	scoreTest();
    });

    $("#sapphire").on("click", function() {
    	totalScore += sapphire;
    	console.log(totalScore);
    	$("#total-score").text(totalScore);
    	scoreTest();
    });

    $("#amethyst").on("click", function() {
    	totalScore += amethyst;
    	console.log(totalScore);
    	$("#total-score").text(totalScore);
    	scoreTest();
    });

    function scoreTest() {
    	if (totalScore === randomNumber) {
	    	wins++;
	    	$("#win").text(wins);
	    	reset();
	    	alert("You won!");
	    } 

	    if (totalScore > randomNumber) {
	    	losses++;
	    	$("#loss").text(losses);
	    	reset();
	    	alert("You lost!");
	    }
    }

    reset();
    emerald = randomGemValue();
    ruby = randomGemValue();
    sapphire = randomGemValue();
    amethyst = randomGemValue();

    //check console for gem values
    console.log(emerald);
    console.log(ruby);
    console.log(sapphire);
    console.log(amethyst);
})