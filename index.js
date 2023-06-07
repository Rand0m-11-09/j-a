const playButton = document.querySelector(".play-container");
const play = document.querySelector(".play");
const rickRoll = document.querySelector("#rickroll");

playButton.addEventListener("click", () => {
    play.classList.add("remove");
    playButton.classList.add("remove");
    rickRoll.play();
})
play.addEventListener("click", () => {
    playButton.classList.add("remove");
    play.classList.add("remove");
    rickRoll.play();
})