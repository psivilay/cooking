var gallonToQuarts = function(askAmount) {
	return askAmount * 4;
};

var gallonToCups = function(askAmount) {
	return askAmount * 16
}

var cuptoPints = function(askAmount) {
	return parseFloat(askAmount / 2)
}

var askAmount = parseInt(prompt("How many cups?"));

var result = cuptoPints(askAmount);

alert("That many cups is equal to " + result + " pints.");
