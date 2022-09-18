function openPlayerConfig(event) {
  editedPlayer = +event.target.dataset.playerid; // +"1" => 1
  playerConfigOverlayElement.style.display = "block";
  backdropElement.style.display = "block";
}

function closePlayerConfig() {
  playerConfigOverlayElement.style.display = "none";
  backdropElement.style.display = "none";
  formElement.firstElementChild.classList.remove("error");
  formElement.firstElementChild.lastElementChild.value = "";
}

function savePlayerConfig(event) {
  event.preventDefault(); // Prevents the page to be realoaded and lose all we have there
  const formData = new FormData(event.target);
  const enteredPlayerName = formData.get("playername").trim(); // trim() deletes all white spaces before and after first and last word
  if (!enteredPlayerName) {
    // enteredPlayerName === ""
    event.target.firstElementChild.classList.add("error");
    errorsOutputElement.textContent = "Please enter a vaid name!";
    return;
  }

  const updatedPlayerDataElement = document.getElementById(
    "player-" + editedPlayer + "-data"
  );
  updatedPlayerDataElement.children[1].textContent = enteredPlayerName;

  players[editedPlayer - 1].name = enteredPlayerName;

  closePlayerConfig();
}
