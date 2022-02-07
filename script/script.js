function runningCredits(){
    let credits = document.querySelectorAll(".text-after");
    for (let i = 0; i < credits.length; i++) {
        setTimeout(() => {
            credits[i].style.display = "block";
            if(credits[i] !== credits[0]){
                credits[i-1].style.display = "none";
            }
            if(credits[i] == credits[credits.length-1]){
                setTimeout(() => {
                    credits[i].style.display = "none";
                }, 3000);
            }
        }, 3000*i)
    }
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

        setTimeout(runningCredits, 4500);
    }
  })