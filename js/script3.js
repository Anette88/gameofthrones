
const theWinner = window.localStorage.getItem("winner");

const displayWinner = document.querySelector("#Winner");

function getTheWinner() {
  displayWinner.src=`tokens/${theWinner}.png`;
}
getTheWinner();
