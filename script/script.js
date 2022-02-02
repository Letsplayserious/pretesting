function runningCredits(){
    let credits = document.querySelectorAll(".text-after");
    setTimeout(() => {
        for (let i = 0; i < credits.length; i++) {
            setTimeout(() => {
                credits[i].style.display = "block";
            }, 3000)
            setTimeout(() => {
                credits[i].style.display = "none";
            }, 6000)
        }
    }, 3000);
}

// Event on space keydown
document.addEventListener("keydown", (event) => {
    if(event.code == "Space"){
        // Delete main section
        let removedKey = document.getElementById("main");
        removedKey.parentNode.removeChild(removedKey);

        // Run music
        let music = new Audio("audio/y2mate.com - Directed by Robert B Weide theme meme_192kbps.mp3");
        music.play();

        // Change visibility of credits
        let removed = document.querySelectorAll(".removed");
        removed[0].style.display = "flex";

        setTimeout(runningCredits, 7000);
    }
  })