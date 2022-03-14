
let chooseCharacterCounter = 0;

function chooseCharacter(character) {
	if(chooseCharacterCounter === 0) {
	window.localStorage.setItem("firstPlayer", character);
	chooseCharacterCounter = 1;
} else {
	window.localStorage.setItem("secondPlayer", character);
	location.href="board.html";
}
}
